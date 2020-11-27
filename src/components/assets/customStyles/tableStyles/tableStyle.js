// import { successColor, dangerColor } from "../jss/material-dashboard-react"

const tableStyles = (theme) => ({
  root: {
    width: "100%",
    borderRadius: "20px",
    // maxHeight: 440,
    // minHeight: 300,
    // [theme.breakpoints.up("md")]: {
    //   // maxHeight: 800,
    // },
  },
  container: {
    maxHeight: 440,
    minHeight: 300,
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      maxHeight: 600,
      minHeight: 500,
    },
    topMargin: {
      marginTop: "20px",
    },
    tableRowRoot: {
      "& > *": {
        borderBottom: "unset",
      },
    },
    boldText: {
      fontWeight: 600,
    },
    paginationDiv: {
      padding: "20px",
      textAlign: "center",
    },
  },
})

export default tableStyles
