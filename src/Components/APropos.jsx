import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { contentService } from "../utils/services";

const APropos = () => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      const data = await contentService.getContent();
      setContent(data?.aPropos);
      setIsLoading(false);
    };
    loadContent();
  }, []);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold mb-4">
            🔥 NOTRE HISTOIRE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            À PROPOS DE <span className="text-gradient">FLIP&DRIP</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Le streetwear qui fait vibrer ta génération
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-pulse">
            <div className="h-96 bg-gray-800 rounded-3xl"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-800 rounded w-3/4"></div>
              <div className="h-4 bg-gray-800 rounded w-full"></div>
              <div className="h-4 bg-gray-800 rounded w-5/6"></div>
              <div className="h-4 bg-gray-800 rounded w-full"></div>
              <div className="h-4 bg-gray-800 rounded w-4/5"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=800&q=80"
                alt="Frip&Drip Streetwear"
                className="relative w-full h-[500px] object-cover rounded-3xl border border-gray-800"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-4">
                  <p className="text-orange-400 font-bold">FRIP&DRIP</p>
                  <p className="text-white text-sm">Streetwear authentique depuis 2023</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Le style urbain qui te <span className="text-gradient">représente</span>
              </h2>
              <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                <p>
                  <span className="text-orange-400 font-bold">Frip&Drip</span> est né de la passion pour le streetwear et la culture urbaine. 
                  On est là pour habiller la nouvelle génération avec des pièces qui claquent ! 🔥
                </p>
                <p>
                  Basés à <span className="text-white font-semibold">Lomé, Togo</span>, on sélectionne pour toi les meilleurs looks streetwear : 
                  hoodies, t-shirts graphiques, joggers, sneakers exclusives et bien plus.
                </p>
                <p>
                  Notre mission ? Te permettre d'exprimer ton style unique sans te ruiner. 
                  Avec le système <span className="text-pink-400 font-semibold">Tontine</span>, paie à ton rythme !
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-start space-x-4 bg-gray-900 rounded-2xl p-4 border border-gray-800">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">100% Authentique</h4>
                    <p className="text-sm text-gray-500">Produits originaux garantis</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gray-900 rounded-2xl p-4 border border-gray-800">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-xl">💳</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Paiement Flexible</h4>
                    <p className="text-sm text-gray-500">TMoney, Flooz & Tontine</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gray-900 rounded-2xl p-4 border border-gray-800">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🚚</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Livraison Express</h4>
                    <p className="text-sm text-gray-500">Partout au Togo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gray-900 rounded-2xl p-4 border border-gray-800">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Support WhatsApp</h4>
                    <p className="text-sm text-gray-500">On répond vite !</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-center border border-gray-700">
            <div className="text-4xl sm:text-5xl font-black text-gradient mb-2">5K+</div>
            <p className="text-gray-400 font-medium">Clients satisfaits</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-center border border-gray-700">
            <div className="text-4xl sm:text-5xl font-black text-gradient mb-2">10K+</div>
            <p className="text-gray-400 font-medium">Articles vendus</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-center border border-gray-700">
            <div className="text-4xl sm:text-5xl font-black text-gradient mb-2">15+</div>
            <p className="text-gray-400 font-medium">Villes livrées</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-center border border-gray-700">
            <div className="text-4xl sm:text-5xl font-black text-gradient mb-2">24/7</div>
            <p className="text-gray-400 font-medium">Support client</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
            PRÊT À REJOINDRE LA COMMUNAUTÉ ?
          </h3>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Découvre nos collections et trouve le style qui te correspond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/homme"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Shop Homme
            </Link>
            <Link
              to="/femme"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              Shop Femme
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APropos;
