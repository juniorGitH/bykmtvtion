// ============================================
// FRIP&DRIP - LOCAL BACKEND SERVICE
// Toutes les données sont stockées en localStorage
// ============================================

// Helper pour générer des IDs uniques
const generateId = () => Date.now() + Math.random().toString(36).substr(2, 9);

// Helper pour générer un code de suivi
const generateTrackingCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = 'FD-';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

// ============================================
// DONNÉES INITIALES - FRIP&DRIP CATALOGUE
// ============================================
const initializeFripDripData = () => {
  // Vêtements Homme (Catégorie 1)
  if (!localStorage.getItem('flipdrip_articles_1')) {
    const menClothing = [
      { id: 1, nom: "Hoodie Urban Classic", marque: "Frip&Drip", caracteristique: "Hoodie oversize en coton premium, capuche doublée", prix: 25000, categorieId: 1, stock: 15 },
      { id: 2, nom: "T-Shirt Graphic Fire", marque: "Frip&Drip", caracteristique: "T-shirt 100% coton avec print exclusif", prix: 12000, categorieId: 1, stock: 30 },
      { id: 3, nom: "Jogger Street Style", marque: "Frip&Drip", caracteristique: "Jogger confortable avec poches zippées", prix: 18000, categorieId: 1, stock: 20 },
      { id: 4, nom: "Bomber Jacket Noir", marque: "Frip&Drip", caracteristique: "Bomber léger avec doublure satinée", prix: 35000, categorieId: 1, stock: 10 },
      { id: 5, nom: "Cargo Pants Khaki", marque: "Frip&Drip", caracteristique: "Pantalon cargo avec poches multiples", prix: 22000, categorieId: 1, stock: 18 },
      { id: 6, nom: "Sweatshirt Crewneck", marque: "Frip&Drip", caracteristique: "Sweat col rond, broderie logo", prix: 20000, categorieId: 1, stock: 25 },
      { id: 7, nom: "Denim Jacket Vintage", marque: "Frip&Drip", caracteristique: "Veste en jean délavé style vintage", prix: 30000, categorieId: 1, stock: 12 },
      { id: 8, nom: "Tank Top Essential", marque: "Frip&Drip", caracteristique: "Débardeur coupe moderne", prix: 8000, categorieId: 1, stock: 40 },
      { id: 9, nom: "Polo Premium", marque: "Frip&Drip", caracteristique: "Polo en piqué de coton", prix: 15000, categorieId: 1, stock: 22 },
      { id: 10, nom: "Short Bermuda Sport", marque: "Frip&Drip", caracteristique: "Short sport avec bandes latérales", prix: 14000, categorieId: 1, stock: 28 },
    ];
    localStorage.setItem('flipdrip_articles_1', JSON.stringify(menClothing));
  }

  // Vêtements Femme (Catégorie 2)
  if (!localStorage.getItem('flipdrip_articles_2')) {
    const womenClothing = [
      { id: 11, nom: "Crop Top Vibes", marque: "Frip&Drip", caracteristique: "Crop top tendance, coupe ajustée", prix: 10000, categorieId: 2, stock: 35 },
      { id: 12, nom: "Hoodie Oversized Pink", marque: "Frip&Drip", caracteristique: "Hoodie oversize rose pastel", prix: 24000, categorieId: 2, stock: 20 },
      { id: 13, nom: "Legging High Waist", marque: "Frip&Drip", caracteristique: "Legging taille haute, stretch confort", prix: 15000, categorieId: 2, stock: 30 },
      { id: 14, nom: "Robe T-Shirt Dress", marque: "Frip&Drip", caracteristique: "Robe t-shirt longue, style décontracté", prix: 18000, categorieId: 2, stock: 15 },
      { id: 15, nom: "Blazer Streetwear", marque: "Frip&Drip", caracteristique: "Blazer oversized coupe moderne", prix: 32000, categorieId: 2, stock: 10 },
      { id: 16, nom: "Jean Mom Fit", marque: "Frip&Drip", caracteristique: "Jean taille haute coupe mom", prix: 22000, categorieId: 2, stock: 25 },
      { id: 17, nom: "Top Bralette", marque: "Frip&Drip", caracteristique: "Bralette avec détails dentelle", prix: 12000, categorieId: 2, stock: 28 },
      { id: 18, nom: "Jogger Femme Slim", marque: "Frip&Drip", caracteristique: "Jogger coupe slim, taille élastique", prix: 17000, categorieId: 2, stock: 22 },
      { id: 19, nom: "Veste Teddy", marque: "Frip&Drip", caracteristique: "Veste teddy douce et chaude", prix: 28000, categorieId: 2, stock: 12 },
      { id: 20, nom: "Short Taille Haute", marque: "Frip&Drip", caracteristique: "Short en jean taille haute", prix: 16000, categorieId: 2, stock: 20 },
    ];
    localStorage.setItem('flipdrip_articles_2', JSON.stringify(womenClothing));
  }

  // Chaussures/Sneakers (Catégorie 3)
  if (!localStorage.getItem('flipdrip_articles_3')) {
    const sneakers = [
      { id: 21, nom: "Air Max Urban", marque: "Nike", caracteristique: "Sneakers Air Max, semelle coussin d'air", prix: 85000, categorieId: 3, stock: 8 },
      { id: 22, nom: "Jordan Retro High", marque: "Jordan", caracteristique: "Air Jordan montantes, édition limitée", prix: 120000, categorieId: 3, stock: 5 },
      { id: 23, nom: "Ultraboost 22", marque: "Adidas", caracteristique: "Running boost technology", prix: 95000, categorieId: 3, stock: 10 },
      { id: 24, nom: "Classic Old Skool", marque: "Vans", caracteristique: "Sneakers classiques bande latérale", prix: 45000, categorieId: 3, stock: 15 },
      { id: 25, nom: "Air Force 1 Low", marque: "Nike", caracteristique: "AF1 blanches classiques", prix: 75000, categorieId: 3, stock: 12 },
      { id: 26, nom: "Yeezy Boost 350", marque: "Adidas", caracteristique: "Yeezy design Kanye West", prix: 150000, categorieId: 3, stock: 4 },
      { id: 27, nom: "New Balance 550", marque: "New Balance", caracteristique: "Retro basketball style", prix: 70000, categorieId: 3, stock: 10 },
      { id: 28, nom: "Puma RS-X", marque: "Puma", caracteristique: "Chunky sneakers colorées", prix: 55000, categorieId: 3, stock: 14 },
      { id: 29, nom: "Converse High Top", marque: "Converse", caracteristique: "Chuck Taylor All Star montantes", prix: 40000, categorieId: 3, stock: 20 },
      { id: 30, nom: "Dunk Low Panda", marque: "Nike", caracteristique: "Nike Dunk noir et blanc", prix: 90000, categorieId: 3, stock: 6 },
    ];
    localStorage.setItem('flipdrip_articles_3', JSON.stringify(sneakers));
  }

  // Utilisateurs par défaut
  if (!localStorage.getItem('flipdrip_users')) {
    const users = [
      { id: 1, firstName: "Admin", lastName: "FripDrip", email: "admin@fripdrip.com", password: "admin123", role: "Admin" },
      { id: 2, firstName: "Livreur", lastName: "Express", email: "livreur@fripdrip.com", password: "livreur123", role: "Livreur" },
      { id: 3, firstName: "Client", lastName: "Demo", email: "client@demo.com", password: "client123", role: "Client" },
    ];
    localStorage.setItem('flipdrip_users', JSON.stringify(users));
  }

  // Commandes vides
  if (!localStorage.getItem('flipdrip_orders')) {
    localStorage.setItem('flipdrip_orders', JSON.stringify([]));
  }

  // Tontines vides
  if (!localStorage.getItem('flipdrip_tontines')) {
    localStorage.setItem('flipdrip_tontines', JSON.stringify([]));
  }
};

