import { beforeEach, describe, expect, it } from "vitest";
import {
  articleService,
  authService,
  contentService,
  orderService,
  paygateService,
  tontineService,
} from "./services";

describe("local services", () => {
  beforeEach(async () => {
    authService.logout();
    localStorage.clear();
    await authService.initialize();
  });

  it("initializes demo users and authenticates a known account", async () => {
    const users = JSON.parse(localStorage.getItem("flipdrip_users") || "[]");
    expect(users).toHaveLength(3);

    const loginResult = await authService.login("admin@fripdrip.com", "admin123");
    expect(loginResult.success).toBe(true);
    expect(authService.isAuthenticated()).toBe(true);
    expect(authService.hasRole("Admin")).toBe(true);

    authService.logout();
    expect(authService.isAuthenticated()).toBe(false);
  });

  it("creates, updates and deletes an article", async () => {
    const createResult = await articleService.create({
      nom: "Produit test",
      marque: "Test Brand",
      caracteristique: "Description test",
      prix: 15000,
      categorieId: 2,
    });

    expect(createResult.success).toBe(true);
    const createdId = createResult.article.id;

    const categoryArticles = await articleService.getByCategory(2);
    expect(categoryArticles.some((article) => article.id === createdId)).toBe(true);

    const updateResult = await articleService.update(createdId, {
      categorieId: 2,
      prix: 20000,
    });
    expect(updateResult.success).toBe(true);

    const updatedArticle = (await articleService.getByCategory(2)).find(
      (article) => article.id === createdId
    );
    expect(updatedArticle.prix).toBe(20000);

    const deleteResult = await articleService.delete(createdId);
    expect(deleteResult.success).toBe(true);
    expect(
      (await articleService.getByCategory(2)).some((article) => article.id === createdId)
    ).toBe(false);
  });

  it("handles order and tontine lifecycle", async () => {
    await authService.login("client@demo.com", "client123");

    const orderResult = await orderService.createOrder({
      items: [{ id: 1, quantity: 1 }],
      totalAmount: 50000,
    });
    expect(orderResult.success).toBe(true);
    expect(orderResult.order.trackingCode).toMatch(/^FD-[A-Z0-9]{8}$/);

    const byTrackingCode = await orderService.getByTrackingCode(orderResult.order.trackingCode);
    expect(byTrackingCode?.id).toBe(orderResult.order.id);

    const myOrders = await orderService.getMyOrders();
    expect(myOrders.some((order) => order.id === orderResult.order.id)).toBe(true);

    const acceptedResult = await orderService.acceptOrder(orderResult.order.id);
    expect(acceptedResult.success).toBe(true);

    const updatedOrder = (await orderService.getAllOrders()).find(
      (order) => order.id === orderResult.order.id
    );
    expect(updatedOrder.status).toBe("En cours de livraison");

    const tontineResult = await tontineService.createTontine(
      orderResult.order,
      10000,
      "Hebdomadaire",
      "Tontine premium"
    );
    expect(tontineResult.success).toBe(true);

    const paymentResult = await tontineService.addPayment(
      tontineResult.tontine.id,
      orderResult.order.totalAmount
    );
    expect(paymentResult.success).toBe(true);
    expect(paymentResult.tontine.status).toBe("Complété");

    const remaining = tontineService.calculateRemaining(paymentResult.tontine);
    expect(remaining.remainingAmount).toBeLessThanOrEqual(0);
    expect(remaining.progress).toBeGreaterThanOrEqual(100);
  });

  it("simulates payment workflow and phone normalization", async () => {
    const paymentStart = await paygateService.initiatePayment(
      10000,
      123,
      "91565854",
      "TMoney"
    );
    expect(paymentStart.success).toBe(true);

    const transactions = JSON.parse(localStorage.getItem("flipdrip_transactions") || "[]");
    transactions[0].createdAt = new Date(Date.now() - 5000).toISOString();
    localStorage.setItem("flipdrip_transactions", JSON.stringify(transactions));

    const status = await paygateService.checkStatus(paymentStart.transactionId);
    expect(status.success).toBe(true);
    expect(status.status).toBe("success");

    expect(paygateService.formatPhone("91565854")).toBe("+22891565854");
    expect(paygateService.formatPhone("+22891565854")).toBe("+22891565854");
    expect(paygateService.isValidPhone("91565854")).toBe(true);
    expect(paygateService.isValidPhone("+22891565854")).toBe(true);
    expect(paygateService.isValidPhone("123")).toBe(false);
  });

  it("returns structured site content", async () => {
    const content = await contentService.getContent();

    expect(content.home.title).toBe("FRIP&DRIP");
    expect(content.home.subtitle).toContain("streetwear");
    expect(content.contact.whatsapp).toBe("22891565854");
  });
});
