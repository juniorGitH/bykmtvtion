import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  brandMeaning,
  boxerProfile,
  coachingPrograms,
  fightHistory,
  founderJourney,
  gallery,
} from "../utils/fighterData";
import {
  BRAND_BADGE,
  BRAND_DISPLAY,
  BRAND_MEANING,
  BRAND_PROMISE,
  BRAND_TAGLINE,
} from "../utils/brand";

const tiktokVideos = [
  {
    id: "7488415744389172535",
    cite: "https://www.tiktok.com/@bykmtvtion_wrkout/video/7488415744389172535",
    musicUrl:
      "https://www.tiktok.com/music/son-original-7488415770375490310?refer=embed",
    musicLabel: "son original - Ekoue DOUHADJI",
  },
  {
    id: "7410500577500712198",
    cite: "https://www.tiktok.com/@bykmtvtion_wrkout/video/7410500577500712198",
    musicUrl:
      "https://www.tiktok.com/music/son-original-7396006628562569989?refer=embed",
    musicLabel: "son original - LE COLON",
  },
  {
    id: "7489452047473872133",
    cite: "https://www.tiktok.com/@bykmtvtion_wrkout/video/7489452047473872133",
    musicUrl:
      "https://www.tiktok.com/music/son-original-7487975904514247446?refer=embed",
    musicLabel: "son original - Jeady Jay",
  },
];

const BrandPage = () => {
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

  const photos = gallery.filter((item) => item.type === "photo");

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center">
          <span className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-bold mb-4">
            {BRAND_BADGE}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            <span className="text-gradient-fire">{BRAND_DISPLAY}</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto">
            {BRAND_PROMISE}
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-red-300 font-bold">
              Signification
            </p>
            <h2 className="text-3xl font-black text-white mt-2">
              {brandMeaning.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mt-3">{BRAND_TAGLINE}</p>
            <p className="text-gray-300 leading-relaxed mt-3">
              {brandMeaning.description}
            </p>
            <p className="text-gray-400 leading-relaxed mt-3 whitespace-pre-line">
              {BRAND_MEANING}
            </p>
          </article>

          <article className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-red-300 font-bold">
              Fondateur
            </p>
            <h2 className="text-2xl font-black text-white mt-2">
              {boxerProfile.fullName}
            </h2>
            <p className="text-red-300 font-semibold text-sm mt-2">
              {boxerProfile.title}
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <p>
                <span className="text-gray-400">Date de naissance:</span>{" "}
                {boxerProfile.birthDate}
              </p>
              <p>
                <span className="text-gray-400">Base:</span> {boxerProfile.location}
              </p>
              <p>{boxerProfile.intro}</p>
            </div>
          </article>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
          <h2 className="text-2xl font-black text-white mb-4">Parcours sportif</h2>
          <div className="space-y-3">
            {founderJourney.sportingBackground.map((item) => (
              <p key={item} className="text-gray-300 leading-relaxed">
                {item}
              </p>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
            {founderJourney.achievements.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-red-500/25 bg-black/40 p-4 text-gray-200"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
            <h2 className="text-2xl font-black text-white mb-4">
              Coaching & expertise
            </h2>
            <div className="space-y-2">
              {founderJourney.certifications.map((item) => (
                <p key={item} className="text-gray-300">
                  • {item}
                </p>
              ))}
            </div>
            <div className="mt-5 space-y-2">
              {founderJourney.coachingSpecialties.map((item) => (
                <p key={item} className="text-gray-200">
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {coachingPrograms.map((program) => (
                <span
                  key={program.id}
                  className="px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-200 text-xs font-semibold"
                >
                  {program.name}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/coaching"
                state={{ preferredCoach: boxerProfile.fullName }}
                className="inline-flex px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-bold transition-colors"
              >
                Demarrer un coaching
              </Link>
            </div>
          </article>

          <article className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-5">
            <div>
              <h3 className="text-xl font-black text-white">Engagement associatif</h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                {founderJourney.association}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-white">Entrepreneuriat</h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                {founderJourney.entrepreneurship}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-white">Formation academique</h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                {founderJourney.education}
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/boutique"
                className="inline-flex px-4 py-2 rounded-xl border border-orange-500 text-orange-300 hover:bg-orange-500 hover:text-white text-sm font-bold transition-colors"
              >
                Visiter Fit Market
              </Link>
            </div>
          </article>
        </section>

        <section className="bg-gray-900 border border-red-500/40 rounded-3xl p-6">
          <h2 className="text-2xl font-black text-white">Vision</h2>
          <p className="text-gray-200 leading-relaxed mt-3">{founderJourney.vision}</p>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
          <h2 className="text-2xl font-black text-white mb-4">Palmares & competitions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-[640px] sm:min-w-full text-left">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 pr-4 text-gray-300 font-semibold">Competition</th>
                  <th className="py-3 pr-4 text-gray-300 font-semibold">Categorie / zone</th>
                  <th className="py-3 text-gray-300 font-semibold">Resultat</th>
                </tr>
              </thead>
              <tbody>
                {fightHistory.map((fight) => (
                  <tr key={fight.id} className="border-b border-gray-800/80">
                    <td className="py-3 pr-4 text-gray-300">{fight.date}</td>
                    <td className="py-3 pr-4 text-white">{fight.opponent}</td>
                    <td className="py-3 text-red-300 font-medium">{fight.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white mb-5">
            Photos BYKMTVTION
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((item) => {
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
                      style={
                        item.id === "gallery-photo-1"
                          ? { objectPosition: "center 7%" }
                          : item.id === "gallery-photo-3"
                          ? { objectPosition: "center 6%" }
                          : undefined
                      }
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">Photo officielle</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
          <h2 className="text-2xl font-black text-white mb-2">
            Videos TikTok BYKMTVTION
          </h2>
          <p className="text-gray-400 mb-5">
            Retrouvez ici les extraits TikTok officiels du compte
            @bykmtvtion_wrkout.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {tiktokVideos.map((video) => (
              <article
                key={video.id}
                className="rounded-2xl border border-gray-800 bg-black/30 p-3"
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
                      title="@bykmtvtion_wrkout"
                      href="https://www.tiktok.com/@bykmtvtion_wrkout?refer=embed"
                    >
                      @bykmtvtion_wrkout
                    </a>{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title={video.musicLabel}
                      href={video.musicUrl}
                    >
                      ♬ {video.musicLabel}
                    </a>
                  </section>
                </blockquote>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandPage;
