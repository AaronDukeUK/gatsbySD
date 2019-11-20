import { createMuiTheme } from "@material-ui/core/styles"
import merge from "lodash/merge"

import typography from "./typography"
import palette from "./palette"

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: typography.fontFamily,
  },
  palette,
})

muiTheme.typography = merge(
  muiTheme.typography,
  typography(muiTheme.typography)
)

// Overrides
muiTheme.overrides = {
  MuiTypography: {
    colorInherit: {
      color: "inherit",
    },
    colorSecondary: {
      color: muiTheme.palette.secondary.main,
    },
    colorPrimary: {
      color: muiTheme.palette.primary.main,
    },
  },
  MuiMenu: {
    paper: {
      backgroundColor: muiTheme.palette.primary.main,
    },
    list: {},
  },
}

export default muiTheme
