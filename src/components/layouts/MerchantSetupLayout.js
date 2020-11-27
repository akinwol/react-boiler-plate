/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Paper, Hidden } from "@material-ui/core"
import { SetupProvider } from "../../providers"
import { HelperBoxSetup } from "../misc"
import routes from "../../routes/MerchantSetupRoutes"
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle"
import Navbar from "../navbars/SetupNavBar"
import withRoot from "../withRoot/WithRoot.tsx"

// const switchRoutes = (
//   <Switch>
//     {routes.map((prop, key) => {
//       return <Route path={prop.layout + prop.path} component={prop.component} key={prop.name} />
//     })}
//     {/* <Redirect from="/merchant" to="/merchant/dashboard" /> */}
//   </Switch>
// )
// const switchRoutes = (rest) => {
//   return (
//     <Router>
//       <Switch>
//         {routes.map((prop, key) => {
//           return (
//             <Route
//               path={prop.layout + prop.path}
//               key={prop.name}
//               // component={prop.component}
//               render={(props) => <prop.component {...props} />}
//             />
//           )
//         })}
//         {/* <Redirect from="/merchant" to="/merchant/dashboard" /> */}
//       </Switch>
//     </Router>
//   )
// }
const useStyles = makeStyles(styles)

function MerchantLayout({ ...rest }) {
  const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        return (
          <Route
            path={prop.layout + prop.path}
            key={prop.name}
            // component={prop.component}
            render={(props) => <prop.component {...props} />}
          />
        )
      })}
      {/* <Redirect from="/merchant" to="/merchant/dashboard" /> */}
    </Switch>
  )
  const [mobileOpen, setMobileOpen] = useState(false)
  // const [state, dispatch] = useContext(MainAppContext)
  const classes = useStyles()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const mainPanel = React.createRef()
  return (
    <div>
      <SetupProvider>
        <div className={classes.mainPanelNoSideBar} ref={mainPanel}>
          <Navbar handleDrawerToggle={handleDrawerToggle} {...rest} />
          {/* className={classes.contentSetup} */}
          <Grid container className={classes.setupContent}>
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              elevation={0}
              // square
              component={Paper}
              className={classes.setupInnerGrid}
            >
              {switchRoutes}
            </Grid>
            <Hidden xsDown>
              <Grid
                item
                xs={false}
                sm={4}
                md={6}
                elevation={0}
                // square
                className={classes.setupInnerGrid}
              >
                <HelperBoxSetup />
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </SetupProvider>
    </div>
  )
}

export default withRoot(MerchantLayout)
