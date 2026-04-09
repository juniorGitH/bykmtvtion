import React, { useState } from "react";
import {
  WHATSAPP_NUMBER,
  buildContactMessage,
  openWhatsAppMessage,
} from "../utils/whatsapp";

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
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-bold mb-4">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Parlons de votre <span className="text-gradient-fire">objectif</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Formulaire simple, WhatsApp direct et reseaux sociaux pour vous
            repondre rapidement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
            <h2 className="text-2xl font-black text-white mb-5">Formulaire</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="text-sm text-gray-300">
                  Nom complet
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input-field mt-1"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm text-gray-300">
                  Telephone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field mt-1"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-gray-300">
                  Email (optionnel)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field mt-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field mt-1 resize-none"
                />
              </div>

              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors">
                Envoyer sur WhatsApp
              </button>
            </form>
          </section>

          <section className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
            <h2 className="text-2xl font-black text-white mb-5">Contact direct</h2>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors"
            >
              WhatsApp: +228 93 73 31 50
            </a>

            <div className="mt-8 space-y-4">
              <p className="text-gray-300 font-semibold">Reseaux sociaux</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-red-500 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-red-500 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-red-500 hover:text-white transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-800 pt-5 text-gray-400 text-sm space-y-2">
              <p>Adresse: Lome, Togo</p>
              <p>Email: contact@bykmtvtion-fitmarket.com</p>
              <p>Disponibilite: Lun - Sam, 08:00 - 19:00</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
