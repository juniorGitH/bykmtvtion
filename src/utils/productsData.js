import priseM25000 from "../images/priseM25000.jpeg";
import priseM from "../images/priseM.jpeg";
import creat300 from "../images/WhatsApp Image 2026-04-16 at 21.26.18.jpeg";
import caseine1kg from "../images/WhatsApp Image 2026-04-16 at 21.26.25.jpeg";
import caseine2kg from "../images/WhatsApp Image 2026-04-16 at 21.26.33.jpeg";
import wheyIso1kg from "../images/WhatsApp Image 2026-04-16 at 21.26.42.jpeg";
import wheyIso500g from "../images/WhatsApp Image 2026-04-16 at 21.26.49.jpeg";
import wheyProt1kg from "../images/WhatsApp Image 2026-04-16 at 21.27.02.jpeg";
import wheyProt25kg from "../images/WhatsApp Image 2026-04-16 at 21.27.13.jpeg";
import creat500g from "../images/WhatsApp Image 2026-04-16 at 21.27.29.jpeg";
import impactCreat1kg from "../images/WhatsApp Image 2026-04-16 at 21.27.37.jpeg";
import impactCreat500g from "../images/WhatsApp Image 2026-04-16 at 21.27.50.jpeg";
import minceur360 from "../images/WhatsApp Image 2026-04-16 at 21.29.37.jpeg";
import mealReplacement from "../images/WhatsApp Image 2026-04-16 at 21.30.10.jpeg";
import raspberryPom from "../images/WhatsApp Image 2026-04-16 at 21.32.33 (1).jpeg";

