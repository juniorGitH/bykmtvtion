import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { coachesTeam, coachingPrograms } from "../utils/fighterData";
import { buildCoachingMessage, openWhatsAppMessage } from "../utils/whatsapp";

const getCoachFallbackImage = (coachName) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    coachName
  )}&background=1f2937&color=f3f4f6&bold=true&size=128`;

const Coaching = () => {
  const location = useLocation();
  const availableCoaches = useMemo(
    () => coachesTeam.filter((coach) => coach.active),
    []
  );

  const [formData, setFormData] = useState({
    preferredCoach: availableCoaches[0]?.name || "",
    coachingType: coachingPrograms[0]?.name || "",
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
            Coaching sportif
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Programmes <span className="text-gradient-fire">personnalises</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Inscription rapide via WhatsApp pour demarrer votre accompagnement.
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
            <div className="mb-5 pb-4 border-b border-gray-800">
              <h2 className="text-2xl font-black text-white mb-2">
                Choisissez votre coach
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Selectionnez le coach qui correspond a votre objectif avant
                l'inscription.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableCoaches.map((coach) => {
                const isSelected = formData.preferredCoach === coach.name;

                return (
                  <button
                    key={coach.id}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        preferredCoach: coach.name,
                      }))
                    }
                    className={`w-full text-left border rounded-2xl p-4 transition-all ${
                      isSelected
                        ? "border-red-500 bg-red-500/10 shadow-[0_0_0_1px_rgba(239,68,68,0.35)]"
                        : "border-gray-800 bg-black/35 hover:border-red-500/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-16 h-16 rounded-xl object-cover border border-gray-700 bg-gray-800 shrink-0"
                        onError={(event) => {
                          const fallback = getCoachFallbackImage(coach.name);
                          if (event.currentTarget.src !== fallback) {
                            event.currentTarget.src = fallback;
                          }
                        }}
                      />
                      <div className="min-w-0">
                        <p className="text-white font-semibold leading-tight">
                          {coach.name}
                        </p>
                        <p className="text-red-300 text-xs font-semibold mt-1">
                          {coach.role}
                        </p>
                      </div>
                      {isSelected && (
                        <span className="ml-auto text-xs px-2 py-1 rounded-full bg-red-500 text-white font-bold shrink-0">
                          Selectionne
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      {coach.description}
                    </p>
                  </button>
                );
              })}
            </div>

          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
            <h2 className="text-2xl font-black text-white mb-5">
              Formulaire coaching
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="preferredCoach"
                    className="text-sm text-gray-300"
                  >
                    Coach choisi
                  </label>
                  <select
                    id="preferredCoach"
                    name="preferredCoach"
                    required
                    value={formData.preferredCoach}
                    onChange={handleChange}
                    className="input-field mt-1"
                  >
                    {availableCoaches.map((coach) => (
                      <option key={coach.id} value={coach.name}>
                        {coach.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="coachingType"
                    className="text-sm text-gray-300"
                  >
                    Type de coaching
                  </label>
                  <select
                    id="coachingType"
                    name="coachingType"
                    required
                    value={formData.coachingType}
                    onChange={handleChange}
                    className="input-field mt-1"
                  >
                    {coachingPrograms.map((program) => (
                      <option key={program.id} value={program.name}>
                        {program.name}
                      </option>
                    ))}
                  </select>
                </div>
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
                  className="input-field mt-1"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="input-field mt-1"
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
                    className="input-field mt-1"
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
                  className="input-field mt-1 resize-none"
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
