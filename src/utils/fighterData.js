import fightPosterImage from "../images/WhatsApp Image 2026-04-10 at 09.08.37.jpeg";
import faceOffOfficialImage from "../images/WhatsApp Image 2026-04-10 at 09.39.08.jpeg";
import competitionPhotoImage from "../images/WhatsApp Image 2026-04-10 at 09.39.15.jpeg";

export const boxerProfile = {
  fullName: "DOUHADJI Ekoue",
  ringName: "BYKMTVTION",
  title: "Athlete professionnel | Coach sportif certifie | Entrepreneur",
  birthDate: "8 janvier 1997",
  location: "Lome, Togo",
  intro:
    "DOUHADJI Ekoue est un coach sportif certifié, entrepreneur et athlète professionnel en MMA, engagé dans la performance et le développement du sport, et fondateur de la marque Bykmtvtion.",
  biography: [
    "Specialiste des sports de combat, il est reconnu pour son exigence, sa discipline et ses performances sur la scene africaine.",
    "Fondateur de Bykmtvtion et createur de Bykmtvtion Fit Market, il place la motivation et la progression au centre de chaque action.",
  ],
};

export const brandMeaning = {
  title: "Bykmtvtion",
  description: "• Le symbole principal est une batterie ⚡",
};

export const founderJourney = {
  sportingBackground: [
    "Avant de se consacrer pleinement aux sports de combat, DOUHADJI Ekoue a participe a plusieurs competitions en musculation et en taekwondo.",
    "Il effectue ensuite une transition strategique vers le MMA et la boxe thailandaise, avec une presence active en Cote d'Ivoire, au Benin, en Guinee, au Ghana et au Cameroun.",
  ],
  achievements: [
    "Medaille de bronze aux 13e Jeux africains en MMA (categorie -77,1 kg)",
    "Champion de kickboxing en Guinee - competition \"Boxer pour l'honneur\" (categorie -75 kg)",
  ],
  certifications: [
    "Coach sportif certifie par la Federation Togolaise de Gymnastique (FETOGYM)",
    "Coach sportif certifie par la Federation Togolaise de Fitness, Bodybuilding et Powerlifting (FTPBP)",
  ],
  coachingSpecialties: [
    "Boxe : technique, cardio et explosivite",
    "Renforcement musculaire : avec halteres pour tonifier et renforcer le corps",
    "CrossFit & bodyweight : endurance, agilite et force fonctionnelle",
    "HIIT : perte de graisse, amelioration du cardio et explosivite",
  ],
  association:
    "Tresorier et coach sportif au sein du Youth Sport Club, il contribue a la gestion de l'association et a l'encadrement des jeunes talents.",
  entrepreneurship:
    "Fondateur de Bykmtvtion, symbole d'energie et de determination, et createur de Bykmtvtion Fit Market, espace dedie aux equipements et complements sportifs.",
  education:
    "Titulaire d'une Licence professionnelle en Banque Finance obtenue a l'Ecole Superieure de Gestion d'Informatique et des Sciences (ESGIS).",
  vision:
    "Devenir une reference incontournable dans les sports de combat et le coaching, en batissant un ecosysteme solide autour de la performance, du business sportif et de l'impact social.",
};

export const coachesTeam = [
  {
    id: "coach-principal",
    name: "DOUHADJI Ekoue",
    role: "Fondateur & Coach principal",
    description:
      "Createur de Bykmtvtion et leader de Bykmtvtion Fit Market. Accompagnement base sur des methodes de haut niveau.",
    image: fightPosterImage,
    active: true,
  },
];

export const fightHistory = [
  {
    id: "mma-african-games",
    date: "13e Jeux africains",
    opponent: "Categorie MMA -77,1 kg",
    result: "Medaille de bronze",
  },
  {
    id: "kickboxing-guinea",
    date: "Boxer pour l'honneur - Guinee",
    opponent: "Categorie kickboxing -75 kg",
    result: "Titre de champion",
  },
  {
    id: "africa-circuit",
    date: "Circuit africain",
    opponent: "Cote d'Ivoire, Benin, Guinee, Ghana, Cameroun",
    result: "Participation active et performances regulieres",
  },
  {
    id: "mma-transition",
    date: "Transition vers MMA & boxe thai",
    opponent: "Preparation technique et physique",
    result: "Progression strategique de haut niveau",
  },
];

export const gallery = [
  {
    id: "gallery-photo-1",
    type: "photo",
    title: "Face-off officiel",
    image: faceOffOfficialImage,
  },
  {
    id: "gallery-photo-2",
    type: "photo",
    title: "Image de marque",
    image: fightPosterImage,
  },
  {
    id: "gallery-photo-3",
    type: "photo",
    title: "Presence en competition",
    image: competitionPhotoImage,
  },
];

export const coachingPrograms = [
  {
    id: "boxing",
    name: "Boxe",
    description: "Technique, cardio et explosivite.",
  },
  {
    id: "strength-training",
    name: "Renforcement musculaire",
    description: "Travail avec halteres pour tonifier et renforcer le corps.",
  },
  {
    id: "crossfit-bodyweight",
    name: "CrossFit & bodyweight",
    description: "Endurance, agilite et force fonctionnelle.",
  },
  {
    id: "hiit",
    name: "HIIT",
    description: "Perte de graisse, cardio et explosivite.",
  },
];

export const recentFightHighlights = fightHistory.slice(0, 3);