// Initialiser les données au chargement
initializeFripDripData();

// ============================================
// AUTH SERVICE - Gestion authentification locale
// ============================================
class AuthService {
  constructor() {
    this.currentUser = null;
    this.token = null;
    this.listeners = [];
  }

  async initialize() {
    initializeFripDripData();
    const token = localStorage.getItem("authToken");
    const userStr = localStorage.getItem("currentUser");
    if (token && userStr) {
      this.token = token;
      this.currentUser = JSON.parse(userStr);
    }
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }

  notifyListeners() {
    this.listeners.forEach((callback) => callback(this.currentUser));
  }

  generateToken(user) {
    // Simple token pour local
    return btoa(JSON.stringify({ userId: user.id, email: user.email, role: user.role, exp: Date.now() + 86400000 }));
  }

  async login(email, password) {
    const users = JSON.parse(localStorage.getItem('flipdrip_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      this.token = this.generateToken(user);
      this.currentUser = {
        id: user.id,
        username: user.email,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      };
      localStorage.setItem("authToken", this.token);
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
      this.notifyListeners();
      return { success: true, user: this.currentUser };
    }
    return { success: false, error: "Email ou mot de passe incorrect" };
  }

  async register(firstName, lastName, email, password) {
    const users = JSON.parse(localStorage.getItem('flipdrip_users') || '[]');
    
    if (users.find(u => u.email === email)) {
      return { success: false, error: "Cet email est déjà utilisé" };
    }

    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      password,
      role: "Client"
    };
    
    users.push(newUser);
    localStorage.setItem('flipdrip_users', JSON.stringify(users));
    
    return { success: true };
  }

