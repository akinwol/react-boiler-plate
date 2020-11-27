import React, { useContext } from "react"
import classNames from "classnames"
// import PropTypes from "prop-types"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"
import { SetupContext } from "../../providers"
import styles from "../assets/jss/material-dashboard-react/components/headerStyle"
import { LinearProgress } from "../progressTrackers"
import logo from "../assets/img/yipah_logo.png"

const useStyles = makeStyles(styles)

export default function Header(props) {
  const classes = useStyles()
  const [state] = useContext(SetupContext)
  const { color } = props
  const appBarClasses = classNames({
    [` ${classes[color]}`]: color,
  })

  return (
    <AppBar className={classes.appBar + appBarClasses} position="fixed">
      <Toolbar className={classes.container}>
        {/* <div className={classes.flex} /> */}
        <div className={classes.logo}>
          <a className={classNames(classes.logoLink)} href="/">
            <div className={classes.logoImage}>
              <img src={logo} alt="logo" className={classes.img} />
            </div>
          </a>
        </div>
        {state.navTitleLoad ? (
          <Skeleton variant="text" width="100px" />
        ) : (
          <Typography variant="h6">{state.headerTitleName} </Typography>
        )}

        {state.displaySaveButton ? (
          <Button
            color="secondary"
            size="small"
            style={{ position: "absolute", right: "4px", bottom: "10px" }}
            onClick={state.handleClickSave}
          >
            Save &amp; Close
          </Button>
        ) : (
          ""
        )}
      </Toolbar>
      <div style={{ marginTop: "15px" }}>
        <LinearProgress variant="determinate" value={state.progressValue} />
      </div>
    </AppBar>
  )
}

// Header.propTypes = {
//   color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
//   rtlActive: PropTypes.bool,
//   handleDrawerToggle: PropTypes.func,
//   routes: PropTypes.arrayOf(PropTypes.object),
// }
