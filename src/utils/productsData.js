export const productCategories = [
  { id: "boxing-accessories", label: "Accessoires de boxe", icon: "🥊" },
  { id: "fitness-accessories", label: "Accessoires de fitness", icon: "💪" },
  {
    id: "supplements",
    label: "Complements alimentaires",
    icon: "🥤",
  },
  { id: "clothing", label: "Vetements", icon: "👕" },
  {
    id: "bykmtvtion-clothing",
    label: "Vetements de la marque BYKTMTVTION",
    icon: "🏷️",
  },
];

export const products = [
  {
    id: "box-gloves-pro",
    categoryId: "boxing-accessories",
    name: "Gants Pro Impact 12oz",
    description:
      "Gants de boxe renforces pour sparring et sac de frappe, maintien optimal du poignet.",
    price: 32000,
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=900&q=80",
    isPopular: true,
  },
  {
    id: "boxing-mouthguard",
    categoryId: "boxing-accessories",
    name: "Protege-dents Elite",
    description:
      "Protection thermoformable, respiration facilitee et ajustement confortable.",
    price: 8500,
    image:
      "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=900&q=80",
  },
  {
    id: "boxing-rope",
    categoryId: "boxing-accessories",
    name: "Corde a sauter Speed",
    description:
      "Corde reglable haute vitesse pour explosivite, coordination et cardio.",
    price: 6500,
    image:
      "https://images.unsplash.com/photo-1598266663439-2056e6900339?w=900&q=80",
  },
  {
    id: "fitness-bands",
    categoryId: "fitness-accessories",
    name: "Bandes de resistance Pro Set",
    description:
      "Jeu de 5 niveaux de resistance pour echauffement, tonification et rehabilitation.",
    price: 14000,
    image:
      "https://images.unsplash.com/photo-1591940742878-13aba4f8ec8b?w=900&q=80",
    isPopular: true,
  },
  {
    id: "fitness-kettlebell",
    categoryId: "fitness-accessories",
    name: "Kettlebell 12kg",
    description:
      "Fonte gainee antiderapante pour circuits fonctionnels et travail de puissance.",
    price: 26000,
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&q=80",
  },
  {
    id: "fitness-mat",
    categoryId: "fitness-accessories",
    name: "Tapis sportif Training Grip",
    description:
      "Tapis haute densite pour gainage, mobilite et seances au sol en toute stabilite.",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=900&q=80",
  },
  {
    id: "fitness-shaker",
    categoryId: "fitness-accessories",
    name: "Shaker Sport 700ml",
    description:
      "Shaker resistant avec grille anti-grumeaux pour proteines et boissons d'entrainement.",
    price: 5000,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
  },
  {
    id: "supp-whey",
    categoryId: "supplements",
    name: "Whey Isolate Performance",
    description:
      "Proteine premium, assimilation rapide et soutien de la recuperation musculaire.",
    price: 38000,
    image:
      "https://images.unsplash.com/photo-1579722821273-0f6cce00390b?w=900&q=80",
    isPopular: true,
  },
  {
    id: "supp-bcaa",
    categoryId: "supplements",
    name: "BCAA 2:1:1",
    description:
      "Acides amines essentiels pour limiter la fatigue et maintenir l'intensite.",
    price: 24000,
    image:
      "https://images.unsplash.com/photo-1612531385446-f7b7c6f4f57f?w=900&q=80",
  },
  {
    id: "supp-preworkout",
    categoryId: "supplements",
    name: "Pre-Workout Focus",
    description:
      "Booster d'entrainement pour l'energie, la concentration et l'endurance.",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=900&q=80",
  },
  {
    id: "cloth-essential-tee",
    categoryId: "clothing",
    name: "T-shirt Training Essential",
    description:
      "T-shirt respirant polyvalent pour seance fitness, boxe et usage quotidien.",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=900&q=80",
  },
  {
    id: "cloth-essential-short",
    categoryId: "clothing",
    name: "Short Sport Active",
    description:
      "Short leger avec ceinture elastique pour une liberte totale de mouvement.",
    price: 14500,
    image:
      "https://images.unsplash.com/photo-1598971639058-a876c7d2d5dc?w=900&q=80",
  },
  {
    id: "cloth-tee",
    categoryId: "bykmtvtion-clothing",
    name: "T-shirt BYKTMTVTION Fight Club",
    description:
      "T-shirt respirant coupe athletique, parfait pour l'entrainement et la ville.",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80",
    isPopular: true,
  },
  {
    id: "cloth-short",
    categoryId: "bykmtvtion-clothing",
    name: "Short Performance BYKTMTVTION",
    description:
      "Short leger avec elastique de maintien et liberte de mouvement maximale.",
    price: 19000,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=900&q=80",
  },
  {
    id: "cloth-hoodie",
    categoryId: "bykmtvtion-clothing",
    name: "Hoodie Signature BYKTMTVTION",
    description:
      "Hoodie premium noir, interieur brosse et logo brode pour un style athletique.",
    price: 26000,
    image:
      "https://images.unsplash.com/photo-1614975058789-41316d0e2f5f?w=900&q=80",
  },
];

export const popularProducts = products.filter((product) => product.isPopular);
