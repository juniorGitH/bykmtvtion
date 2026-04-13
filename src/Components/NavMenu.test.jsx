import { beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavMenu from "./NavMenu";

describe("NavMenu", () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.className = "";
    vi.restoreAllMocks();
  });

  it("toggles the theme and stores the new value", async () => {
    const user = userEvent.setup({ delay: null });
    localStorage.setItem("site-theme", "light");

    render(
      <MemoryRouter>
        <NavMenu />
      </MemoryRouter>
    );

    await user.click(screen.getAllByRole("button", { name: /Mode sombre/i })[0]);

    await waitFor(() => {
      expect(document.body).toHaveClass("theme-dark");
    });
    expect(localStorage.getItem("site-theme")).toBe("dark");
  });

  it("opens WhatsApp contact with the expected message", async () => {
    const user = userEvent.setup({ delay: null });
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(
      <MemoryRouter>
        <NavMenu />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: "Nous contacter" }));

    expect(openSpy).toHaveBeenCalledTimes(1);
    const [url, target] = openSpy.mock.calls[0];
    expect(target).toBe("_blank");
    expect(url).toContain("https://wa.me/22891565854?text=");
    expect(decodeURIComponent(url.split("text=")[1])).toContain(
      "Bonjour BYKMTVTION ! Je souhaite avoir plus d'informations."
    );
  });

  it("opens the side cart and triggers checkout", async () => {
    const user = userEvent.setup({ delay: null });
    const checkoutSpy = vi.fn();

    render(
      <MemoryRouter>
        <NavMenu
          cartItems={[
            {
              productId: "box-gloves-pro",
              productName: "Gants Pro Impact 12oz",
              quantity: 2,
              totalPrice: 64000,
            },
          ]}
          cartItemsCount={2}
          cartTotalPrice={64000}
          onCheckoutCart={checkoutSpy}
        />
      </MemoryRouter>
    );

    await user.click(screen.getAllByRole("button", { name: /Ouvrir le panier/i })[0]);
    expect(screen.getByText(/Gants Pro Impact 12oz/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Valider le panier sur WhatsApp/i }));
    expect(checkoutSpy).toHaveBeenCalledTimes(1);
  });
});
