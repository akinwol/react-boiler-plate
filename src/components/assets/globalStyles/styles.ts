import { primaryColor } from "../jss/material-dashboard-react"

const drawerWidth = 240
const styles = (theme: any) => ({
  "@global": {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
    },
    body: {
      // backgroundColor: "#ffffff", // theme.palette.common.white,
    },
  },
  appBar: {
    backgroundColor: "#263238",
    border: "none",
    boxShadow: "none",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "transparent",
      // visibility: 'hidden',
      maxWidth: "300px",
    },
  },
  toolbarTitle: {
    flex: 1,
    textDecoration: "none",
  },
  layout: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    minHeight: "100vh",
    marginTop: theme.spacing(3),
  },
  footerLayout: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1024 + theme.spacing(3) * 2)]: {
      width: 1024,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  heroContent: {
    // maxWidth: 600,
    margin: "0 auto",
    padding: theme.spacing(3), // `${theme.spacing.unit}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    // backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  cardActions: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(2),
    },
    backgroundColor: theme.palette.common.paper,
  },
  footer: {
    marginTop: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2), // `${theme.spacing.unit * 6}px 0`,
    // backgroundColor:'#F5F5F5'
  },
  tab: {
    height: "50px",
    fontSize: "30px",
    textTransform: "none",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  formTitleContent: {
    marginTop: "10px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  menu: {
    width: "100%",
  },
  currencyField: {
    width: "200px",
    display: "inline",
  },
  summary: {
    marginTop: "40px",
    marginBottom: "40px",
    width: "100%",
    display: "block",
  },
  progress: {
    margin: "auto",
    textAlign: "center",
  },
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    backgroundColor: "#263238",
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#263238",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // paddingBottom: theme.spacing(3),
  },
  margin: {
    margin: theme.spacing(1),
  },
  listItemTextNav: {
    color: "#FFFFFF",
  },
  listitemMouseEvent: {
    "&:focus": {
      borderBottom: "solid 1px #3023AE",
      borderTop: "solid 1px #3023AE",
    },
    "&:hover": {
      borderBottom: "solid 1px #288CFF",
      borderTop: "solid 1px #288CFF",
    },
  },
  listitemSelected: {
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      "& $listItemTextNav, & $navIcon": {
        color: theme.palette.secondary.dark,
      },
      borderTop: "solid 1px #288CFF",
    },
    backgroundColor: theme.palette.common.white,
    "& $listItemTextNav, & $navIcon": {
      color: theme.palette.secondary.main,
    },
    borderBottom: "solid 10px #288CFF",
  },
  navIcon: {
    color: "#979797",
    minWidth: "40px",
  },
  nestedMenu: {
    paddingLeft: theme.spacing(4),
  },
  cardPaper: {
    textAlign: "center",
    padding: theme.spacing(2),
    // color: theme.palette.text.secondary,
    minHeight: "10em",
    minWidth: "15em",
  },
  cardPaperLeft: {
    padding: theme.spacing(2),
    // color: theme.palette.text.secondary,
    minHeight: "10em",
    minWidth: "15em",
  },
  marginTop20: {
    marginTop: "20px",
  },
  marginTop10: {
    marginTop: "10px",
  },
  timePickerContainer: {
    marginBottom: "10px",
  },
  avatarFeed: {
    boxShadow: "0px 16px 30px rgba(0, 0, 0, 0.3), 0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
  feedEndIcon: {
    flex: "0 0 auto",
    // alignSelf:'flex-start'
  },
  feedContentHeader: {
    flex: "1 1 auto",
  },
  feedHeader: {
    padding: "16px",
    display: "flex",
    alignItems: "center",
  },
  currencyCode: {
    color: "#979797",
    fontSize: "0.875rem",
  },
  leftSummaryBody: {
    color: "#979797",
  },
  rightSummaryBody: {
    color: "#000000",
  },
  summaryDetails: {
    fontSize: "0.85rem",
    color: "#979797",
  },
  totals: {
    color: "#000000",
    fontWeight: "550",
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: 40,
  },
  buttonDrawerWidth: {
    width: "180px",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: theme.spacing(3),
  },
  header: {
    padding: "16px",
    display: "flex",
    alignItems: "center",
  },
  contentHeader: {
    flex: "1 1 auto",
  },
  cardMedia: {
    maxWidth: 345,
  },
  cardMediaImage: {
    height: 140,
  },
  indentedTextField: {
    marginLeft: theme.spacing(4),
  },
  productHeader: {
    marginBottom: "20px",
    borderRadius: "30px",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(6),
    },
  },
  productPricing: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    // display:'inline-flex'
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  rightSideDrawer: {
    // root: {
    //   width: '100%'
    // },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
    backgroundColor: "#F5F5F5",
  },
  iconBesideText: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
  alignRightSmUp: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
  },
  loaderBg: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    position: "fixed",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    zIndex: 10000,
  },
  customerListItem: {
    marginBottom: 20,
  },
  customerText: {
    marginTop: 20,
    marginBottom: 20,
  },
  horizontalCenter: {
    margin: "auto",
  },
  activator: {
    borderTop: "2px solid",
    marginTop: "10px",
    color: primaryColor[0],
  },
  pageContainer: {
    marginTop: theme.spacing(2),
  },
  setupContainer: {
    position: "relative",
    height: "100%",
    paddingBottom: "80px",
  },
  setupButtonContainer: {
    position: "absolute",
    bottom: "0",
  },
})

export default styles
