import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FitMarketPage from "./FitMarketPage";
import {
  buildProductOrderMessage,
  openWhatsAppMessage,
} from "../utils/whatsapp";
import { products } from "../utils/productsData";

vi.mock("../utils/whatsapp", () => ({
  buildProductOrderMessage: vi.fn(() => "ORDER_MESSAGE"),
  openWhatsAppMessage: vi.fn(),
}));

describe("FitMarketPage", () => {
  it("injects SEO metadata and product structured data", () => {
    render(<FitMarketPage />);

    expect(document.title).toContain("Boutique Fit Market");
    expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).toContain(
      "Découvrez les produits Fit Market BYKMTVTION"
    );
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe(
      "https://bykmtvtion.com/boutique"
    );

    const jsonLdScript = document.getElementById("fit-market-products-jsonld");
    expect(jsonLdScript).not.toBeNull();

    const parsedJsonLd = JSON.parse(jsonLdScript.textContent);
    expect(parsedJsonLd["@type"]).toBe("ItemList");
    expect(parsedJsonLd.numberOfItems).toBe(products.length);
  });

  it("injects product-specific SEO metadata on a product URL context", () => {
    render(<FitMarketPage focusedProductId="boxing-gloves-10oz" />);

    expect(document.title).toContain("Gants de boxe Taille 10 oz");
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(
      "https://bykmtvtion.com/boutique/produit/boxing-gloves-10oz"
    );

    const jsonLdScript = document.getElementById("fit-market-products-jsonld");
    const parsedJsonLd = JSON.parse(jsonLdScript.textContent);
    expect(parsedJsonLd["@type"]).toBe("Product");
    expect(parsedJsonLd.sku).toBe("boxing-gloves-10oz");
  });

  it("filters products by category", async () => {
    const user = userEvent.setup({ delay: null });
    render(<FitMarketPage />);

    await user.click(screen.getByRole("button", { name: /Accessoires de fitness/i }));
    expect(
      screen.getByRole("heading", { name: /Tapis de yoga/i })
    ).toBeInTheDocument();
  });

  it("builds and sends a direct WhatsApp order for a selected quantity", async () => {
    const user = userEvent.setup({ delay: null });
    render(<FitMarketPage />);

    const quantityInput = screen.getAllByLabelText(/Quantite/i)[0];
    fireEvent.change(quantityInput, { target: { value: "2" } });

    await user.click(screen.getAllByRole("button", { name: /Acheter simple/i })[0]);

    expect(buildProductOrderMessage).toHaveBeenCalledWith({
      productName: "Gants de boxe Taille 10 oz",
      quantity: 2,
      price: 50000,
      customerName: "Client",
    });
    expect(openWhatsAppMessage).toHaveBeenCalledWith("ORDER_MESSAGE");
  });

  it("adds selected quantity to cart through callback", async () => {
    const user = userEvent.setup({ delay: null });
    const onAddToCart = vi.fn();
    render(<FitMarketPage onAddToCart={onAddToCart} />);

    const quantityInput = screen.getAllByLabelText(/Quantite/i)[0];
    fireEvent.change(quantityInput, { target: { value: "2" } });

    await user.click(screen.getAllByRole("button", { name: /Ajouter au panier/i })[0]);

    expect(onAddToCart).toHaveBeenCalledWith({
      productId: "boxing-gloves-10oz",
      quantity: 2,
    });
  });
});