export const productCategories = [
  { id: "boxing-accessories", label: "Accessoires de boxe", icon: "🥊" },
  { id: "fitness-accessories", label: "Accessoires de fitness", icon: "💪" },
  { id: "supp-muscle", label: "Prise de muscle", icon: "🏋️" },
  { id: "supp-mass-gain", label: "Prise de Masse", icon: "💪" },
  { id: "supp-weightloss", label: "Perte de poids / Sèche", icon: "🔥" },
  { id: "supp-endurance", label: "Endurance / Cardio", icon: "🏃" },
  { id: "supp-performance", label: "Énergie / Performance", icon: "⚡" },
  { id: "supp-recovery", label: "Récupération / Articulations", icon: "🧘" },
  { id: "supp-wellness", label: "Santé générale / Bien-être", icon: "🥗" },
  { id: "clothing", label: "Vetements", icon: "👕" },
  {
    id: "bykmtvtion-clothing",
    label: "Vetements BYKMTVTION",
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
  // 1. PRISE DE MUSCLE
  {
    id: "supp-whey-muscle",
    categoryId: "supp-muscle",
    name: "Whey Protein",
    description: "Construction musculaire rapide.",
    price: 38000,
    image: "https://images.unsplash.com/photo-1579722821273-0f6cce00390b?w=900&q=80",
    isPopular: true,
  },
  {
    id: "supp-caseine",
    categoryId: "supp-muscle",
    name: "Caseine",
    description: "Nourrit le muscle longtemps (nuit).",
    price: 35000,
    image: "https://images.unsplash.com/photo-1593092284532-650a3a94d1fd?w=900&q=80",
  },
  {
    id: "supp-creatine-muscle",
    categoryId: "supp-muscle",
    name: "Créatine",
    description: "Force, volume, explosivité.",
    price: 22000,
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=900&q=80",
  },
  {
    id: "supp-bcaa-eaa-muscle",
    categoryId: "supp-muscle",
    name: "BCAA / EAA",
    description: "Protège le muscle, réduit la fatigue.",
    price: 24000,
    image: "https://images.unsplash.com/photo-1612531385446-f7b7c6f4f57f?w=900&q=80",
  },
  {
    id: "supp-glutamine-muscle",
    categoryId: "supp-muscle",
    name: "Glutamine",
    description: "Récupération et réparation musculaire.",
    price: 18000,
    image: "https://images.unsplash.com/photo-1552196564-972d46387352?w=900&q=80",
  },
  {
    id: "supp-multi-muscle",
    categoryId: "supp-muscle",
    name: "Multivitamines",
    description: "Évite les carences.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1584017947476-c3d6c666f7f2?w=900&q=80",
  },
  // PRISE DE MASSE
  {
    id: "supp-clear-whey-protein",
    categoryId: "supp-mass-gain",
    name: "Clear Whey Protein",
    description: "Protéine de lactosérum rafraîchissante et légère.",
    price: 25000,
    image: priseM25000,
  },
  {
    id: "supp-creatine-bandini-300g",
    categoryId: "supp-mass-gain",
    name: "Creatine monohydrate BANDINI 300g",
    description: "Soutien de la force et de l'explosivité with Bandini.",
    price: 23000,
    image: priseM,
  },
  {
    id: "supp-creatine-monohydrate-300g",
    categoryId: "supp-mass-gain",
    name: "Creatine monohydrate 300g",
    description: "Performance et puissance pure.",
    price: 15000,
    image: creat300,
  },
  {
    id: "supp-caseine-1kg",
    categoryId: "supp-mass-gain",
    name: "Caseine 1kg",
    description: "Protéine à diffusion lente.",
    price: 25000,
    image: caseine1kg,
  },
  {
    id: "supp-caseine-2kg",
    categoryId: "supp-mass-gain",
    name: "Caséine 2kg",
    description: "Format économique pour la nutrition nocturne.",
    price: 40000,
    image: caseine2kg,
  },
  {
    id: "supp-pure-whey-isolate-1kg",
    categoryId: "supp-mass-gain",
    name: "Pure whey isolate 1kg",
    description: "Isolat de haute qualité pour une prise de muscle sec.",
    price: 35000,
    image: wheyIso1kg,
  },
  {
    id: "supp-pure-whey-isolate-500g",
    categoryId: "supp-mass-gain",
    name: "Pure whey isolate 500g",
    description: "Qualité isolate en format compact.",
    price: 17500,
    image: wheyIso500g,
  },
  {
    id: "supp-pure-whey-protein-1kg",
    categoryId: "supp-mass-gain",
    name: "Pure whey protein 1kg",
    description: "L'indispensable de la supplémentation.",
    price: 30000,
    image: wheyProt1kg,
  },
  {
    id: "supp-pure-whey-protein-2-5kg",
    categoryId: "supp-mass-gain",
    name: "Pure whey protein 2,5kg",
    description: "Format généreux pour les sportifs réguliers.",
    price: 55000,
    image: wheyProt25kg,
  },
  {
    id: "supp-creatine-monohydrate-500g",
    categoryId: "supp-mass-gain",
    name: "Creatine monohydrate 500g",
    description: "Optimisation de la force sur le long terme.",
    price: 27500,
    image: creat500g,
  },
  {
    id: "supp-impact-creatine-1kg",
    categoryId: "supp-mass-gain",
    name: "Impact creatine 1kg",
    description: "Maximisez vos performances à chaque séance.",
    price: 45000,
    image: impactCreat1kg,
  },
  {
    id: "supp-impact-creatine-500g",
    categoryId: "supp-mass-gain",
    name: "Impact creatine 500g",
    description: "Puissance et explosivité garanties.",
    price: 27500,
    image: impactCreat500g,
  },
  // 2. PERTE DE POIDS / SÈCHE
  {
    id: "supp-minceur-360",
    categoryId: "supp-weightloss",
    name: "Minceur 360",
    description: "Solution complète pour l'accompagnement de la perte de poids.",
    price: 25000,
    image: minceur360,
  },
  {
    id: "supp-meal-replacement",
    categoryId: "supp-weightloss",
    name: "Meal replacement 2,4kg",
    description: "Substitut de repas complet, goût : fraise et banane.",
    price: 40000,
    image: mealReplacement,
  },
  // 3. ENDURANCE / CARDIO
  {
    id: "supp-raspberry-pomegranate",
    categoryId: "supp-endurance",
    name: "RASPBERRY POMEGRANATE",
    description: "Soutien à l'endurance et à la performance cardio.",
    price: 25000,
    image: raspberryPom,
  },
  // 4. ÉNERGIE / PERFORMANCE
  {
    id: "supp-preworkout",
    categoryId: "supp-performance",
    name: "Pre-Workout",
    description: "Énergie, focus, puissance.",
    price: 28000,
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=900&q=80",
  },
  {
    id: "supp-caffeine",
    categoryId: "supp-performance",
    name: "Caféine naturelle",
    description: "Énergie et concentration.",
    price: 11000,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=900&q=80",
  },
  {
    id: "supp-creatine-perf",
    categoryId: "supp-performance",
    name: "Creatine",
    description: "Puissance et explosivité.",
    price: 22000,
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=900&q=80",
  },
  // 5. RÉCUPÉRATION / ARTICULATIONS
  {
    id: "supp-collagen",
    categoryId: "supp-recovery",
    name: "Collagène",
    description: "Tendons, ligaments, peau.",
    price: 29000,
    image: "https://images.unsplash.com/photo-1550572017-4f1b2d076d3a?w=900&q=80",
  },
  {
    id: "supp-omega3-recov",
    categoryId: "supp-recovery",
    name: "Oméga-3",
    description: "Anti-inflammatoire naturel.",
    price: 17000,
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=900&q=80",
  },
  {
    id: "supp-glutamine-recov",
    categoryId: "supp-recovery",
    name: "Glutamine",
    description: "Réparation musculaire.",
    price: 18000,
    image: "https://images.unsplash.com/photo-1552196564-972d46387352?w=900&q=80",
  },
  {
    id: "supp-magnesium-recov",
    categoryId: "supp-recovery",
    name: "Magnésium",
    description: "Récupération, sommeil.",
    price: 14000,
    image: "https://images.unsplash.com/photo-1625902870081-37d45672691d?w=900&q=80",
  },
  // 6. SANTÉ GÉNÉRALE / BIEN-ÊTRE
  {
    id: "supp-multi-well",
    categoryId: "supp-wellness",
    name: "Multivitamines",
    description: "Vitalité quotidienne.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1584017947476-c3d6c666f7f2?w=900&q=80",
  },
  {
    id: "supp-vitamind",
    categoryId: "supp-wellness",
    name: "Vitamine D",
    description: "Immunité et santé osseuse.",
    price: 11000,
    image: "https://images.unsplash.com/photo-1559056191-235738096f5b?w=900&q=80",
  },
  {
    id: "supp-zinc",
    categoryId: "supp-wellness",
    name: "Zinc",
    description: "Immunité et métabolisme.",
    price: 10000,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80",
  },
  {
    id: "supp-magnesium-well",
    categoryId: "supp-wellness",
    name: "Magnésium",
    description: "Équilibre nerveux et musculaire.",
    price: 14000,
    image: "https://images.unsplash.com/photo-1625902870081-37d45672691d?w=900&q=80",
  },
  {
    id: "supp-omega3-well",
    categoryId: "supp-wellness",
    name: "Omega 3",
    description: "Santé cardiaque et cérébrale.",
    price: 17000,
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=900&q=80",
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
