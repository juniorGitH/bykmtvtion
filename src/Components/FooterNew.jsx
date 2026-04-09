import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";
import { WHATSAPP_NUMBER } from "../utils/whatsapp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={logoImg} alt="BYKMTVTION Fit Market" className="h-14 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Vitrine du boxeur, boutique sportive et plateforme de coaching
              BYKMTVTION Fit Market.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gradient-fire">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-300 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-400 hover:text-red-300 transition-colors"
                >
                  Nos coachs
                </Link>
              </li>
              <li>
                <Link
                  to="/boutique"
                  className="text-gray-400 hover:text-red-300 transition-colors"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link
                  to="/coaching"
                  className="text-gray-400 hover:text-red-300 transition-colors"
                >
                  Coaching
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-red-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gradient-fire">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Lome, Togo</li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp : +228 93 73 31 50
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@bykmtvtion-fitmarket.com"
                  className="hover:text-red-300 transition-colors"
                >
                  contact@bykmtvtion-fitmarket.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-red-500 transition-colors flex items-center justify-center text-xs"
              >
                FB
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-red-500 transition-colors flex items-center justify-center text-xs"
              >
                IG
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-red-500 transition-colors flex items-center justify-center text-xs"
              >
                TT
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-gray-500 text-sm">
          © {currentYear} BYKMTVTION Fit Market. Tous droits reserves.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
