import React from "react";
import { Link } from "react-router-dom";
import {
  boxerProfile,
  coachingPrograms,
  recentFightHighlights,
} from "../utils/fighterData";
import { productCategories, products } from "../utils/productsData";

const formatPrice = (price) => new Intl.NumberFormat("fr-FR").format(price);
const productFallbackImage =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&q=80";

const coachingVisuals = {
  "boxing-coaching":
    "https://images.unsplash.com/photo-1549476464-37392f717541?w=900&q=80",
  "fitness-coaching":
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&q=80",
  "body-transformation":
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80",
};

const fightVisuals = {
  "fight-2026-03":
    "https://images.unsplash.com/photo-1615117972428-28de67f9f2a1?w=900&q=80",
  "fight-2025-11":
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=900&q=80",
  "fight-2025-07":
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=900&q=80",
};

const featuredProductIds = [
  "box-gloves-pro",
  "fitness-bands",
  "supp-whey",
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

const Home = () => {
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
                Plateforme officielle BYKMTVTION Fit Market
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                {boxerProfile.ringName}{" "}
                <span className="text-gradient-fire">FIT MARKET</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                {boxerProfile.title} - Nutrition, equipements sportifs,
                accessoires et coaching personnalise pour particuliers et
                entreprises.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/boutique" className="btn-primary">
                  Voir la boutique
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  Voir nos coachs
                </Link>
                <Link to="/coaching" className="btn-dark">
                  S'inscrire au coaching
                </Link>
              </div>
            </div>

            <div className="relative h-[420px] lg:h-[560px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-2xl opacity-25"></div>
              <img
                src="https://images.unsplash.com/photo-1615117972428-28de67f9f2a1?w=1200&q=80"
                alt="Boxeur BYKMTVTION en entrainement"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-full border border-white/10"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                <p className="text-red-400 font-bold text-sm">
                  Combiner performance sportive et discipline de vie
                </p>
                <p className="text-white text-sm mt-1">{boxerProfile.intro}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 card-glow">
              <h2 className="text-white text-2xl font-black mb-4">
                Produits populaires
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Selection complete: gants, tapis sportif, shaker, complements
                et vetements.
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
                Coaching en vedette
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
                        "https://images.unsplash.com/photo-1571019613914-85f342c55f2c?w=900&q=80"
                      }
                      alt={program.name}
                      className="w-full h-24 object-cover"
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
                Combats recents
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
                        "https://images.unsplash.com/photo-1549570652-97324981a6fd?w=900&q=80"
                      }
                      alt={`Combat contre ${fight.opponent}`}
                      className="w-full h-24 object-cover"
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
                to="/portfolio"
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

export default Home;
