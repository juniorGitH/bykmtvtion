import React, { useMemo, useState } from "react";
import { productCategories, products } from "../utils/productsData";
import {
  buildProductOrderMessage,
  openWhatsAppMessage,
} from "../utils/whatsapp";
import {
  BRAND_BADGE,
  BRAND_DISPLAY,
  BRAND_PROMISE,
} from "../utils/brand";

const formatPrice = (price) => new Intl.NumberFormat("fr-FR").format(price);
const normalizeQuantity = (rawValue) => {
  const parsed = Number.parseInt(rawValue, 10);
  return Number.isNaN(parsed) ? 1 : Math.max(1, parsed);
};

const FitMarketPage = ({ onAddToCart = () => {} }) => {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const [quantities, setQuantities] = useState(
    Object.fromEntries(products.map((product) => [product.id, 1]))
  );

  const filteredProducts = useMemo(
    () => products.filter((product) => product.categoryId === activeCategory),
    [activeCategory]
  );

  const handleQuantityChange = (productId, rawValue) => {
    const quantity = normalizeQuantity(rawValue);
    setQuantities((prev) => ({ ...prev, [productId]: quantity }));
  };

  const handleDirectPurchase = (product) => {
    const quantity = quantities[product.id] || 1;
    const totalPrice = product.price * quantity;

    const message = buildProductOrderMessage({
      productName: product.name,
      quantity,
      price: totalPrice,
      customerName: "Client",
    });

    openWhatsAppMessage(message);
  };
  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    onAddToCart({
      productId: product.id,
      quantity,
    });
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-bold mb-4">
            {BRAND_BADGE} {BRAND_DISPLAY}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Univers <span className="text-gradient-fire">FIT MARKET</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            {BRAND_PROMISE}
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-orange-500/30 bg-gray-900/70 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-orange-300 font-bold">
            COLLECTION OFFICIELLE
          </p>
          <p className="text-white font-semibold mt-2">
            Retrouvez tous les produits signatures de {BRAND_DISPLAY}.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {productCategories.map((category) => (
            <button
              type="button"
              key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                } text-sm sm:text-base`}
              >
                {category.icon} {category.label}
              </button>
            ))}
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const quantity = quantities[product.id] || 1;
            const totalPrice = product.price * quantity;

            return (
              <article
                key={product.id}
                className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/40 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {product.name}
                  </h2>
                  <p className="text-gray-400 text-sm mt-2 mb-4">
                    {product.description}
                  </p>

                  <p className="text-white font-black text-2xl mb-4">
                    {formatPrice(product.price)} FCFA
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <label
                      htmlFor={`quantity-${product.id}`}
                      className="text-sm text-gray-300 w-full sm:w-auto"
                    >
                      Quantite
                    </label>
                    <input
                      id={`quantity-${product.id}`}
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(event) =>
                        handleQuantityChange(product.id, event.target.value)
                      }
                      className="w-full sm:w-20 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
                    />
                    <span className="text-sm text-red-300 w-full sm:w-auto sm:ml-auto">
                      Total: {formatPrice(totalPrice)} FCFA
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold text-sm py-2 px-3 rounded-lg transition-all"
                    >
                      Ajouter au panier
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDirectPurchase(product)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2 px-3 rounded-lg transition-all"
                    >
                      Acheter simple
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FitMarketPage;
