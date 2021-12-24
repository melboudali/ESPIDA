import { getColorsAndImages, getColor, validateEmail, getSize, getVariant } from "./index";

const variants = [
  { id: "1", title: "Black /M", image: { gatsbyImageData: "Image" } },
  { id: "2", title: "Red /M", image: { gatsbyImageData: "Image" } },
  { id: "3", title: "Black /L", image: { gatsbyImageData: "Image" } },
  { id: "4", title: "Black /XL", image: { gatsbyImageData: "Image" } },
  { id: "5", title: "Green /M", image: { gatsbyImageData: "Image" } },
  { id: "6", title: "Green /L", image: { gatsbyImageData: "Image" } },
  { id: "7", title: "Green /XL", image: { gatsbyImageData: "Image" } },
  { id: "8", title: "Black /XXL", image: { gatsbyImageData: "Image" } },
  { id: "9", title: "Green /XXL", image: { gatsbyImageData: "Image" } },
  { id: "10", title: "Red /L", image: { gatsbyImageData: "Image" } },
  { id: "11", title: "Red /XL", image: { gatsbyImageData: "Image" } },
  { id: "12", title: "Red /XXL", image: { gatsbyImageData: "Image" } },
];

describe("testing getColorsndImages func", () => {
  it("should return Black, Red, and Green colors", () => {
    expect(getColorsAndImages(variants)).toEqual([
      { id: "1", color: "Black", image: "Image" },
      { id: "2", color: "Red", image: "Image" },
      { id: "5", color: "Green", image: "Image" },
    ]);
  });
});

describe("testing getSize", () => {
  it("should return", () => {
    expect(getSize(variants)).toEqual([
      { id: "1", size: "M" },
      { id: "3", size: "L" },
      { id: "4", size: "XL" },
      { id: "8", size: "XXL" },
    ]);
  });
});

describe("testing getColor func", () => {
  it("should return red if we don't have the selected color", () => {
    expect(getColor("nocolor")).toBe("#c93030");
  });
  it("should return #000", () => {
    expect(getColor("Black".toLowerCase())).toBe("#000");
  });
  it("should return #800020", () => {
    expect(getColor("Burgundy".toLowerCase())).toBe("#800020");
  });
  it("should return #872d87", () => {
    expect(getColor("Purple".toLowerCase())).toBe("#872d87");
  });
  it("should return #f6f0ba", () => {
    expect(getColor("Light Khaki".toLowerCase())).toBe("#f6f0ba");
  });
  it("should return #222270", () => {
    expect(getColor("Dark Blue".toLowerCase())).toBe("#222270");
  });
});

describe("testing validateEmail func", () => {
  const email = "moe@elboudali.com";
  const notEmail = "moe.elboudali";
  it("should return true if we pass an email", () => {
    expect(validateEmail(email)).toBeTruthy();
  });
  it("should return false if we pass an invalid email", () => {
    expect(validateEmail(notEmail)).not.toBeTruthy();
  });
});

describe("testing getVariant function", () => {
  it("should return the right varian", () => {
    expect(getVariant(variants, "Green", "L")).toEqual({ id: "6", title: "Green /L", image: { gatsbyImageData: "Image" } });
  });
  it("should return undefined", () => {
    expect(getVariant(variants, "Yellow", "L")).toBeUndefined();
  });
  it("should return the right variant id '6'", () => {
    expect(getVariant(variants, "Green", "L")!.id).toBe("6");
  });
});
