import React from "react"
// import PropTypes from "prop-types"
import {
  CssBaseline,
  //   Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Icon,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { NavLink } from "react-router-dom"
import classNames from "classnames"
import routes from "../../routes/MerchantRoutes"
import styles from "../assets/jss/material-dashboard-react/components/sidebarStyle"

const useStyles = makeStyles(styles)
function MerchantSideBar(props) {
  const { logo, open, handleDrawerToggle, rtlActive } = props
  const classes = useStyles()
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1
  }

  const links = (
    <List className={classes.list}>
      {routes.map((prop) => {
        const activePro = " "

        // let  listItemClasses = classNames({
        //     [" " + classes.whiteColor]: activeRoute(prop.layout + prop.path),
        //   });
        const activeClasses = classNames({
          [` ${classes.activeColor}`]: activeRoute(prop.layout + prop.path),
        })

        const activeBorder = classNames({
          [` ${classes.activeBorder}`]: activeRoute(prop.layout + prop.path),
        })
        return prop.hiddenFromMenu ? null : (
          <NavLink
            to={prop.layout + prop.path}
            key={prop.name}
            className={activePro + classes.item + activeBorder}
            activeClassName="active"
            // onClick={handleDrawerToggle}
          >
            <ListItem button className={classes.itemLink + activeClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, activeClasses, {
                    [classes.itemIconRTL]: props.rtlActive,
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, activeClasses, {
                    [classes.itemIconRTL]: props.rtlActive,
                  })}
                />
              )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, activeClasses)}
                disableTypography
              />
            </ListItem>
          </NavLink>
        )
      })}
    </List>
  )
  const brand = (
    <div className={classes.logo}>
      <a className={classNames(classes.logoLink)} href="/">
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {/* {logoText} */}
      </a>
    </div>
  )
  return (
    <div>
      <CssBaseline />
      {/* mdup */}
      <Hidden lgUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: rtlActive,
            }),
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
        </Drawer>
      </Hidden>
      {/* smdown */}
      <Hidden mdDown implementation="css">
        <Drawer
          anchor={rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: rtlActive,
            }),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
        </Drawer>
      </Hidden>
    </div>
  )
}

// MerchantSideBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   container: PropTypes.instanceOf(typeof Element === "undefined" ? Object : Element),
// }

export default MerchantSideBar
