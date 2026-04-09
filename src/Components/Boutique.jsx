import React, { useMemo, useState } from "react";
import { productCategories, products } from "../utils/productsData";
import {
  buildProductOrderMessage,
  openWhatsAppMessage,
} from "../utils/whatsapp";

const formatPrice = (price) => new Intl.NumberFormat("fr-FR").format(price);

const Boutique = () => {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const [quantities, setQuantities] = useState(
    Object.fromEntries(products.map((product) => [product.id, 1]))
  );

  const filteredProducts = useMemo(
    () => products.filter((product) => product.categoryId === activeCategory),
    [activeCategory]
  );

  const handleQuantityChange = (productId, rawValue) => {
    const parsed = Number.parseInt(rawValue, 10);
    const quantity = Number.isNaN(parsed) ? 1 : Math.max(1, parsed);
    setQuantities((prev) => ({ ...prev, [productId]: quantity }));
  };

  const handleOrder = (product) => {
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

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-bold mb-4">
            BYKMTVTION Fit Market
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Boutique <span className="text-gradient-fire">sportive</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Accessoires, complements alimentaires, equipements fitness,
            vetements et vetements de la marque BYKTMTVTION.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
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
                  <h2 className="text-xl font-bold text-white">{product.name}</h2>
                  <p className="text-gray-400 text-sm mt-2 mb-4">
                    {product.description}
                  </p>

                  <p className="text-white font-black text-2xl mb-4">
                    {formatPrice(product.price)} FCFA
                  </p>

                  <div className="flex items-center gap-3 mb-4">
                    <label
                      htmlFor={`quantity-${product.id}`}
                      className="text-sm text-gray-300"
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
                      className="w-20 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
                    />
                    <span className="text-sm text-red-300 ml-auto">
                      Total: {formatPrice(totalPrice)} FCFA
                    </span>
                  </div>

                  <button
                    onClick={() => handleOrder(product)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                  >
                    Commander via WhatsApp
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Boutique;
