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
    music:
      "https://www.tiktok.com/music/Cardio-boxKickPower-boxmix-7426037234637474566?refer=embed",
    musicLabel: "Cardio box_Kick_Power box_mix - Merika",
  },
  {
    id: "7617462207361600788",
    cite: "https://www.tiktok.com/@bykmtvtion/video/7617462207361600788",
    music:
      "https://www.tiktok.com/music/Action-Sport-7412229676418238481?refer=embed",
    musicLabel: "Action Sport - Lux-Inspira",
  },
  {
    id: "7519134167494348037",
    cite: "https://www.tiktok.com/@bykmtvtion/video/7519134167494348037",
    music:
      "https://www.tiktok.com/music/The-Irishman-7096521779586058241?refer=embed",
    musicLabel: "The Irishman - Paul Velchev",
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
    message: "",
  });

  useEffect(() => {
    const preselectedCoach = location.state?.preferredCoach;
    if (
      preselectedCoach &&
      availableCoaches.some((coach) => coach.name === preselectedCoach)
    ) {
      setFormData((prev) => ({ ...prev, preferredCoach: preselectedCoach }));
    }
  }, [availableCoaches, location.state]);

  useEffect(() => {
    const scriptSrc = "https://www.tiktok.com/embed.js";
    const reloadEmbeds = () => {
      if (typeof window.tiktokEmbedLoad === "function") {
        window.tiktokEmbedLoad();
      }
    };
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (existingScript) {
      reloadEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.onload = reloadEmbeds;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
      note: formData.message.trim(),
    });

    openWhatsAppMessage(message);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-bold mb-4">
            {BRAND_BADGE} {BRAND_DISPLAY}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Coaching <span className="text-gradient-fire">{BRAND_DISPLAY}</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Chaque seance est une victoire : discipline, confiance et resultats.
            Lance-toi maintenant, ton meilleur niveau commence aujourd'hui.
            <a
              href="#coaching-form"
              className="sm:hidden inline-flex items-center justify-center ml-2 mt-2 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm"
            >
              S'inscris maintenant
            </a>
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-4 sm:p-6 min-w-0 self-start h-fit">
            <div className="mb-5 pb-4 border-b border-gray-800">
              <h2 className="text-2xl font-black text-white mb-2">
                Videos de coaching d'experience
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Regardez des extraits reels de seances BYKMTVTION avant votre
                inscription.
              </p>
            </div>

            <div className="space-y-4">
              {tiktokVideos.map((video) => (
                <div
                  key={video.id}
                  className="rounded-2xl border border-gray-800 bg-black/35 p-2 sm:p-3"
                >
                  <blockquote
                    className="tiktok-embed"
                    cite={video.cite}
                    data-video-id={video.id}
                    style={{ maxWidth: "100%", minWidth: "0", margin: 0 }}
                  >
                    <section>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        title="@bykmtvtion"
                        href="https://www.tiktok.com/@bykmtvtion?refer=embed"
                      >
                        @bykmtvtion
                      </a>{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        title={video.musicLabel}
                        href={video.music}
                      >
                        ♬ {video.musicLabel}
                      </a>
                    </section>
                  </blockquote>
                </div>
              ))}
            </div>

          </div>

          <div
            id="coaching-form"
            className="bg-gray-900 border border-gray-800 rounded-3xl p-4 sm:p-6 min-w-0 self-start h-fit"
          >
            <h2 className="text-2xl font-black text-white mb-5">
              Formulaire coaching
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 w-full min-w-0">
              <div>
                <label htmlFor="preferredCoach" className="text-sm text-gray-300">
                  Coach choisi
                </label>
                <select
                  id="preferredCoach"
                  name="preferredCoach"
                  required
                  value={formData.preferredCoach}
                  onChange={handleChange}
                  className="input-field mt-1 min-w-0 max-w-full text-sm sm:text-base overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {availableCoaches.map((coach) => (
                    <option key={coach.id} value={coach.name}>
                      {coach.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="coachingType" className="text-sm text-gray-300">
                  Type de coaching
                </label>
                <select
                  id="coachingType"
                  name="coachingType"
                  required
                  value={formData.coachingType}
                  onChange={handleChange}
                  className="input-field mt-1 min-w-0 max-w-full text-sm sm:text-base overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  <option value="Tout">Tout</option>
                  {coachingPrograms.map((program) => (
                    <option key={program.id} value={program.name}>
                      {program.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="coachingFormat" className="text-sm text-gray-300">
                  Format de coaching
                </label>
                <select
                  id="coachingFormat"
                  name="coachingFormat"
                  required
                  value={formData.coachingFormat}
                  onChange={handleChange}
                  className="input-field mt-1 min-w-0 max-w-full text-sm sm:text-base overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  <option value="">Choisir</option>
                  {coachingFormats.map((format) => (
                    <option key={format} value={format}>
                      {format}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="selectedSessionPlan" className="text-sm text-gray-300">
                  Seance / formule choisie selon le tarif
                </label>
                <select
                  id="selectedSessionPlan"
                  name="selectedSessionPlan"
                  required
                  value={formData.selectedSessionPlan}
                  onChange={handleChange}
                  className="input-field mt-1 min-w-0 max-w-full text-sm sm:text-base overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  <option value="">Choisir une option</option>
                  {coachingSessionOptions.map((plan) => (
                    <option key={plan} value={plan}>
                      {plan}
                    </option>
                  ))}
                </select>
              </div>

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
                  className="input-field mt-1 min-w-0"
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
                  className="input-field mt-1 min-w-0"
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
                  className="input-field mt-1 min-w-0"
                />
              </div>

              <div>
                <label htmlFor="objective" className="text-sm text-gray-300">
                  Objectif
                </label>
                <input
                  id="objective"
                  name="objective"
                  type="text"
                  required
                  value={formData.objective}
                  onChange={handleChange}
                  placeholder="Perte de poids, prise de masse, performance..."
                  className="input-field mt-1 min-w-0"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="level" className="text-sm text-gray-300">
                    Niveau
                  </label>
                  <select
                    id="level"
                    name="level"
                    required
                    value={formData.level}
                    onChange={handleChange}
                    className="input-field mt-1 min-w-0"
                  >
                    <option value="">Choisir</option>
                    <option value="Debutant">Debutant</option>
                    <option value="Intermediaire">Intermediaire</option>
                    <option value="Avance">Avance</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="availability"
                    className="text-sm text-gray-300"
                  >
                    Disponibilite
                  </label>
                  <input
                    id="availability"
                    name="availability"
                    type="text"
                    required
                    value={formData.availability}
                    onChange={handleChange}
                    placeholder="Ex: Soir en semaine"
                    className="input-field mt-1 min-w-0"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Precisions supplementaires"
                  className="input-field mt-1 resize-none min-w-0"
                />
              </div>

              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors">
                S'inscrire via WhatsApp
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Coaching;
