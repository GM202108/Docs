const brandBoard = {
  deepPurple: "rgb(35, 38, 87)",
  periwinkle: "rgb(86, 98, 167)",
  prismaticBlack: "rgb(19, 23, 24)",
  mintGreen: "rgb(46, 206, 149)",
  bluePurple: "rgba(96, 120, 226)",
  blueIris: "rgb(94, 146, 225)",
  turquoise: "rgb(74, 147, 174)",
  cyan: "rgb(101, 213, 218)",
  coolGray: "rgb(197, 208, 216)",
  gray04: "rgb(231, 235, 239)",
  gray08: "rgb(95, 102, 106)",
  gray09: "rgb(53, 58, 61)",
};
const otherMint = "rgb(5, 200, 149)";

module.exports = {
  plain: {
    color: brandBoard.deepPurple,
    backgroundColor: brandBoard.gray04,
  },
  styles: [
    {
      types: ["changed"],
      style: { color: "rgb(162, 191, 252)", fontStyle: "italic" },
    },
    {
      types: ["deleted"],
      style: { color: "rgba(239, 83, 80, 0.56)", fontStyle: "italic" },
    },
    {
      types: ["inserted", "attr-name", "string", "url"],
      style: { color: brandBoard.turquoise, fontStyle: "italic" },
    },
    {
      types: ["comment"],
      style: { color: brandBoard.gray08, fontStyle: "italic" },
    },
    { types: ["variable"], style: { color: brandBoard.periwinkle } },
    { types: ["number"], style: { color: brandBoard.bluePurple } },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: { color: brandBoard.bluePurple },
    },
    { types: ["punctuation"], style: { color: otherMint } },
    {
      types: ["selector", "doctype"],
      style: { color: otherMint, fontStyle: "italic" },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: { color: brandBoard.periwinkle },
    },
    { types: ["boolean"], style: { color: brandBoard.bluePurple } },
    { types: ["property"], style: { color: brandBoard.turquoise } },
    { types: ["namespace"], style: { color: brandBoard.periwinkle } },
  ],
};
