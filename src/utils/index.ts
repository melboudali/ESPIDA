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
