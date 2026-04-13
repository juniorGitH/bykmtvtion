import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FitMarketPage from "./FitMarketPage";
import {
  buildProductOrderMessage,
  openWhatsAppMessage,
} from "../utils/whatsapp";

vi.mock("../utils/whatsapp", () => ({
  buildProductOrderMessage: vi.fn(() => "ORDER_MESSAGE"),
  openWhatsAppMessage: vi.fn(),
}));

describe("FitMarketPage", () => {
  it("filters products by category", async () => {
    const user = userEvent.setup({ delay: null });
    render(<FitMarketPage />);

    await user.click(screen.getByRole("button", { name: /Accessoires de fitness/i }));
    expect(screen.getByText(/Bandes de resistance Pro Set/i)).toBeInTheDocument();
  });

  it("builds and sends a direct WhatsApp order for a selected quantity", async () => {
    const user = userEvent.setup({ delay: null });
    render(<FitMarketPage />);

    const quantityInput = screen.getAllByLabelText(/Quantite/i)[0];
    fireEvent.change(quantityInput, { target: { value: "2" } });

    await user.click(screen.getAllByRole("button", { name: /Acheter simple/i })[0]);

    expect(buildProductOrderMessage).toHaveBeenCalledWith({
      productName: "Gants Pro Impact 12oz",
      quantity: 2,
      price: 64000,
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
      productId: "box-gloves-pro",
      quantity: 2,
    });
  });
});
