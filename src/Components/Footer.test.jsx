import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import SiteFooter from "./Footer";

describe("SiteFooter", () => {
  it("renders key navigation and contact links", () => {
    render(
      <MemoryRouter>
        <SiteFooter />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: "Accueil" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "FIT MARKET" })).toHaveAttribute(
      "href",
      "/boutique"
    );

    const whatsappLink = screen.getByRole("link", { name: /WhatsApp/i });
    expect(whatsappLink).toHaveAttribute("href", expect.stringContaining("wa.me/22891565854"));
  });
});