  logout() {
    this.token = null;
    this.currentUser = null;
    localStorage.removeItem("authToken");
    localStorage.removeItem("currentUser");
    this.notifyListeners();
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return !!this.token && !!this.currentUser;
  }

  hasRole(role) {
    return this.currentUser?.role === role;
  }

  async updateProfile(firstName, lastName, email, password = null) {
    const users = JSON.parse(localStorage.getItem('flipdrip_users') || '[]');
    const index = users.findIndex(u => u.id === this.currentUser.id);
    
    if (index !== -1) {
      users[index].firstName = firstName;
      users[index].lastName = lastName;
      users[index].email = email;
      if (password) users[index].password = password;
      
      localStorage.setItem('flipdrip_users', JSON.stringify(users));
      
      this.currentUser = { ...this.currentUser, firstName, lastName, email };
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
      this.notifyListeners();
      
      return { success: true };
    }
    return { success: false, error: "Utilisateur non trouvé" };
  }

  async deleteAccount() {
    const users = JSON.parse(localStorage.getItem('flipdrip_users') || '[]');
    const filtered = users.filter(u => u.id !== this.currentUser.id);
    localStorage.setItem('flipdrip_users', JSON.stringify(filtered));
    this.logout();
    return { success: true };
  }

  async getCurrentUserDetails() {
    return this.currentUser;
  }

  getAuthHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    };
  }
}

export const authService = new AuthService();

// ============================================
// ARTICLE SERVICE - Gestion des produits
// ============================================
class ArticleService {
  async getByCategory(categoryId) {
    const articles = JSON.parse(localStorage.getItem(`flipdrip_articles_${categoryId}`) || '[]');
    return articles;
  }

  async getById(id) {
    for (let cat = 1; cat <= 3; cat++) {
      const articles = JSON.parse(localStorage.getItem(`flipdrip_articles_${cat}`) || '[]');
      const article = articles.find(a => a.id === id);
      if (article) return article;
    }
    return null;
  }

  async getAll() {
    let all = [];
    for (let cat = 1; cat <= 3; cat++) {
      const articles = JSON.parse(localStorage.getItem(`flipdrip_articles_${cat}`) || '[]');
      all = [...all, ...articles];
    }
    return all;
  }

  async create(article) {
    const catId = article.categorieId || 1;
    const articles = JSON.parse(localStorage.getItem(`flipdrip_articles_${catId}`) || '[]');
    const newArticle = { ...article, id: Date.now() };
    articles.push(newArticle);
    localStorage.setItem(`flipdrip_articles_${catId}`, JSON.stringify(articles));
    return { success: true, article: newArticle };
  }

