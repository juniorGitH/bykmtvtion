export const WHATSAPP_NUMBER = "22893733150";

const formatPrice = (amount) => new Intl.NumberFormat("fr-FR").format(amount);

export const openWhatsAppMessage = (message) => {
  const encodedMessage = encodeURIComponent(message.trim());
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

export const buildProductOrderMessage = ({
  productName,
  quantity,
  price,
  customerName,
}) => {
  return `Bonjour,

Je souhaite commander :

Produit : ${productName}
Quantite : ${quantity}
Prix : ${formatPrice(price)} FCFA

Nom : ${customerName}
Merci.`;
};

export const buildCoachingMessage = ({
  fullName,
  phone,
  email,
  preferredCoach,
  coachingType,
  objective,
  level,
  availability,
  note,
}) => {
  const emailLine = email ? `Email : ${email}` : "Email : Non renseigne";
  const noteLine = note ? `Message : ${note}` : "Message : Aucun message complementaire";

  return `Bonjour coach,

Je souhaite m'inscrire au coaching :

Nom : ${fullName}
Telephone : ${phone}
${emailLine}
Coach choisi : ${preferredCoach}
Type de coaching : ${coachingType}
Objectif : ${objective}
Niveau : ${level}
Disponibilite : ${availability}
${noteLine}

Merci.`;
};

export const buildContactMessage = ({ fullName, phone, email, message }) => {
  const emailLine = email ? `Email : ${email}` : "Email : Non renseigne";

  return `Bonjour BYKMTVTION Fit Market,

Je souhaite obtenir plus d'informations :

Nom : ${fullName}
Telephone : ${phone}
${emailLine}
Message : ${message}

Merci.`;
};
