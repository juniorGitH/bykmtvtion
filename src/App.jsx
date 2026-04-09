/**
 * BYKMTVTION Fit Market - Application React
 * Vitrine boxeur, boutique sportive et coaching via WhatsApp
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import NavMenu from "./Components/NavMenu";
import Footer from "./Components/FooterNew";
import Home from "./Components/HomeNew";
import Portfolio from "./Components/Portfolio";
import Boutique from "./Components/Boutique";
import Coaching from "./Components/Coaching";
import Contact from "./Components/Contact";
import AdminLogin from "./Components/AdminLogin";
import ProductAdmin from "./Components/ProductAdmin";

// Legal Pages
import MentionsLegales from "./Components/MentionsLegales";
import ConditionsGeneralesUtilisation from "./Components/ConditionsGeneralesUtilisation";
import PolitiqueProtectionDonneesPersonnelles from "./Components/PolitiqueProtectionDonneesPersonnelles";
import PolitiqueCookies from "./Components/PolitiqueCookies";
import DeclarationAccessibilite from "./Components/DeclarationAccessibilite";
import Securite from "./Components/Securite";

// Styles
import "./index.css";

// Layout principal avec NavMenu et Footer - Dark theme pour Frip&Drip
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <NavMenu />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

// Layout sans NavMenu/Footer pour pages admin
const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        
        {/* Pages principales - BYKMTVTION Fit Market */}
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/boutique" element={<Layout><Boutique /></Layout>} />
        <Route path="/coaching" element={<Layout><Coaching /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* Compatibilité des anciens liens */}
        <Route path="/homme" element={<Navigate to="/boutique" replace />} />
        <Route path="/femme" element={<Navigate to="/boutique" replace />} />
        <Route path="/chaussures" element={<Navigate to="/boutique" replace />} />
        <Route path="/apropos" element={<Navigate to="/portfolio" replace />} />
        
        {/* Administration */}
        <Route path="/admin" element={<AdminLayout><AdminLogin /></AdminLayout>} />
        <Route path="/admin/dashboard" element={<Layout><ProductAdmin /></Layout>} />
        
        {/* Pages légales */}
        <Route path="/mentions-legales" element={<Layout><MentionsLegales /></Layout>} />
        <Route path="/conditions-generales" element={<Layout><ConditionsGeneralesUtilisation /></Layout>} />
        <Route path="/politique-confidentialite" element={<Layout><PolitiqueProtectionDonneesPersonnelles /></Layout>} />
        <Route path="/politique-cookies" element={<Layout><PolitiqueCookies /></Layout>} />
        <Route path="/accessibilite" element={<Layout><DeclarationAccessibilite /></Layout>} />
        <Route path="/securite" element={<Layout><Securite /></Layout>} />
        
        {/* Route de fallback */}
        <Route path="*" element={<Layout><Home /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
