/**
 * Frip&Drip Product Images Manager
 * Images de mode streetwear et urbaine pour jeunes
 */

// Vêtements Homme - Streetwear, Urban Style
const menClothingImages = [
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80", // Hoodie
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80", // T-shirt streetwear
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80", // Graphic tee
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80", // Jacket
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80", // Urban style
  "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80", // Streetwear look
  "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&q=80", // Bomber jacket
  "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&q=80", // Joggers
  "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=400&q=80", // Cargo pants
  "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=400&q=80", // Denim jacket
  "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=400&q=80", // Sweatshirt
  "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80", // Jeans
  "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80", // Shorts
  "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=400&q=80", // Polo
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80", // Shirt
];

// Vêtements Femme - Trendy, Fashion Forward
const womenClothingImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80", // Fashion look
  "https://images.unsplash.com/photo-1485968579169-713f056a53e6?w=400&q=80", // Dress
  "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80", // Casual wear
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", // Street style
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", // Urban fashion
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80", // Trendy outfit
  "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&q=80", // Crop top
  "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80", // Hoodie femme
  "https://images.unsplash.com/photo-1548624149-f30ce6c46bc5?w=400&q=80", // Jeans femme
  "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80", // Jacket femme
  "https://images.unsplash.com/photo-1583496661160-fb5886a0edd2?w=400&q=80", // Skirt
  "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=400&q=80", // Leggings
  "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=400&q=80", // Blazer
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80", // Top
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80", // Fashion piece
];

// Chaussures - Sneakers, Urban Footwear
const sneakerImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", // Nike red
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80", // Nike Air Jordan
  "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=400&q=80", // White sneakers
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&q=80", // Colorful sneakers
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80", // Nike Air Max
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80", // Nike sneaker
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80", // Orange sneaker
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80", // Colorful pair
  "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=400&q=80", // Adidas style
  "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&q=80", // Basketball shoes
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80", // Yeezy style
  "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400&q=80", // High tops
  "https://images.unsplash.com/photo-1581017316471-1f6ef7ce6fd3?w=400&q=80", // Running shoes
  "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400&q=80", // Classic sneakers
  "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&q=80", // Retro sneakers
];

// Hero images pour Frip&Drip
const heroImages = {
  main: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&q=80", // Streetwear model
  men: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
  women: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
  sneakers: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80",
};

// Legacy aliases for backward compatibility
const phoneImages = menClothingImages;
const computerImages = womenClothingImages;
const accessoryImages = sneakerImages;

// Map to track which images are already assigned
const assignedImages = new Map();

/**
 * Get a unique image for a product based on its ID and category
 * Ensures no duplicate images across products
 */
export const getProductImage = (productId, categoryId) => {
  const cacheKey = `${categoryId}-${productId}`;
  
  // Return cached image if already assigned
  if (assignedImages.has(cacheKey)) {
    return assignedImages.get(cacheKey);
  }
  
  let imageArray;
  switch (categoryId) {
    case 1: // Vêtements Homme
      imageArray = menClothingImages;
      break;
    case 2: // Vêtements Femme
      imageArray = womenClothingImages;
      break;
    case 3: // Chaussures
      imageArray = sneakerImages;
      break;
    default:
      imageArray = menClothingImages;
  }
  
  // Use product ID to deterministically select an image
  const imageIndex = productId % imageArray.length;
  const selectedImage = imageArray[imageIndex];
  
  // Cache the assignment
  assignedImages.set(cacheKey, selectedImage);
  
  return selectedImage;
};

/**
 * Get fallback image by category
 */
export const getFallbackImage = (categoryId) => {
  switch (categoryId) {
    case 1:
      return menClothingImages[0];
    case 2:
      return womenClothingImages[0];
    case 3:
      return sneakerImages[0];
    default:
      return menClothingImages[0];
  }
};

/**
 * Process articles array and assign unique images
 */
export const assignImagesToArticles = (articles, categoryId) => {
  return articles.map((article, index) => ({
    ...article,
    photo: getProductImage(article.id || index, categoryId),
    // Keep original photo as backup
    originalPhoto: article.photo
  }));
};

// Named exports for direct access
export { 
  phoneImages, 
  computerImages, 
  accessoryImages,
  menClothingImages,
  womenClothingImages,
  sneakerImages,
  heroImages
};

export default {
  getProductImage,
  getFallbackImage,
  assignImagesToArticles,
  phoneImages,
  computerImages,
  accessoryImages,
  menClothingImages,
  womenClothingImages,
  sneakerImages,
  heroImages
};