  async update(id, article) {
    const catId = article.categorieId || 1;
    const articles = JSON.parse(localStorage.getItem(`flipdrip_articles_${catId}`) || '[]');
    const index = articles.findIndex(a => a.id === id);
    if (index !== -1) {
      articles[index] = { ...articles[index], ...article };
      localStorage.setItem(`flipdrip_articles_${catId}`, JSON.stringify(articles));
      return { success: true };
    }
    return { success: false, error: "Article non trouvé" };
  }

  async delete(id) {
    for (let cat = 1; cat <= 3; cat++) {
      const articles = JSON.parse(localStorage.getItem(`flipdrip_articles_${cat}`) || '[]');
      const filtered = articles.filter(a => a.id !== id);
      if (filtered.length !== articles.length) {
        localStorage.setItem(`flipdrip_articles_${cat}`, JSON.stringify(filtered));
        return { success: true };
      }
    }
    return { success: false, error: "Article non trouvé" };
  }
}

export const articleService = new ArticleService();

// ============================================
// ORDER SERVICE - Gestion des commandes
// ============================================
class OrderService {
  async createOrder(order) {
    const orders = JSON.parse(localStorage.getItem('flipdrip_orders') || '[]');
    const newOrder = {
      ...order,
      id: Date.now(),
      trackingCode: generateTrackingCode(),
      status: "En attente",
      createdAt: new Date().toISOString(),
      userId: authService.getCurrentUser()?.id
    };
    orders.push(newOrder);
    localStorage.setItem('flipdrip_orders', JSON.stringify(orders));
    return { success: true, order: newOrder };
  }

  async getByTrackingCode(code) {
    const orders = JSON.parse(localStorage.getItem('flipdrip_orders') || '[]');
    return orders.find(o => o.trackingCode === code) || null;
  }

  async getMyOrders() {
    const userId = authService.getCurrentUser()?.id;
    const orders = JSON.parse(localStorage.getItem('flipdrip_orders') || '[]');
    return orders.filter(o => o.userId === userId);
  }

  async getAllOrders() {
    return JSON.parse(localStorage.getItem('flipdrip_orders') || '[]');
  }

  async getPendingOrders() {
    const orders = JSON.parse(localStorage.getItem('flipdrip_orders') || '[]');
    return orders.filter(o => o.status === "En attente" || o.status === "En cours");
  }

  async updateStatus(orderId, status) {
    const orders = JSON.parse(localStorage.getItem('flipdrip_orders') || '[]');
    const index = orders.findIndex(o => o.id === orderId);
    if (index !== -1) {
      orders[index].status = status;
      orders[index].updatedAt = new Date().toISOString();
      localStorage.setItem('flipdrip_orders', JSON.stringify(orders));
      return { success: true };
    }
    return { success: false, error: "Commande non trouvée" };
  }

  async acceptOrder(orderId) {
    return this.updateStatus(orderId, "En cours de livraison");
  }

  async markDelivered(orderId) {
    return this.updateStatus(orderId, "Livré");
  }
}

export const orderService = new OrderService();

// ============================================
// TONTINE SERVICE - Gestion des tontines
// ============================================
class TontineService {
  async createTontine(order, paymentAmount, frequency, name) {
    const tontines = JSON.parse(localStorage.getItem('flipdrip_tontines') || '[]');
    const newTontine = {
      id: Date.now(),
      orderId: order.id,
      name,
      totalAmount: order.totalAmount,
      paymentAmount,
      frequency,
      amountPaid: 0,
      status: "Active",
      payments: [],
      createdAt: new Date().toISOString(),
      userId: authService.getCurrentUser()?.id
    };
    tontines.push(newTontine);
    localStorage.setItem('flipdrip_tontines', JSON.stringify(tontines));
    return { success: true, tontine: newTontine };
  }

  async getMyTontines() {
    const userId = authService.getCurrentUser()?.id;
    const tontines = JSON.parse(localStorage.getItem('flipdrip_tontines') || '[]');
    return tontines.filter(t => t.userId === userId);
  }

