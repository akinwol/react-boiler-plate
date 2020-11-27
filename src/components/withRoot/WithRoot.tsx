/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { CookiesProvider } from "react-cookie"

// A theme with custom primary and secondary color.
// It's optional.
let theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    primary: {
      light: "#a08bff",
      main: "#6C5DD3", // #555186 "rgba(65, 62, 102, 1)", //413E66
      dark: "#3633a1",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(116, 187, 255, 1)",
      main: "#263238", // "#FF754C", // "rgba(40, 140, 255, 1)",
      dark: "rgba(0, 96, 203, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "#263238",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    action: {
      active: "#6C5DD3", // #F2994A (like drop downs and icons )
    },
  },
  // palette: {
  //   primary: {
  //     main:'#413e66' //'#3023AE',
  //   },
  //   secondary: {
  //     main:'#288bff' //'#F76A29',
  //   },
  //   text: {
  //     primary: "rgba(0, 0, 0, 0.87)",
  //     secondary: "rgba(0, 0, 0, 0.54)",
  //     disabled: "rgba(0, 0, 0, 0.38)",
  //     hint: "rgba(0, 0, 0, 0.38)"
  //   }
  // },
})
theme = responsiveFontSizes(theme)
function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <CookiesProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      </CookiesProvider>
    )
  }

  return WithRoot
}

export default withRoot
