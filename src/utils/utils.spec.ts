import { getColorsAndImages, getColor } from "./index";

const variants = [
  { title: "Black /M", image: { gatsbyImageData: "Image" } },
  { title: "Red /M", image: { gatsbyImageData: "Image" } },
  { title: "Black /L", image: { gatsbyImageData: "Image" } },
  { title: "Black /XL", image: { gatsbyImageData: "Image" } },
  { title: "Green /M", image: { gatsbyImageData: "Image" } },
  { title: "Green /L", image: { gatsbyImageData: "Image" } },
  { title: "Green /XL", image: { gatsbyImageData: "Image" } },
  { title: "Black /XXL", image: { gatsbyImageData: "Image" } },
  { title: "Green /XXL", image: { gatsbyImageData: "Image" } },
  { title: "Red /L", image: { gatsbyImageData: "Image" } },
  { title: "Red /XL", image: { gatsbyImageData: "Image" } },
  { title: "Red /XXL", image: { gatsbyImageData: "Image" } },
];

describe("testing getColorsndImages func", () => {
  it("should return Black, Red, and Green colors", () => {
    expect(getColorsAndImages(variants)).toEqual([
      { color: "Black", image: "Image" },
      { color: "Red", image: "Image" },
      { color: "Green", image: "Image" },
    ]);
  });
});

describe("testing getColor func", () => {
  it("should return red if we don't have the selected color", () => {
    expect(getColor("nocolor")).toBe("#ff0000");
  });
  it("should return #000", () => {
    expect(getColor("Black".toLowerCase())).toBe("#000");
  });
  it("should return #800020", () => {
    expect(getColor("Burgundy".toLowerCase())).toBe("#800020");
  });
  it("should return #800080", () => {
    expect(getColor("Purple".toLowerCase())).toBe("#800080");
  });
  it("should return #f6f0ba", () => {
    expect(getColor("Light Khaki".toLowerCase())).toBe("#f6f0ba");
  });
  it("should return #00008b", () => {
    expect(getColor("Dark Blue".toLowerCase())).toBe("#00008b");
  });
});
