import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";
import { buildContactMessage, openWhatsAppMessage } from "../utils/whatsapp";

vi.mock("../utils/whatsapp", () => ({
  WHATSAPP_NUMBER: "22891565854",
  buildContactMessage: vi.fn(() => "CONTACT_MESSAGE"),
  openWhatsAppMessage: vi.fn(),
}));

describe("Contact page", () => {
  it("sends a contact form through WhatsApp", async () => {
    const user = userEvent.setup({ delay: null });
    render(<Contact />);

    await user.type(screen.getByLabelText(/Nom complet/i), "  Jean Test  ");
    await user.type(screen.getByLabelText(/T[eé]l[eé]phone/i), " 98887766 ");
    await user.type(screen.getByLabelText(/Email \(optionnel\)/i), " jean@example.com ");
    await user.type(screen.getByLabelText(/^Message$/i), "  Bonjour !  ");

    await user.click(screen.getByRole("button", { name: /Envoyer sur WhatsApp/i }));

    expect(buildContactMessage).toHaveBeenCalledWith({
      fullName: "Jean Test",
      phone: "98887766",
      email: "jean@example.com",
      message: "Bonjour !",
    });
    expect(openWhatsAppMessage).toHaveBeenCalledWith("CONTACT_MESSAGE");
  });
});
