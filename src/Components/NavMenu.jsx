import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoLightImg from "../images/logo.svg";
import logoDarkImg from "../images/logo1.svg";
import { BRAND_NAME } from "../utils/brand";

const WHATSAPP_NUMBER = "22891565854";
const THEME_STORAGE_KEY = "site-theme";
const THEME_DARK = "dark";
const THEME_LIGHT = "light";

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === THEME_LIGHT || savedTheme === THEME_DARK) {
    return savedTheme;
  }

  return THEME_LIGHT;
};

const defaultFormatPrice = (price) => new Intl.NumberFormat("fr-FR").format(price);

const NavMenu = ({
  cartItems = [],
  cartItemsCount = 0,
  cartTotalPrice = 0,
  onRemoveCartItem = () => {},
  onCheckoutCart = () => {},
  formatPrice = defaultFormatPrice,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const bodyClass = theme === THEME_LIGHT ? "theme-light" : "theme-dark";
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(bodyClass);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (!isCartOpen) {
      document.body.classList.remove("overflow-hidden");
      return;
    }

    document.body.classList.add("overflow-hidden");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen]);

  const toggleTheme = () => {
    setTheme((previousTheme) =>
      previousTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK
    );
  };

  const isLightTheme = theme === THEME_LIGHT;
  const themeButtonLabel = isLightTheme ? "Mode sombre" : "Mode clair";
  const themeButtonIcon = isLightTheme ? "🌙" : "☀️";
  const currentLogo = theme === THEME_DARK ? logoDarkImg : logoLightImg;

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/marque", label: "BYKMTVTION" },
    { path: "/boutique", label: "FIT MARKET" },
    { path: "/coaching", label: "Coaching" },
    { path: "/contact", label: "Contact" },
  ];

  const handleWhatsAppContact = () => {
    const message = `Bonjour ${BRAND_NAME} ! Je souhaite avoir plus d'informations.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };
  const handleOpenCart = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setIsCartOpen(true);
    setIsMenuOpen(false);
  };
  const handleCloseCart = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setIsCartOpen(false);
  };
  const handleCheckoutFromCart = () => {
    onCheckoutCart();
    setIsCartOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-lg shadow-lg shadow-black/20" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center group">
              <img 
                src={currentLogo} 
                alt="BYKMTVTION Fit Market Logo" 
                className="h-16 sm:h-20 w-auto transform group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              type="button"
              onClick={toggleTheme}
              className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all border ${
                isLightTheme
                  ? "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  : "bg-gray-800 text-yellow-300 border-gray-700 hover:bg-gray-700"
              }`}
              aria-label={themeButtonLabel}
            >
              <span aria-hidden="true">{themeButtonIcon}</span>
            </button>
            <button
              type="button"
              onClick={handleOpenCart}
              className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 transition-colors"
              aria-label="Ouvrir le panier"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
              {cartItemsCount > 0 ? (
                <span className="absolute -top-1 -right-1 min-w-[1.2rem] h-5 px-1 rounded-full bg-orange-500 text-white text-[11px] font-bold flex items-center justify-center">
                  {cartItemsCount}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              onClick={handleWhatsAppContact}
              className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Nous contacter
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-colors ${
                isLightTheme
                  ? "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  : "bg-gray-800 text-yellow-300 border-gray-700 hover:bg-gray-700"
              }`}
              aria-label={themeButtonLabel}
            >
              <span aria-hidden="true">{themeButtonIcon}</span>
            </button>
            <button
              type="button"
              onClick={handleOpenCart}
              className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              aria-label="Ouvrir le panier"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
              {cartItemsCount > 0 ? (
                <span className="absolute -top-1 -right-1 min-w-[1.2rem] h-5 px-1 rounded-full bg-orange-500 text-white text-[11px] font-bold flex items-center justify-center">
                  {cartItemsCount}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen
            ? "max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0"
        }`}>
          <div className="bg-gray-900 border-t border-gray-800 px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-800">
              <button
                type="button"
                onClick={handleWhatsAppContact}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Nous contacter sur WhatsApp
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isCartOpen
        ? createPortal(
            <div className="fixed inset-0 z-[120] pointer-events-auto" aria-hidden={false}>
              <div
                onClick={handleCloseCart}
                className="absolute inset-0 bg-zinc-950/60"
                aria-hidden="true"
              />
              <aside
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Panier"
                className="absolute top-0 right-0 h-full w-full max-w-md bg-gray-900 border-l border-gray-800 shadow-2xl"
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
                    <div>
                      <h2 className="text-white font-black text-xl">
                        Panier ({cartItemsCount})
                      </h2>
                      <p className="text-xs text-gray-400">Validation via WhatsApp</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleCloseCart}
                      className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors"
                      aria-label="Fermer le panier"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                    {cartItems.length === 0 ? (
                      <p className="text-gray-400">Votre panier est vide.</p>
                    ) : (
                      cartItems.map((item) => (
                        <div
                          key={item.productId}
                          className="rounded-xl border border-gray-800 bg-black/30 p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-white font-semibold leading-snug">{item.productName}</p>
                            <p className="text-sm font-semibold text-orange-300 shrink-0">
                              {formatPrice(item.totalPrice)} FCFA
                            </p>
                          </div>
                          <div className="mt-3 flex items-center justify-between gap-3">
                            <p className="text-xs text-gray-400">Quantité : {item.quantity}</p>
                            <button
                              type="button"
                              onClick={() => onRemoveCartItem(item.productId)}
                              className="px-2 py-1 rounded-md bg-red-500/10 text-xs text-red-300 hover:bg-red-500/20 transition-colors shrink-0"
                            >
                              Retirer
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="border-t border-gray-800 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-semibold">Total</span>
                      <span className="text-white font-black">
                        {formatPrice(cartTotalPrice)} FCFA
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCheckoutFromCart}
                      disabled={cartItems.length === 0}
                      className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors"
                    >
                      Valider le panier sur WhatsApp
                    </button>
                  </div>
                </div>
              </aside>
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default NavMenu;
