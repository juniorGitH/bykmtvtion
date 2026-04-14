import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { coachesTeam, coachingPrograms } from "../utils/fighterData";
import { buildCoachingMessage, openWhatsAppMessage } from "../utils/whatsapp";
import { BRAND_BADGE, BRAND_DISPLAY } from "../utils/brand";

const coachingFormats = ["En ligne", "En presentiel"];

const coachingSessionOptions = [
  "Seance unique - 10 000 FCFA",
  "1 seance / semaine - 30 000 FCFA",
  "2 seances / semaine - 50 000 FCFA",
  "3 seances / semaine - 70 000 FCFA",
  "4 seances / semaine - 80 000 FCFA",
  "5 seances / semaine - 100 000 FCFA",
  "Coaching en groupe / entreprise - sur devis",
];

const tiktokVideos = [
  {
    id: "7627533303091940629",
    cite: "https://www.tiktok.com/@bykmtvtion/video/7627533303091940629",
  },
  {
    id: "7617462207361600788",
    cite: "https://www.tiktok.com/@bykmtvtion/video/7617462207361600788",
  },
  {
    id: "7519134167494348037",
    cite: "https://www.tiktok.com/@bykmtvtion/video/7519134167494348037",
  },
];

const Coaching = () => {
  const location = useLocation();

  const availableCoaches = useMemo(
    () => coachesTeam.filter((coach) => coach.active),
    []
  );

  const [formData, setFormData] = useState({
    preferredCoach: availableCoaches[0]?.name || "",
    coachingType: "Tout",
    coachingFormat: "",
    selectedSessionPlan: "",
    fullName: "",
    phone: "",
    email: "",
    objective: "",
    level: "",
    availability: "",
    medicalHistory: "", // ✅ IMPORTANT
    message: "",
  });

  // Préselection coach
  useEffect(() => {
    const preselectedCoach = location.state?.preferredCoach;
    if (
      preselectedCoach &&
      availableCoaches.some((coach) => coach.name === preselectedCoach)
    ) {
      setFormData((prev) => ({ ...prev, preferredCoach: preselectedCoach }));
    }
  }, [availableCoaches, location.state]);

  // 🔥 TikTok FIX stable
  useEffect(() => {
    const scriptSrc = "https://www.tiktok.com/embed.js";

    const loadTikTok = () => {
      window.tiktokEmbedLoad?.();
    };

    let script = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = loadTikTok;
      document.body.appendChild(script);
    } else {
      loadTikTok();
    }

    setTimeout(loadTikTok, 500);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = buildCoachingMessage({
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      preferredCoach: formData.preferredCoach,
      coachingType: formData.coachingType,
      coachingFormat: formData.coachingFormat,
      selectedSessionPlan: formData.selectedSessionPlan,
      objective: formData.objective,
      level: formData.level,
      availability: formData.availability,
      medicalHistory: formData.medicalHistory.trim(), // ✅ FIX IMPORTANT
      note: formData.message.trim(),
    });

    openWhatsAppMessage(message);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="text-center">
          <span className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-bold">
            {BRAND_BADGE} {BRAND_DISPLAY}
          </span>

          <h1 className="text-4xl font-black text-white mt-4">
            Coaching <span className="text-gradient-fire">{BRAND_DISPLAY}</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* 🎥 TIKTOK */}
          <div className="bg-gray-900 p-5 rounded-3xl space-y-4">
            <h2 className="text-xl text-white font-bold">
              Vidéos de coaching
            </h2>

            {tiktokVideos.map((video) => (
              <div key={video.id} className="border rounded-xl p-2">
                <blockquote
                  className="tiktok-embed"
                  cite={video.cite}
                  data-video-id={video.id}
                  style={{ maxWidth: "100%", margin: 0 }}
                >
                  <section>
                    <a
                      href="https://www.tiktok.com/@bykmtvtion"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @bykmtvtion
                    </a>
                  </section>
                </blockquote>
              </div>
            ))}
          </div>

          {/* 🧾 FORMULAIRE */}
          <div className="bg-gray-900 p-5 rounded-3xl">
            <h2 className="text-xl text-white font-bold mb-4">
              Formulaire coaching
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input name="fullName" placeholder="Nom complet" required onChange={handleChange} className="input-field" />

              <input name="phone" placeholder="Téléphone" required onChange={handleChange} className="input-field" />

              <input name="email" placeholder="Email (optionnel)" onChange={handleChange} className="input-field" />

              <input name="objective" placeholder="Objectif" required onChange={handleChange} className="input-field" />

              <select name="level" required onChange={handleChange} className="input-field">
                <option value="">Niveau</option>
                <option>Debutant</option>
                <option>Intermediaire</option>
                <option>Avance</option>
              </select>

              <input name="availability" placeholder="Disponibilité" required onChange={handleChange} className="input-field" />

              {/* ✅ ANTÉCÉDENTS MÉDICAUX */}
              <textarea
                name="medicalHistory"
                placeholder="Antécédents médicaux (blessures, maladies, opérations...)"
                onChange={handleChange}
                className="input-field"
              />

              <textarea
                name="message"
                placeholder="Message"
                onChange={handleChange}
                className="input-field"
              />

              <button className="w-full bg-green-600 py-3 rounded-xl text-white font-bold">
                S'inscrire via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Coaching;