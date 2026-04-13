import { describe, expect, it } from "vitest";
import {
  assignImagesToArticles,
  getFallbackImage,
  getProductImage,
  menClothingImages,
  sneakerImages,
  womenClothingImages,
} from "./productImages";

describe("productImages utils", () => {
  it("returns deterministic images for the same category/product pair", () => {
    const first = getProductImage(5, 1);
    const second = getProductImage(5, 1);

    expect(first).toBe(second);
    expect(menClothingImages).toContain(first);
  });

  it("maps category ids to the correct image pools", () => {
    expect(womenClothingImages).toContain(getProductImage(2, 2));
    expect(sneakerImages).toContain(getProductImage(3, 3));
  });

  it("returns the expected fallback image per category", () => {
    expect(getFallbackImage(1)).toBe(menClothingImages[0]);
    expect(getFallbackImage(2)).toBe(womenClothingImages[0]);
    expect(getFallbackImage(3)).toBe(sneakerImages[0]);
    expect(getFallbackImage(999)).toBe(menClothingImages[0]);
  });

  it("assigns generated images while preserving the original photo", () => {
    const articles = [{ id: 10, nom: "Produit A", photo: "https://custom/image.jpg" }];
    const result = assignImagesToArticles(articles, 1);

    expect(result).toHaveLength(1);
    expect(result[0].originalPhoto).toBe("https://custom/image.jpg");
    expect(menClothingImages).toContain(result[0].photo);
    expect(result[0].photo).not.toBe(result[0].originalPhoto);
  });
});