  async getAllTontines() {
    return JSON.parse(localStorage.getItem('flipdrip_tontines') || '[]');
  }

  async addPayment(tontineId, amount, paymentMethod = "TMoney") {
    const tontines = JSON.parse(localStorage.getItem('flipdrip_tontines') || '[]');
    const index = tontines.findIndex(t => t.id === tontineId);
    
    if (index !== -1) {
      const payment = {
        id: Date.now(),
        amount,
        paymentMethod,
        date: new Date().toISOString()
      };
      tontines[index].payments.push(payment);
      tontines[index].amountPaid += amount;
      
      if (tontines[index].amountPaid >= tontines[index].totalAmount) {
        tontines[index].status = "Complété";
      }
      
      localStorage.setItem('flipdrip_tontines', JSON.stringify(tontines));
      return { success: true, tontine: tontines[index] };
    }
    return { success: false, error: "Tontine non trouvée" };
  }

  calculateRemaining(tontine) {
    const remaining = tontine.totalAmount - tontine.amountPaid;
    const paymentsLeft = Math.ceil(remaining / tontine.paymentAmount);
    return {
      remainingAmount: remaining,
      paymentsLeft,
      progress: (tontine.amountPaid / tontine.totalAmount) * 100,
    };
  }
}

export const tontineService = new TontineService();

// ============================================
// PAYGATE SERVICE - Simulation paiement local
// ============================================
class PaygateService {
  async initiatePayment(amount, orderId, phone, method) {
    // Simulation de paiement
    const transactionId = `TXN-${Date.now()}`;
    
    // Stocker la transaction
    const transactions = JSON.parse(localStorage.getItem('flipdrip_transactions') || '[]');
    transactions.push({
      id: transactionId,
      amount,
      orderId,
      phone,
      method,
      status: "pending",
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('flipdrip_transactions', JSON.stringify(transactions));
    
    return { 
      success: true, 
      transactionId, 
      message: `Paiement de ${amount} FCFA initié via ${method}. Confirmez sur votre téléphone.` 
    };
  }

  async checkStatus(transactionId) {
    const transactions = JSON.parse(localStorage.getItem('flipdrip_transactions') || '[]');
    const txn = transactions.find(t => t.id === transactionId);
    
    if (txn) {
      // Simulation: après 3 secondes, le paiement est confirmé
      const elapsed = Date.now() - new Date(txn.createdAt).getTime();
      if (elapsed > 3000 && txn.status === "pending") {
        txn.status = "success";
        localStorage.setItem('flipdrip_transactions', JSON.stringify(transactions));
      }
      return { success: true, status: txn.status, message: txn.status === "success" ? "Paiement confirmé!" : "En attente de confirmation..." };
    }
    return { success: false, error: "Transaction non trouvée" };
  }

  formatPhone(phone) {
    let cleaned = phone.replace(/\D/g, "");
    if (cleaned.startsWith("228")) return "+" + cleaned;
    if (cleaned.length === 8) return "+228" + cleaned;
    return "+" + cleaned;
  }

  isValidPhone(phone) {
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length === 8 || (cleaned.length === 11 && cleaned.startsWith("228"));
  }
}

export const paygateService = new PaygateService();

// ============================================
// CONTENT SERVICE - Contenu du site
// ============================================
class ContentService {
  constructor() {
    this.cache = null;
  }

  async getContent() {
    return {
      home: {
        title: "FRIP&DRIP",
        subtitle: "Le streetwear qui fait vibrer ta génération",
        description: "Vêtements tendance homme & femme, sneakers exclusives et style urbain.",
      },
      aPropos: {
        title: "À Propos de Frip&Drip",
        content: "Frip&Drip est ta destination streetwear au Togo. Des looks qui claquent, des prix qui respectent ton budget.",
      },
      contact: {
        phone: "+22891565854",
        email: "contact@fripanddrip.com",
        address: "Lomé, Togo",
        whatsapp: "22891565854"
      },
    };
  }
}

export const contentService = new ContentService();
