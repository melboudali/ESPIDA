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
  { color: "red", hex: "#c93030" },
  { color: "brown", hex: "#541906" },
  { color: "burgundy", hex: "#800020" },
  { color: "blue", hex: "#4848cf" },
  { color: "dark blue", hex: "#222270" },
  { color: "navy", hex: "#222e4d" },
  { color: "purple", hex: "#872d87" },
  { color: "yellow", hex: "#fcfc6f" },
  { color: "khaki", hex: "#f0e68c" },
  { color: "light khaki", hex: "#f6f0ba" },
  { color: "beige", hex: "#f5f5dc" },
];

export const getColor = (colorName: string) => {
  for (const { color, hex } of colorsHex) {
    if (colorName.toLowerCase() === color) return hex;
  }
  return "#ff0000";
};
