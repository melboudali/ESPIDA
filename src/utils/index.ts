import { variantsType } from "../types";

export const getColorsAndImages = (variants: variantsType) => {
  const selectedVariants: { color: string; image: any }[] = [];
  for (const variant of variants) {
    const colorName: string = variant!.title!.split(" /")[0];
    if (selectedVariants.findIndex((selectedVariant) => selectedVariant.color === colorName) === -1) {
      selectedVariants.push({ color: colorName, image: variant!.image!.gatsbyImageData });
    }
  }

  return selectedVariants;
};

const colorsHex: { color: string; hex: string }[] = [
  { color: "black", hex: "#000" },
  { color: "grey", hex: "#808080" },
  { color: "white", hex: "#fff" },
  { color: "red", hex: "#ff0000" },
  { color: "brown", hex: "#a52a2a" },
  { color: "burgundy", hex: "#800020" },
  { color: "blue", hex: "#0000ff" },
  { color: "dark blue", hex: "#00008b" },
  { color: "navy", hex: "#000080" },
  { color: "purple", hex: "#800080" },
  { color: "yellow  ", hex: "#ffff00" },
  { color: "khaki", hex: "#f0e68c" },
  { color: "light khaki", hex: "#f6f0ba" },
  { color: "beige", hex: "#f5f5dc" },
];

export const getColor = (color: string) => {
  for (const colorHex of colorsHex) {
    if (color === colorHex.color) return colorHex.hex;
  }
  return "#ff0000";
};
