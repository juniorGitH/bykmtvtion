import React, { useState, useEffect } from "react";
import { articleService } from "../utils/services";
import { assignImagesToArticles, getFallbackImage } from "../utils/productImages";

const CATEGORY_ID = 3; // Chaussures/Sneakers
const WHATSAPP_NUMBER = "22893733150";

const Chaussures = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedSize, setSelectedSize] = useState({});
  const [activeFilter, setActiveFilter] = useState("Tout");

  const sizes = ["38", "39", "40", "41", "42", "43", "44", "45"];
  const filters = ["Tout", "Nike", "Adidas", "Jordan", "New Balance", "Autres"];

  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    filterArticles(activeFilter);
  }, [articles, activeFilter]);

  const loadArticles = async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);
      const data = await articleService.getByCategory(CATEGORY_ID);
      const articlesWithImages = assignImagesToArticles(data, CATEGORY_ID);
      setArticles(articlesWithImages);
      if (data.length === 0) {
        setErrorMessage("Aucune sneaker trouvée.");
      }
    } catch (error) {
      setErrorMessage(`Erreur de connexion: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const filterArticles = (filter) => {
    if (filter === "Tout") {
      setFilteredArticles(articles);
    } else if (filter === "Autres") {
      const mainBrands = ["nike", "adidas", "jordan", "new balance"];
      const filtered = articles.filter((article) => {
        const marque = article.marque?.toLowerCase() || "";
        return !mainBrands.some(brand => marque.includes(brand));
      });
      setFilteredArticles(filtered);
    } else {
      const filtered = articles.filter((article) => {
        const marque = article.marque?.toLowerCase() || "";
        const nom = article.nom?.toLowerCase() || "";
        const searchText = `${marque} ${nom}`;
        return searchText.includes(filter.toLowerCase());
      });
      setFilteredArticles(filtered);
    }
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleBuyWhatsApp = (article) => {
    const size = selectedSize[article.id] || "Non sélectionnée";
    const message = `🛒 *Commande Frip&Drip*\n\n` +
      `👟 Sneaker: ${article.nom}\n` +
      `🏷️ Marque: ${article.marque}\n` +
      `📏 Pointure: ${size}\n` +
      `💰 Prix: ${formatPrice(article.prix)} FCFA\n\n` +
      `Je souhaite commander cette paire. Merci de me confirmer la disponibilité et les modalités de livraison.`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fr-FR").format(price);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-bold mb-4">
            👟 SNEAKERS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            KICKS <span className="text-gradient">EXCLUSIVES</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Les sneakers qui font la différence. Style, confort et attitude.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {filter}
              {filter !== "Tout" && activeFilter === filter && (
                <span className="ml-2 text-xs">({filteredArticles.length})</span>
              )}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            <p className="mt-4 text-gray-400">Chargement des sneakers...</p>
          </div>
        ) : errorMessage ? (
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center">
            <p className="text-red-400">❌ {errorMessage}</p>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">👟</div>
            <p className="text-gray-400 text-xl">
              {activeFilter === "Tout" ? "Nouvelles sneakers bientôt disponibles!" : `Aucune sneaker "${activeFilter}" trouvée`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="group bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                style={{ boxShadow: "0 0 0 0 rgba(168, 85, 247, 0)" }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 40px rgba(168, 85, 247, 0.25)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0 0 0 rgba(168, 85, 247, 0)"}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                  <img
                    src={article.photo}
                    alt={`${article.marque} ${article.nom}`}
                    className="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-700"
                    onError={(e) => {
                      e.target.src = getFallbackImage(CATEGORY_ID);
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-12 h-12 bg-white/90 rounded-2xl flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                      🔥 HOT
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-purple-400 text-sm font-bold uppercase tracking-wider">{article.marque}</p>
                      <h3 className="text-white font-black text-xl mt-1">{article.nom}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-black text-white">{formatPrice(article.prix)}</p>
                      <p className="text-gray-500 text-xs font-medium">FCFA</p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mb-5 line-clamp-2">{article.caracteristique}</p>

                  {/* Size Selection */}
                  <div className="mb-5">
                    <p className="text-gray-400 text-xs font-semibold mb-2">POINTURE</p>
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize({ ...selectedSize, [article.id]: size })}
                          className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                            selectedSize[article.id] === size
                              ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Buy Button */}
                  <button
                    onClick={() => handleBuyWhatsApp(article)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Commander
                  </button>
                  
                  <p className="text-center text-gray-500 text-xs mt-1">
                    💳 Paiement à la livraison
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Count */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm">{filteredArticles.length} sneaker(s) affiché(s)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chaussures;
