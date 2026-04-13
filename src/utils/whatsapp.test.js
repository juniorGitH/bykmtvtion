import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  WHATSAPP_NUMBER,
  buildCartOrderMessage,
  buildCoachingMessage,
  buildContactMessage,
  buildProductOrderMessage,
  openWhatsAppMessage,
} from "./whatsapp";

describe("whatsapp utils", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("builds a product order message", () => {
    const message = buildProductOrderMessage({
      productName: "Gants Pro Impact 12oz",
      quantity: 2,
      price: 64000,
      customerName: "Client",
    });

    expect(message).toContain("Produit : Gants Pro Impact 12oz");
    expect(message).toContain("Quantite : 2");
    expect(message).toContain("Prix :");
    expect(message).toContain("FCFA");
    expect(message).toContain("Nom : Client");
  });

  it("builds a cart order message", () => {
    const message = buildCartOrderMessage({
      items: [
        {
          productId: "box-gloves-pro",
          productName: "Gants Pro Impact 12oz",
          quantity: 2,
          totalPrice: 64000,
        },
        {
          productId: "fitness-kettlebell",
          productName: "Kettlebell 12kg",
          quantity: 1,
          totalPrice: 26000,
        },
      ],
      customerName: "Client",
    });

    expect(message).toContain("Gants Pro Impact 12oz x2");
    expect(message).toContain("Kettlebell 12kg x1");
    expect(message).toContain("Total commande :");
    expect(message).toContain("Nom : Client");
  });

  it("builds a coaching message with optional fallback lines", () => {
    const message = buildCoachingMessage({
      fullName: "Alice",
      phone: "90001122",
      email: "",
      preferredCoach: "DOUHADJI Ekoue",
      coachingType: "Tout",
      coachingFormat: "En ligne",
      selectedSessionPlan: "",
      objective: "Perte de poids",
      level: "Debutant",
      availability: "Soir",
      note: "",
    });

    expect(message).toContain("Nom : Alice");
    expect(message).toContain("Email : Non renseigne");
    expect(message).toContain("Format : En ligne");
    expect(message).toContain("Seance choisie : Non renseigne");
    expect(message).toContain("Message : Aucun message complementaire");
  });

  it("builds a contact message with optional email fallback", () => {
    const message = buildContactMessage({
      fullName: "Bob",
      phone: "98887766",
      email: "",
      message: "Bonjour",
    });

    expect(message).toContain("Nom : Bob");
    expect(message).toContain("Telephone : 98887766");
    expect(message).toContain("Email : Non renseigne");
    expect(message).toContain("Message : Bonjour");
  });

  it("opens a WhatsApp URL with encoded and trimmed message", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    openWhatsAppMessage("  Bonjour test  ");

    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(openSpy).toHaveBeenCalledWith(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour test")}`,
      "_blank",
      "noopener,noreferrer"
    );
  });
});
