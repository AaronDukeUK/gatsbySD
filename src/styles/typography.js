require("typeface-roboto")
require("typeface-reenie-beanie")

const typography = typography => ({
  h1: {
    fontFamily: "Reenie Beanie",
  },
  h2: {
    fontFamily: "Reenie Beanie",
  },
  h3: {
    fontFamily: "Reenie Beanie",
  },
  h4: {
    fontFamily: "Reenie Beanie",
  },
  body1: {
    fontSize: typography.pxToRem(20),
    lineHeight: 1.4,
    fontWeight: 300,
  },
  body2: {
    fontSize: typography.pxToRem(16),
    lineHeight: 1.1,
    fontWeight: 300,
  },
})

export default typography
