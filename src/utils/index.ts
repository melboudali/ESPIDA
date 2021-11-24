import { variantsType, variantType } from "../types";

export const getColorsAndImages = (variants: variantsType) => {
  const selectedVariants: variantType[] = [];
  for (const variant of variants) {
    const colorName: string = variant!.title!.split(" /")[0];
    if (selectedVariants.findIndex(({ color }) => color === colorName) === -1) {
      selectedVariants.push({ id: variant!.id, color: colorName, image: variant!.image!.gatsbyImageData });
    }
  }

  return selectedVariants;
};

const colorsHex: { color: string; hex: string }[] = [
  { color: "black", hex: "#000" },
  { color: "dark grey", hex: "#4f4f4f" },
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
  return "#c93030";
};

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()) && !!email;
};
