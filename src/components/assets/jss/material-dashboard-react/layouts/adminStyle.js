import { drawerWidth, transition, container } from "../../material-dashboard-react"

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0 !important",
    height: "100vh",
  },
  mainPanel: {
    [theme.breakpoints.up("lg")]: {
      // md
      width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
  },
  mainPanelNoSideBar: {
    // [theme.breakpoints.up("lg")]: {
    //   // md
    //   width: `calc(100% - ${drawerWidth}px)`,
    // },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
  },
  content: {
    marginTop: "80px", // 100
    padding: "30px 25px",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 10px",
    },
    minHeight: "calc(100vh - 123px)",
    backgroundColor: "#F5F5F5",
    // borderRadius: '100px 0px 0px 0px',
    paddingTop: "50px",
  },
  setupContent: {
    height: "calc(100vh)",
  },
  setupInnerGrid: {
    padding: "30px",
    marginTop: "90px",
  },
  contentSetup: {
    marginTop: "70px", // 100
    padding: "30px 25px",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 10px",
    },
    minHeight: "calc(100vh - 123px)",
    backgroundColor: "#F5F5F5",
    // borderRadius: '100px 0px 0px 0px',
    paddingTop: "50px",
  },
  container,
  map: {
    marginTop: "70px",
  },
})

export default appStyle
