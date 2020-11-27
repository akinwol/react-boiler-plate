/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import MerchantSideBar from "../sidebar/MerchantSideBar"
import logo from "../assets/img/yipah_logo.png"
import routes from "../../routes/MerchantRoutes"
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle"
import Navbar from "../navbars/Navbar"
import withRoot from "../withRoot/WithRoot.tsx"

const switchRoutes = (
  <Switch>
    {routes.map((prop) => {
      return <Route path={prop.layout + prop.path} component={prop.component} key={prop.name} />
    })}
    <Redirect from="/merchant" to="/merchant/dashboard" />
  </Switch>
)
// const switchRoutes = (isOnboarded) => {
//   return (
//     <Switch>
//       {isOnboarded ? (
//         <>
//           {routes.map((prop) => {
//             return (
//               <Route path={prop.layout + prop.path} component={prop.component} key={prop.name} />
//             )
//           })}
//           <Redirect from="/merchant" to="/merchant/dashboard" />
//         </>
//       ) : (
//         <Redirect to="/merchant/setup/account" />
//       )}
//     </Switch>
//   )
// }
const useStyles = makeStyles(styles)

function MerchantLayout({ user, ...rest }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  // const [state] = useContext(MainAppContext)
  const classes = useStyles()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const mainPanel = React.createRef()
  // const isOnboarded = user.userAttributes["custom:is_onboarded"] === "true"
  return (
    <div>
      <MerchantSideBar
        logoText=""
        logo={logo}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          // routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          //   currentUser={currentUser}
          //   currentAccount={currentAccount}
          {...rest}
        />
        <div className={classes.content}>
          {/* {switchRoutes(isOnboarded)} */}
          {switchRoutes}
          {/* <div className={classes.container}>{switchRoutes}</div> */}
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default withRoot(MerchantLayout)
