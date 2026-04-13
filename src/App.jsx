/**
 * BYKMTVTION Fit Market - Application React
 * Vitrine boxeur, boutique sportive et coaching via WhatsApp
 */

import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import NavMenu from "./Components/NavMenu";
import SiteFooter from "./Components/Footer";
import HomePage from "./Components/HomePage";
import BrandPage from "./Components/BrandPage";
import FitMarketPage from "./Components/FitMarketPage";
import Coaching from "./Components/Coaching";
import Contact from "./Components/Contact";

// Legal Pages
import MentionsLegales from "./Components/MentionsLegales";
import ConditionsGeneralesUtilisation from "./Components/ConditionsGeneralesUtilisation";
import PolitiqueProtectionDonneesPersonnelles from "./Components/PolitiqueProtectionDonneesPersonnelles";
import PolitiqueCookies from "./Components/PolitiqueCookies";
import DeclarationAccessibilite from "./Components/DeclarationAccessibilite";
import Securite from "./Components/Securite";
import { products } from "./utils/productsData";
import { buildCartOrderMessage, openWhatsAppMessage } from "./utils/whatsapp";

// Styles
import "./index.css";

const formatPrice = (price) => new Intl.NumberFormat("fr-FR").format(price);
const Layout = ({
  children,
  cartItems,
  cartItemsCount,
  cartTotalPrice,
  onRemoveCartItem,
  onCheckoutCart,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden">
      <NavMenu
        cartItems={cartItems}
        cartItemsCount={cartItemsCount}
        cartTotalPrice={cartTotalPrice}
        onRemoveCartItem={onRemoveCartItem}
        onCheckoutCart={onCheckoutCart}
        formatPrice={formatPrice}
      />
      <main className="flex-grow overflow-x-hidden">{children}</main>
      <SiteFooter />
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const productsById = useMemo(
    () => new Map(products.map((product) => [product.id, product])),
    []
  );
  const cartProductDetails = useMemo(
    () =>
      cartItems
        .map((item) => {
          const product = productsById.get(item.productId);
          if (!product) {
            return null;
          }

          return {
            productId: item.productId,
            productName: product.name,
            quantity: item.quantity,
            totalPrice: product.price * item.quantity,
          };
        })
        .filter((item) => item !== null),
    [cartItems, productsById]
  );
  const cartItemsCount = useMemo(
    () => cartProductDetails.reduce((total, item) => total + item.quantity, 0),
    [cartProductDetails]
  );
  const cartTotalPrice = useMemo(
    () => cartProductDetails.reduce((total, item) => total + item.totalPrice, 0),
    [cartProductDetails]
  );

  const handleAddToCart = ({ productId, quantity }) => {
    const parsedQuantity = Number.parseInt(quantity, 10);
    const safeQuantity = Number.isNaN(parsedQuantity) ? 1 : Math.max(1, parsedQuantity);

    if (!productId) {
      return;
    }

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.productId === productId);
      if (existingItem) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item
        );
      }

      return [...prev, { productId, quantity: safeQuantity }];
    });
  };

  const handleRemoveCartItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const handleCheckoutCart = () => {
    if (cartProductDetails.length === 0) {
      return;
    }

    const message = buildCartOrderMessage({
      items: cartProductDetails,
      customerName: "Client",
    });
    openWhatsAppMessage(message);
    setCartItems([]);
  };
  const layoutProps = {
    cartItems: cartProductDetails,
    cartItemsCount,
    cartTotalPrice,
    onRemoveCartItem: handleRemoveCartItem,
    onCheckoutCart: handleCheckoutCart,
  };

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Layout {...layoutProps}><HomePage /></Layout>} />
        
        {/* Pages principales - BYKMTVTION Fit Market */}
        <Route path="/marque" element={<Layout {...layoutProps}><BrandPage /></Layout>} />
        <Route path="/portfolio" element={<Navigate to="/marque" replace />} />
        <Route
          path="/boutique"
          element={
            <Layout {...layoutProps}>
              <FitMarketPage onAddToCart={handleAddToCart} />
            </Layout>
          }
        />
        <Route path="/coaching" element={<Layout {...layoutProps}><Coaching /></Layout>} />
        <Route path="/contact" element={<Layout {...layoutProps}><Contact /></Layout>} />

        {/* Compatibilité des anciens liens */}
        <Route path="/homme" element={<Navigate to="/boutique" replace />} />
        <Route path="/femme" element={<Navigate to="/boutique" replace />} />
        <Route path="/chaussures" element={<Navigate to="/boutique" replace />} />
        <Route path="/apropos" element={<Navigate to="/marque" replace />} />

        {/* Pages légales */}
        <Route path="/mentions-legales" element={<Layout {...layoutProps}><MentionsLegales /></Layout>} />
        <Route path="/conditions-generales" element={<Layout {...layoutProps}><ConditionsGeneralesUtilisation /></Layout>} />
        <Route path="/politique-confidentialite" element={<Layout {...layoutProps}><PolitiqueProtectionDonneesPersonnelles /></Layout>} />
        <Route path="/politique-cookies" element={<Layout {...layoutProps}><PolitiqueCookies /></Layout>} />
        <Route path="/accessibilite" element={<Layout {...layoutProps}><DeclarationAccessibilite /></Layout>} />
        <Route path="/securite" element={<Layout {...layoutProps}><Securite /></Layout>} />
        
        {/* Route de fallback */}
        <Route path="*" element={<Layout {...layoutProps}><HomePage /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
