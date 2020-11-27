import {
  drawerWidth,
  transition,
  // boxShadow,
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  // infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
  blackColor,
  hexToRgb,
} from "../../material-dashboard-react"

const sidebarStyle = (theme) => ({
  drawerPaper: {
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1",
    // ...boxShadow,
    width: drawerWidth,
    [theme.breakpoints.up("lg")]: {
      // md
      width: drawerWidth,
      position: "fixed",
      height: "100%",
    },
    [theme.breakpoints.down("md")]: {
      // sm
      width: drawerWidth,
      // ...boxShadow,
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      ...transition,
    },
  },
  drawerPaperRTL: {
    [theme.breakpoints.up("md")]: {
      left: "auto !important",
      right: "0 !important",
    },
    [theme.breakpoints.down("sm")]: {
      left: "0  !important",
      right: "auto !important",
    },
  },
  logo: {
    height: "100px",
    position: "relative",
    padding: "15px 15px",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",

      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: `rgba(${hexToRgb(grayColor[6])}, 0.3)`,
    },
    border: "none",
  },
  logoLink: {
    ...defaultFont,
    textTransform: "uppercase",
    padding: "5px 0",
    display: "block",
    fontSize: "18px",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "30px",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&,&:hover": {
      color: whiteColor,
    },
  },
  logoLinkRTL: {
    textAlign: "right",
  },
  logoImage: {
    width: "180px",
    display: "inline-block",
    // maxHeight: "30px",
    marginLeft: "0px",
    marginRight: "15px",
    textAlign: "center",
  },
  img: {
    width: "50px",
    top: "22px",
    position: "absolute",
    verticalAlign: "middle",
    border: "0",
  },
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      background: "white",
      opacity: ".8",
    },
  },
  list: {
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset",
  },
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none",
    "&:hover,&:focus,&:visited,&": {
      color: whiteColor,
    },
    height: "80px",
  },
  itemLink: {
    width: "auto",
    transition: "all 300ms linear",
    // margin: "10px 15px 0",
    borderRadius: "3px",
    position: "relative",
    // display: "block",
    padding: "10px 15px",
    backgroundColor: "inherit",
    ...defaultFont,
    height: "inherit",
    margin: "0 auto",
    verticalAlign: "middle",
  },
  itemIcon: {
    width: "20px",
    height: "25px",
    fontSize: "50px",
    lineHeight: "30px",
    float: "left",
    marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "#979797", // "rgba(" + hexToRgb(blackColor) + ", 0.8)",
    margin: "auto",
  },
  itemIconRTL: {
    marginRight: "3px",
    marginLeft: "15px",
    float: "right",
  },
  itemText: {
    ...defaultFont,
    margin: "0",
    lineHeight: "24px",
    fontSize: "14px",
    fontWeight: "500",
    color: blackColor,
  },
  itemTextRTL: {
    textAlign: "right",
  },
  whiteFont: {
    color: whiteColor,
  },
  blackFont: {
    color: blackColor,
  },
  purple: {
    backgroundColor: primaryColor[0],
    ...primaryBoxShadow,
    "&:hover,&:focus": {
      backgroundColor: primaryColor[0],
      ...primaryBoxShadow,
    },
  },
  activeColor: {
    color: primaryColor[0],
  },
  activeBorder: {
    borderBottom: `5px solid ${primaryColor[0]}`,
  },
  blue: {
    backgroundColor: whiteColor,
    boxShadow: `0 12px 20px -10px rgba(${hexToRgb(whiteColor)},.28), 0 4px 20px 0 rgba(${hexToRgb(
      blackColor
    )},.12), 0 7px 8px -5px rgba(${hexToRgb(whiteColor)},.2)`,
    "&:hover,&:focus": {
      backgroundColor: whiteColor,
      boxShadow: `0 12px 20px -10px rgba(${hexToRgb(whiteColor)},.28), 0 4px 20px 0 rgba(${hexToRgb(
        blackColor
      )},.12), 0 7px 8px -5px rgba(${hexToRgb(whiteColor)},.2)`,
    },
  },
  green: {
    backgroundColor: successColor[0],
    boxShadow: `0 12px 20px -10px rgba(${hexToRgb(
      successColor[0]
    )},.28), 0 4px 20px 0 rgba(${hexToRgb(blackColor)},.12), 0 7px 8px -5px rgba(${hexToRgb(
      successColor[0]
    )},.2)`,
    "&:hover,&:focus": {
      backgroundColor: successColor[0],
      boxShadow: `0 12px 20px -10px rgba(${hexToRgb(
        successColor[0]
      )},.28), 0 4px 20px 0 rgba(${hexToRgb(blackColor)},.12), 0 7px 8px -5px rgba(${hexToRgb(
        successColor[0]
      )},.2)`,
    },
  },
  orange: {
    backgroundColor: warningColor[0],
    boxShadow: `0 12px 20px -10px rgba(${hexToRgb(
      warningColor[0]
    )},.28), 0 4px 20px 0 rgba(${hexToRgb(blackColor)},.12), 0 7px 8px -5px rgba(${hexToRgb(
      warningColor[0]
    )},.2)`,
    "&:hover,&:focus": {
      backgroundColor: warningColor[0],
      boxShadow: `0 12px 20px -10px rgba(${hexToRgb(
        warningColor[0]
      )},.28), 0 4px 20px 0 rgba(${hexToRgb(blackColor)},.12), 0 7px 8px -5px rgba(${hexToRgb(
        warningColor[0]
      )},.2)`,
    },
  },
  red: {
    backgroundColor: dangerColor[0],
    boxShadow: `0 12px 20px -10px rgba(${hexToRgb(
      dangerColor[0]
    )},.28), 0 4px 20px 0 rgba(${hexToRgb(blackColor)},.12), 0 7px 8px -5px rgba(${hexToRgb(
      dangerColor[0]
    )},.2)`,
    "&:hover,&:focus": {
      backgroundColor: dangerColor[0],
      boxShadow: `0 12px 20px -10px rgba(${hexToRgb(
        dangerColor[0]
      )},.28), 0 4px 20px 0 rgba(${hexToRgb(blackColor)},.12), 0 7px 8px -5px rgba(${hexToRgb(
        dangerColor[0]
      )},.2)`,
    },
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "240px",
    zIndex: "4",
    overflowScrolling: "touch",
  },
  activePro: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "100%",
      bottom: "13px",
    },
  },
})

export default sidebarStyle
