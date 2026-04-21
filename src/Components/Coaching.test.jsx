import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Coaching from "./Coaching";
import { buildCoachingMessage, openWhatsAppMessage } from "../utils/whatsapp";

vi.mock("../utils/whatsapp", () => ({
  buildCoachingMessage: vi.fn(() => "COACHING_MESSAGE"),
  openWhatsAppMessage: vi.fn(),
}));

describe("Coaching page", () => {
  it("shows the embedded coaching videos and the quick CTA", () => {
    const { container } = render(
      <MemoryRouter>
        <Coaching />
      </MemoryRouter>
    );

    expect(screen.getByText(/Vidéos de coaching/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Formulaire coaching/i })).toBeInTheDocument();
    expect(container.querySelectorAll("blockquote.tiktok-embed")).toHaveLength(3);
  });

  it("submits the form through WhatsApp builder", async () => {
    const user = userEvent.setup({ delay: null });

    render(
      <MemoryRouter>
        <Coaching />
      </MemoryRouter>
    );

    await user.selectOptions(screen.getByLabelText(/Format de coaching/i), "En ligne");
    await user.selectOptions(
      screen.getByLabelText(/Seance \/ formule choisie selon le tarif/i),
      "2 seances / semaine - 50 000 FCFA"
    );
    await user.type(screen.getByLabelText(/Nom complet/i), "  Alice Doe  ");
    await user.type(screen.getByLabelText(/T[eé]l[eé]phone/i), " 90001122 ");
    await user.type(screen.getByLabelText(/Email \(optionnel\)/i), "alice@example.com");
    await user.type(screen.getByLabelText(/Objectif/i), "Perte de poids");
    await user.selectOptions(screen.getByLabelText(/Niveau/i), "Debutant");
    await user.type(screen.getByLabelText(/Disponibilit[eé]/i), "Soirs en semaine");
    await user.type(screen.getByLabelText(/^Message$/i), "  Je suis motivee  ");

    await user.click(screen.getByRole("button", { name: /S'inscrire via WhatsApp/i }));

    expect(buildCoachingMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        fullName: "Alice Doe",
        phone: "90001122",
        email: "alice@example.com",
        coachingType: "Tout",
        coachingFormat: "En ligne",
        selectedSessionPlan: "2 seances / semaine - 50 000 FCFA",
        objective: "Perte de poids",
        level: "Debutant",
        availability: "Soirs en semaine",
        note: "Je suis motivee",
      })
    );
    expect(openWhatsAppMessage).toHaveBeenCalledWith("COACHING_MESSAGE");
  });
});
