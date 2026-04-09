import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { articleService } from "../utils/services";
import { assignImagesToArticles, getFallbackImage } from "../utils/productImages";

// Check if admin is logged in
const isAdminLoggedIn = () => {
  const admin = localStorage.getItem("fripdrip_admin");
  if (!admin) return false;
  try {
    const parsed = JSON.parse(admin);
    return parsed.role === "Admin";
  } catch {
    return false;
  }
};

const ProductAdmin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Form state
  const [nom, setNom] = useState("");
  const [marque, setMarque] = useState("");
  const [caracteristique, setCaracteristique] = useState("");
  const [prix, setPrix] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    // Check authentication
    if (!isAdminLoggedIn()) {
      navigate("/admin");
      return;
    }
    loadArticles();
  }, [activeTab, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("fripdrip_admin");
    navigate("/admin");
  };

  const loadArticles = async () => {
    setIsLoading(true);
    const data = await articleService.getByCategory(activeTab);
    const articlesWithImages = assignImagesToArticles(data, activeTab);
    setArticles(articlesWithImages);
    setIsLoading(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fr-FR").format(price);
  };

  const resetForm = () => {
    setNom("");
    setMarque("");
    setCaracteristique("");
    setPrix("");
    setPhoto("");
    setEditingArticle(null);
    setShowForm(false);
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
    setNom(article.nom);
    setMarque(article.marque);
    setCaracteristique(article.caracteristique);
    setPrix(article.prix.toString());
    setPhoto(article.photo || "");
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    const articleData = {
      nom,
      marque,
      caracteristique,
      prix: parseFloat(prix),
      photo,
      categorie: activeTab,
    };

    let result;
    if (editingArticle) {
      result = await articleService.update(editingArticle.id, articleData);
    } else {
      result = await articleService.create(articleData);
    }

    if (result.success) {
      setMessage({ type: "success", text: editingArticle ? "Article mis à jour !" : "Article créé !" });
      resetForm();
      loadArticles();
    } else {
      setMessage({ type: "error", text: result.error });
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) return;

    const result = await articleService.delete(id);
    if (result.success) {
      setMessage({ type: "success", text: "Article supprimé !" });
      loadArticles();
    } else {
      setMessage({ type: "error", text: result.error });
    }
  };

  const tabConfig = {
    1: { name: "Homme", color: "orange", icon: "👕", placeholder: { nom: "Hoodie Oversize", marque: "Nike", carac: "Coton 100%, Coupe oversize, Capuche doublée" } },
    2: { name: "Femme", color: "pink", icon: "👗", placeholder: { nom: "Robe d'été", marque: "Zara", carac: "Polyester, Coupe fluide, Col V" } },
    3: { name: "Sneakers", color: "purple", icon: "👟", placeholder: { nom: "Air Jordan 1", marque: "Nike", carac: "Cuir premium, Semelle Air, Pointures 38-45" } },
  };

  const currentTab = tabConfig[activeTab];

  const getColorClasses = (color) => {
    const colors = {
      orange: {
        bg: "bg-orange-500",
        bgLight: "bg-orange-100",
        bgHover: "hover:bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-500",
        focus: "focus:border-orange-500",
      },
      pink: {
        bg: "bg-pink-500",
        bgLight: "bg-pink-100",
        bgHover: "hover:bg-pink-600",
        text: "text-pink-600",
        border: "border-pink-500",
        focus: "focus:border-pink-500",
      },
      purple: {
        bg: "bg-purple-500",
        bgLight: "bg-purple-100",
        bgHover: "hover:bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-500",
        focus: "focus:border-purple-500",
      },
    };
    return colors[color];
  };

  const colorClasses = getColorClasses(currentTab.color);

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">⚙️ Gestion des Articles</h1>
            <p className="text-gray-400 text-sm sm:text-base">Ajoutez, modifiez ou supprimez des produits Frip&Drip</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              onClick={() => setShowForm(!showForm)}
              className={`px-4 sm:px-6 py-3 font-semibold rounded-xl transition-colors text-sm sm:text-base ${
                showForm
                  ? "bg-gray-700 text-gray-300"
                  : `${colorClasses.bg} text-white ${colorClasses.bgHover}`
              }`}
            >
              {showForm ? "✕ Annuler" : `+ Ajouter`}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 sm:px-6 py-3 bg-red-500/20 text-red-400 font-semibold rounded-xl hover:bg-red-500/30 transition-colors text-sm sm:text-base"
            >
              🚪 Déconnexion
            </button>
          </div>
        </div>

        {/* Messages */}
        {message.text && (
          <div className={`mb-6 rounded-xl p-4 ${
            message.type === "success" 
              ? "bg-green-500/20 border border-green-500/30" 
              : "bg-red-500/20 border border-red-500/30"
          }`}>
            <p className={message.type === "success" ? "text-green-400" : "text-red-400"}>
              {message.type === "success" ? "✅" : "⚠️"} {message.text}
            </p>
          </div>
        )}

        {/* Category Tabs */}
        <div className="bg-gray-800 rounded-2xl overflow-hidden mb-6">
          <nav className="flex">
            {Object.entries(tabConfig).map(([id, config]) => {
              const isActive = activeTab === parseInt(id);
              const tabColors = getColorClasses(config.color);
              return (
                <button
                  key={id}
                  onClick={() => {
                    setActiveTab(parseInt(id));
                    resetForm();
                  }}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-all ${
                    isActive
                      ? `${tabColors.bg} text-white`
                      : "text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <span className="text-xl mr-2">{config.icon}</span>
                  {config.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-gray-800 rounded-2xl p-6 mb-8 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">{currentTab.icon}</span>
              {editingArticle ? "Modifier l'article" : `Nouvel article - ${currentTab.name}`}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Nom de l'article</label>
                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                    className={`w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl text-white ${colorClasses.focus} focus:outline-none`}
                    placeholder={currentTab.placeholder.nom}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Marque</label>
                  <input
                    type="text"
                    value={marque}
                    onChange={(e) => setMarque(e.target.value)}
                    required
                    className={`w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl text-white ${colorClasses.focus} focus:outline-none`}
                    placeholder={currentTab.placeholder.marque}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Description / Caractéristiques</label>
                <textarea
                  value={caracteristique}
                  onChange={(e) => setCaracteristique(e.target.value)}
                  required
                  rows={3}
                  className={`w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl text-white ${colorClasses.focus} focus:outline-none resize-none`}
                  placeholder={currentTab.placeholder.carac}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Prix (FCFA)</label>
                  <input
                    type="number"
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
                    required
                    min="0"
                    className={`w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl text-white ${colorClasses.focus} focus:outline-none`}
                    placeholder="15000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">URL de l'image (optionnel)</label>
                  <input
                    type="url"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl text-white ${colorClasses.focus} focus:outline-none`}
                    placeholder="https://exemple.com/image.jpg"
                  />
                </div>
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  type="submit"
                  className={`flex-1 py-3 ${colorClasses.bg} text-white font-semibold rounded-xl ${colorClasses.bgHover} transition-colors`}
                >
                  {editingArticle ? "💾 Mettre à jour" : "✨ Créer l'article"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-700 text-gray-300 font-semibold rounded-xl hover:bg-gray-600 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products Grid */}
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            {currentTab.icon} {currentTab.name} 
            <span className="text-sm font-normal text-gray-400">({articles.length} articles)</span>
          </h3>
          
          {isLoading ? (
            <div className="text-center py-12">
              <div className={`inline-block animate-spin rounded-full h-8 w-8 border-b-2 ${colorClasses.border}`}></div>
              <p className="mt-2 text-gray-400">Chargement...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <div className="text-6xl mb-4">{currentTab.icon}</div>
              <p className="text-xl">Aucun article {currentTab.name} pour le moment</p>
              <button
                onClick={() => setShowForm(true)}
                className={`mt-4 px-6 py-2 ${colorClasses.bg} text-white rounded-xl font-semibold ${colorClasses.bgHover} transition-colors`}
              >
                + Ajouter le premier article
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {articles.map((article) => (
                <div key={article.id} className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-gray-500 transition-all">
                  <div className="relative aspect-square">
                    <img
                      src={article.photo}
                      alt={article.nom}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = getFallbackImage(activeTab);
                      }}
                    />
                    <div className={`absolute top-2 right-2 px-2 py-1 ${colorClasses.bg} text-white text-xs font-bold rounded-lg`}>
                      {currentTab.name}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className={`text-sm ${colorClasses.text} font-semibold mb-1`}>{article.marque}</p>
                    <h3 className="font-bold text-white mb-2">{article.nom}</h3>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">{article.caracteristique}</p>
                    <p className="text-xl font-black text-white mb-4">{formatPrice(article.prix)} <span className="text-sm text-gray-400 font-normal">FCFA</span></p>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(article)}
                        className="flex-1 py-2 bg-blue-500/20 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/30 transition-colors"
                      >
                        ✏️ Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="flex-1 py-2 bg-red-500/20 text-red-400 font-semibold rounded-lg hover:bg-red-500/30 transition-colors"
                      >
                        🗑️ Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Back to home */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-800 text-gray-300 font-semibold rounded-xl hover:bg-gray-700 transition-colors"
          >
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAdmin;
