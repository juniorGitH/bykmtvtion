export const boxerProfile = {
  fullName: "Kouassi Mensah",
  ringName: "BYKMTVTION",
  title: "Boxeur professionnel & coach sportif",
  location: "Lome, Togo",
  coachProfileImage:
    "https://images.unsplash.com/photo-1615117972428-28de67f9f2a1?w=1200&q=80",
  intro:
    "BYKMTVTION combine performance, discipline et mentalite de champion pour accompagner sportifs, debutants et entreprises.",
  biography: [
    "Issu de la scene sportive locale, BYKMTVTION construit sa carriere sur un style explosif, une preparation rigoureuse et une forte presence communautaire.",
    "Avec BYKMTVTION Fit Market, il partage son univers: nutrition sportive, equipements d'entrainement, accessoires de boxe et coaching personnalise.",
  ],
};

export const coachesTeam = [
  {
    id: "coach-bykmtvtion",
    name: "Kouassi Mensah",
    role: "Head Coach - Boxe & Performance",
    description:
      "Coach principal BYKMTVTION Fit Market. Specialise en boxe, conditioning et accompagnement transformation physique.",
    image:
      "https://images.unsplash.com/photo-1615117972428-28de67f9f2a1?w=1200&q=80",
    active: true,
  },
  {
    id: "coach-aminata",
    name: "Aminata Lawson",
    role: "Coach Fitness & Transformation",
    description:
      "Coach dediee au renforcement musculaire, au cardio et aux programmes de transformation physique.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80",
    active: true,
  },
  {
    id: "coach-slot-3",
    name: "Coach nutrition (a venir)",
    role: "Specialiste nutrition sportive",
    description:
      "Emplacement reserve pour la presentation du prochain coach nutrition BYKMTVTION Fit Market.",
    image:
      "https://images.unsplash.com/photo-1549570652-97324981a6fd?w=1200&q=80",
    active: false,
  },
  {
    id: "coach-slot-4",
    name: "Coach entreprise (a venir)",
    role: "Coaching corporate & team building",
    description:
      "Emplacement reserve pour un coach specialise en accompagnement des entreprises.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    active: false,
  },
];

export const achievements = [
  "Champion regional des -75 kg (2023)",
  "Finaliste Open West Africa Boxing (2024)",
  "Coach de preparation physique pour athletes et entreprises",
  "Ambassadeur de la marque BYKTMTVTION",
];

export const fightHistory = [
  {
    id: "fight-2026-03",
    date: "15 mars 2026",
    opponent: "K. Agbodan",
    result: "Victoire - KO (Round 3)",
  },
  {
    id: "fight-2025-11",
    date: "8 novembre 2025",
    opponent: "M. N'Dri",
    result: "Victoire - Decision unanime",
  },
  {
    id: "fight-2025-07",
    date: "19 juillet 2025",
    opponent: "A. Lawson",
    result: "Victoire - TKO (Round 5)",
  },
  {
    id: "fight-2025-02",
    date: "22 fevrier 2025",
    opponent: "D. Bani",
    result: "Defaite - Decision partagee",
  },
];

export const gallery = [
  {
    id: "gallery-photo-1",
    type: "photo",
    title: "Camp d'entrainement",
    image:
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=1200&q=80",
  },
  {
    id: "gallery-photo-2",
    type: "photo",
    title: "Preparation avant combat",
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&q=80",
  },
  {
    id: "gallery-photo-3",
    type: "photo",
    title: "Sparring technique",
    image:
      "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?w=1200&q=80",
  },
  {
    id: "gallery-video-1",
    type: "video",
    title: "Highlights combat",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=4fci6D95q2o",
  },
  {
    id: "gallery-video-2",
    type: "video",
    title: "Session cardio-boxe",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=-sUKoKQlEC4",
  },
  {
    id: "gallery-photo-4",
    type: "photo",
    title: "Travail au sac de frappe",
    image:
      "https://images.unsplash.com/photo-1562771242-a02d9090c90c?w=1200&q=80",
  },
  {
    id: "gallery-photo-5",
    type: "photo",
    title: "Conditionnement physique",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80",
  },
  {
    id: "gallery-video-3",
    type: "video",
    title: "Preparation competition",
    image:
      "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=JfJ0_7MtRd8",
  },
];

export const coachingPrograms = [
  {
    id: "boxing-coaching",
    name: "Coaching Boxe",
    description:
      "Technique, garde, deplacements, rythme et strategie pour progresser rapidement.",
  },
  {
    id: "fitness-coaching",
    name: "Coaching Fitness",
    description:
      "Renforcement musculaire, cardio, endurance et prevention des blessures.",
  },
  {
    id: "body-transformation",
    name: "Transformation physique",
    description:
      "Programme structure avec suivi hebdomadaire pour perte de gras ou prise de masse.",
  },
];

export const recentFightHighlights = fightHistory.slice(0, 3);
