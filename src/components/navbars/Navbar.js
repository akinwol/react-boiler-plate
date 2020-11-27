import React from "react"
import classNames from "classnames"
// import PropTypes from "prop-types"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Hidden from "@material-ui/core/Hidden"
import Menu from "@material-ui/icons/Menu"
import AdminNavbarLinks from "./MerchantNavbarLinks"
import styles from "../assets/jss/material-dashboard-react/components/headerStyle"

const useStyles = makeStyles(styles)

export default function Header(props) {
  const classes = useStyles()
  const { color, handleDrawerToggle, history } = props
  const appBarClasses = classNames({
    [` ${classes[color]}`]: color,
  })

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        {/* <div className={classes.flex}>
        </div> */}
        {/* mdUp */}
        <Hidden lgUp implementation="css">
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
        <div className={classes.flex} />
        <AdminNavbarLinks
          history={history}
          // topBar={props.currentUser}
          // currentAccount={props.currentAccount}
          // handleDrawerToggle={props.handleDrawerToggle}
        />
        {/* <Hidden smDown implementation="css">
          <AdminNavbarLinks
          // topBar={props.currentUser}
          // currentAccount={props.currentAccount}
          // handleDrawerToggle={props.handleDrawerToggle}
          />
        </Hidden> */}
      </Toolbar>
    </AppBar>
  )
}

// Header.propTypes = {
//   color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
//   rtlActive: PropTypes.bool,
//   handleDrawerToggle: PropTypes.func,
//   routes: PropTypes.arrayOf(PropTypes.object),
// }
