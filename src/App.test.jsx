import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

const renderAtPath = (path) => {
  window.history.pushState({}, "", path);
  return render(<App />);
};

const findH1Containing = (text) =>
  screen.findByText((content, element) => {
    return element?.tagName?.toLowerCase() === "h1" && content.includes(text);
  });

describe("App routing integration", () => {
  it("redirects /homme to the boutique page", async () => {
    renderAtPath("/homme");
    expect(
      await screen.findByRole("heading", { name: /Univers\s+FIT MARKET/i })
    ).toBeInTheDocument();
  });

  it("redirects /portfolio to the marque page", async () => {
    renderAtPath("/portfolio");
    expect(await screen.findByText(/Parcours sportif/i)).toBeInTheDocument();
  });

  it("falls back to home for unknown paths", async () => {
    renderAtPath("/route-inconnue");
    expect(await screen.findByRole("link", { name: /Explorer BYKMTVTION/i })).toBeInTheDocument();
  });

  it.each([
    ["/mentions-legales", "Mentions Légales"],
    ["/conditions-generales", "Conditions Générales d'Utilisation"],
    ["/politique-confidentialite", "Politique de Protection des Données Personnelles"],
    ["/politique-cookies", "Politique de Cookies"],
    ["/accessibilite", "Déclaration d'Accessibilité"],
    ["/securite", "Politique de Sécurité"],
  ])("renders legal route %s", async (path, headingText) => {
    renderAtPath(path);
    expect(await findH1Containing(headingText)).toBeInTheDocument();
  });
});
