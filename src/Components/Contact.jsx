import React, { useState } from "react";
import {
  WHATSAPP_NUMBER,
  buildContactMessage,
  openWhatsAppMessage,
} from "../utils/whatsapp";
import { BRAND_BADGE, BRAND_DISPLAY, BRAND_PROMISE } from "../utils/brand";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = buildContactMessage({
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    });

    openWhatsAppMessage(message);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-bold mb-4">
            Service client {BRAND_BADGE}
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Contact <span className="text-gradient-fire">{BRAND_DISPLAY}</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            {BRAND_PROMISE} Formulaire simple, WhatsApp direct et réseaux sociaux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* FORMULAIRE */}
          <section className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
            <h2 className="text-2xl font-black text-white mb-5">Formulaire</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="fullName" className="text-sm text-gray-400 ml-1">Nom complet</label>
                <input
                  id="fullName"
                  name="fullName"
                  placeholder="Nom complet"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="text-sm text-gray-400 ml-1">Téléphone</label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Téléphone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm text-gray-400 ml-1">Email (optionnel)</label>
                <input
                  id="email"
                  name="email"
                  placeholder="Email (optionnel)"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm text-gray-400 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Envoyer sur WhatsApp
              </button>
            </form>
          </section>

          {/* CONTACT + MAP */}
          <section className="bg-gray-900 border border-gray-800 rounded-3xl p-6">

            <h2 className="text-2xl font-black text-white mb-5">
              Contact direct
            </h2>

            <p className="text-sm text-gray-400 mb-4">
              Canal officiel {BRAND_DISPLAY}.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors"
            >
              WhatsApp: +22891565854
            </a>

            {/* 🔥 MAP AJOUTÉE ICI */}
            <div className="mt-6">
              <h3 className="text-white font-bold mb-3">Localisation</h3>

              <iframe
                title="map"
                className="w-full h-64 rounded-xl border border-gray-700"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Lome,Togo&output=embed"
              />
            </div>

            {/* RESEAUX */}
            <div className="mt-8 space-y-4">
              <p className="text-gray-300 font-semibold">Reseaux sociaux</p>

              <div className="flex flex-wrap gap-3">
                <a className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-red-500 hover:text-white flex-1 text-center">
                  Facebook
                </a>
                <a className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-red-500 hover:text-white flex-1 text-center">
                  Instagram
                </a>
                <a className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-red-500 hover:text-white flex-1 text-center">
                  TikTok
                </a>
              </div>
            </div>

            {/* INFO */}
            <div className="mt-8 border-t border-gray-800 pt-5 text-gray-400 text-sm space-y-2">
              <p>Adresse: Lome, Togo</p>
              <p className="break-all">Email: douhadjirinox6@gmail.com</p>
              <p>Disponibilite: Lun - Sam, 08:00 - 20:00</p>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;