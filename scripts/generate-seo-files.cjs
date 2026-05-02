const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const productsDataPath = path.join(projectRoot, "src", "utils", "productsData.js");
const sitemapPath = path.join(publicDir, "sitemap.xml");
const robotsPath = path.join(publicDir, "robots.txt");
const siteUrl = "https://bykmtvtion.com";

const staticRoutes = ["/", "/marque", "/boutique", "/coaching", "/contact"];

const ensureDirectory = (directoryPath) => {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
};

const readProductIds = () => {
  const source = fs.readFileSync(productsDataPath, "utf8");
  const productsBlockStart = source.indexOf("export const products = [");
  const productsSource =
    productsBlockStart >= 0 ? source.slice(productsBlockStart) : source;
  const regex = /id:\s*"([^"]+)"/g;
  const ids = new Set();
  let match = regex.exec(productsSource);

  while (match) {
    ids.add(match[1]);
    match = regex.exec(productsSource);
  }

  return [...ids];
};

const buildUrlNode = (loc, priority) => {
  const today = new Date().toISOString().slice(0, 10);
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    "    <changefreq>weekly</changefreq>",
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
};

const buildSitemapContent = (productIds) => {
  const staticEntries = staticRoutes.map((route) =>
    buildUrlNode(`${siteUrl}${route === "/" ? "" : route}`, route === "/" ? "1.0" : "0.8")
  );
  const productEntries = productIds.map((productId) =>
    buildUrlNode(`${siteUrl}/boutique/produit/${encodeURIComponent(productId)}`, "0.7")
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticEntries,
    ...productEntries,
    "</urlset>",
    "",
  ].join("\n");
};

const buildRobotsContent = () =>
  [
    "User-agent: *",
    "Allow: /",
    "Disallow: /admin",
    "Disallow: /private",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");

const main = () => {
  ensureDirectory(publicDir);
  const productIds = readProductIds();

  fs.writeFileSync(sitemapPath, buildSitemapContent(productIds), "utf8");
  fs.writeFileSync(robotsPath, buildRobotsContent(), "utf8");
};

main();
