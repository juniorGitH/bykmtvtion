import React from "react";
import { Link } from "react-router-dom";
import {
  boxerProfile,
  coachingPrograms,
  recentFightHighlights,
} from "../utils/fighterData";
import { productCategories, products } from "../utils/productsData";
import homeHeroImage from "../images/WhatsApp Image 2026-04-10 at 21.43.47 (1).jpeg";
import crossfitBodyweightImage from "../images/WhatsApp Image 2026-04-11 at 00.40.40 (1).jpeg";
import mmaBronzeMedalImage from "../images/WhatsApp Image 2026-04-10 at 21.54.25.jpeg";
import africaCircuitImage from "../images/WhatsApp Image 2026-04-10 at 22.00.43.jpeg";
import kickboxingGuineaImage from "../images/WhatsApp Image 2026-04-10 at 22.00.43 (1).jpeg";
import boxingCoachingImage from "../images/WhatsApp Image 2026-04-10 at 21.46.55.jpeg";
import strengthTrainingImage from "../images/WhatsApp Image 2026-04-10 at 21.59.18.jpeg";
import hiitCoachingImage from "../images/WhatsApp Image 2026-04-10 at 21.59.42.jpeg";
import {
  BRAND_BADGE,
  BRAND_DISPLAY,
  BRAND_PROMISE,
} from "../utils/brand";

const formatPrice = (price) => new Intl.NumberFormat("fr-FR").format(price);
const productFallbackImage =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&q=80";

const coachingVisuals = {
  boxing: boxingCoachingImage,
  "strength-training": strengthTrainingImage,
  "crossfit-bodyweight": crossfitBodyweightImage,
  hiit: hiitCoachingImage,
};
const coachingVisualStyles = {
  boxing: { objectPosition: "center 10%" },
  "strength-training": { objectPosition: "center 40%" },
  "crossfit-bodyweight": { objectPosition: "center 8%" },
  hiit: { objectPosition: "center 15%" },
};

const fightVisuals = {
  "mma-african-games": mmaBronzeMedalImage,
  "kickboxing-guinea": kickboxingGuineaImage,
  "africa-circuit": africaCircuitImage,
};
const fightVisualStyles = {
  "mma-african-games": { objectPosition: "center 12%" },
  "kickboxing-guinea": { objectPosition: "center 15%" },
  "africa-circuit": { objectPosition: "center 12%" },
};

const featuredProductIds = [
  "box-gloves-pro",
  "fitness-bands",
  "supp-whey-muscle",
  "cloth-tee",
  "fitness-mat",
  "fitness-shaker",
  "boxing-rope",
  "cloth-hoodie",
];

const featuredProducts = featuredProductIds
  .map((id) => products.find((product) => product.id === id))
  .filter(Boolean);

const categoryLabelById = Object.fromEntries(
  productCategories.map((category) => [category.id, category.label])
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium">
                {BRAND_BADGE} {BRAND_DISPLAY}
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                {BRAND_DISPLAY}
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
                {BRAND_PROMISE}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/boutique" className="btn-primary">
                  Explorer BYKMTVTION
                </Link>
                <Link to="/marque" className="btn-secondary">
                  Decouvrir BYKMTVTION
                </Link>
                <Link to="/coaching" className="btn-dark">
                  S'inscrire au coaching
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-red-500/25 bg-black/40 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-red-300">
                    ADN
                  </p>
                  <p className="text-white text-sm font-semibold mt-1">
                    Discipline de champion
                  </p>
                </div>
                <div className="rounded-xl border border-red-500/25 bg-black/40 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-red-300">
                    OFFRE
                  </p>
                  <p className="text-white text-sm font-semibold mt-1">
                    FIT MARKET + coaching
                  </p>
                </div>
                <div className="rounded-xl border border-red-500/25 bg-black/40 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-red-300">
                    COMMUNAUTE
                  </p>
                  <p className="text-white text-sm font-semibold mt-1">
                    Sportifs et entreprises
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[320px] sm:h-[420px] lg:h-[560px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-2xl opacity-25"></div>
              <img
                src={homeHeroImage}
                alt="Photo officielle BYKMTVTION"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-full border border-white/10"
                style={{ objectPosition: "center 40%" }}
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                <p className="text-red-400 font-bold text-sm">
                  Image officielle BYKMTVTION
                </p>
                <p className="text-white text-sm mt-1">{boxerProfile.intro}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 rounded-3xl border border-red-500/30 bg-gray-900/70 p-6 lg:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-red-300 font-bold">
              TERRITOIRE DE MARQUE
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              {BRAND_DISPLAY}
            </h2>
            <p className="text-gray-300 mt-3 max-w-4xl leading-relaxed">
              {BRAND_PROMISE}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 card-glow">
              <h2 className="text-white text-2xl font-black mb-4">
                Produits signature
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Selection officielle {BRAND_DISPLAY}: gants, tapis, shaker,
                complements et vetements.
              </p>
              <div className="space-y-2">
                {featuredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 border-b border-gray-800 pb-3"
                  >
                    <img
                      src={product.image}
                      alt=""
                      aria-hidden="true"
                      className="w-14 h-14 rounded-xl object-cover border border-gray-700"
                      loading="lazy"
                      onError={(event) => {
                        if (event.currentTarget.src !== productFallbackImage) {
                          event.currentTarget.src = productFallbackImage;
                        }
                      }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-200 text-sm font-semibold leading-tight">
                        {product.name}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {categoryLabelById[product.categoryId] || "Produit"}
                      </p>
                      <p className="text-red-400 font-bold text-sm mt-1">
                        {formatPrice(product.price)} FCFA
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/boutique"
                className="inline-flex mt-5 text-red-400 font-semibold hover:text-red-300"
              >
                Commander via WhatsApp
              </Link>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 card-glow">
              <h2 className="text-white text-2xl font-black mb-4">
                Coaching officiel
              </h2>
              <div className="space-y-3">
                {coachingPrograms.map((program) => (
                  <article
                    key={program.id}
                    className="rounded-2xl overflow-hidden border border-gray-800 bg-black/35"
                  >
                    <img
                      src={
                        coachingVisuals[program.id] ||
                        homeHeroImage
                      }
                      alt={program.name}
                      className="w-full h-24 object-cover"
                      style={coachingVisualStyles[program.id]}
                    />
                    <div className="p-3">
                      <p className="text-red-400 font-semibold">{program.name}</p>
                      <p className="text-gray-400 text-sm">
                        {program.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <Link
                to="/coaching"
                className="inline-flex mt-5 text-red-400 font-semibold hover:text-red-300"
              >
                Demarrer une inscription
              </Link>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 card-glow">
              <h2 className="text-white text-2xl font-black mb-4">
                Combats et notoriete
              </h2>
              <div className="space-y-3">
                {recentFightHighlights.map((fight) => (
                  <article
                    key={fight.id}
                    className="rounded-2xl overflow-hidden border border-gray-800 bg-black/35"
                  >
                    <img
                      src={
                        fightVisuals[fight.id] ||
                        homeHeroImage
                      }
                      alt={`Combat contre ${fight.opponent}`}
                      className="w-full h-28 object-cover"
                      style={fightVisualStyles[fight.id]}
                    />
                    <div className="p-3">
                      <p className="text-white text-sm font-semibold">
                        {fight.date} - {fight.opponent}
                      </p>
                      <p className="text-gray-400 text-sm">{fight.result}</p>
                    </div>
                  </article>
                ))}
              </div>
              <Link
                to="/marque"
                className="inline-flex mt-5 text-red-400 font-semibold hover:text-red-300"
              >
                Voir tout le palmares
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
