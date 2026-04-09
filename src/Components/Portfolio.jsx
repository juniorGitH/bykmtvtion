import React from "react";
import { Link } from "react-router-dom";
import {
  achievements,
  boxerProfile,
  coachesTeam,
  coachingPrograms,
  fightHistory,
  gallery,
} from "../utils/fighterData";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-bold mb-4">
            Nos coachs
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Equipe <span className="text-gradient-fire">coaching</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            BYKMTVTION Fit Market est une entreprise. Cette page presente
            l'equipe coach actuelle et les espaces reserves pour les prochains
            coachs.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-black text-white mb-5">Nos coachs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {coachesTeam.map((coach) => (
              <article
                key={coach.id}
                className={`bg-gray-900 border rounded-3xl overflow-hidden ${
                  coach.active
                    ? "border-red-500/50"
                    : "border-gray-800 border-dashed"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                  {!coach.active && (
                    <span className="absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full bg-black/70 border border-gray-600 text-gray-200">
                      Place reservee
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-white text-xl font-bold">{coach.name}</h3>
                  <p className="text-red-300 text-sm font-semibold mt-1">
                    {coach.role}
                  </p>
                  <p className="text-gray-400 text-sm mt-3">
                    {coach.description}
                  </p>

                  {coach.active && (
                    <>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {coachingPrograms.map((program) => (
                          <span
                            key={program.id}
                            className="px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-200 text-xs font-semibold"
                          >
                            {program.name}
                          </span>
                        ))}
                      </div>
                      <Link
                        to="/coaching"
                        state={{ preferredCoach: coach.name }}
                        className="inline-flex mt-4 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-bold transition-colors"
                      >
                        Choisir ce coach
                      </Link>
                    </>
                  )}

                  {!coach.active && (
                    <p className="inline-flex mt-4 px-4 py-2 rounded-xl bg-gray-800 text-gray-300 text-sm font-semibold">
                      Bientot disponible
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
          <h2 className="text-2xl font-black text-white mb-4">
            Coach principal - presentation
          </h2>
          <p className="text-gray-200 font-semibold mb-1">
            {boxerProfile.fullName} ({boxerProfile.ringName})
          </p>
          <p className="text-red-300 text-sm font-semibold mb-3">
            {boxerProfile.title} - {boxerProfile.location}
          </p>
          <div className="space-y-3">
            {boxerProfile.biography.map((paragraph) => (
              <p key={paragraph} className="text-gray-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
          <h2 className="text-2xl font-black text-white mb-4">
            Liste des combats
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 pr-4 text-gray-300 font-semibold">Date</th>
                  <th className="py-3 pr-4 text-gray-300 font-semibold">
                    Adversaire
                  </th>
                  <th className="py-3 text-gray-300 font-semibold">Resultat</th>
                </tr>
              </thead>
              <tbody>
                {fightHistory.map((fight) => (
                  <tr key={fight.id} className="border-b border-gray-800/80">
                    <td className="py-3 pr-4 text-gray-400">{fight.date}</td>
                    <td className="py-3 pr-4 text-white">{fight.opponent}</td>
                    <td className="py-3 text-red-300 font-medium">
                      {fight.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white mb-5">
            Photos & videos d'experience sportive
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item) => {
              const isVideo = item.type === "video";

              return (
                <article
                  key={item.id}
                  className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {isVideo && (
                      <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                        <span className="text-white text-3xl">▶</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2">
                      {item.title}
                    </h3>
                    {isVideo ? (
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 text-sm font-semibold"
                      >
                        Regarder la video
                      </a>
                    ) : (
                      <p className="text-gray-400 text-sm">Photo de carriere</p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
