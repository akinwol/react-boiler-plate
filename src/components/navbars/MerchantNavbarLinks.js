import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { MenuItem, MenuList, Paper, Divider, Popover, Button } from "@material-ui/core"
import { ArrowDropDown as DropDownIcon } from "@material-ui/icons"
import { Auth } from "aws-amplify"

// import { auth, yipahURL } from "../../../utils";

import styles from "../assets/jss/material-dashboard-react/components/headerLinksStyle"
import Picture from "../avatarComp/Picture"

const useStyles = makeStyles(styles)

const AdminNavbarLinks = (props) => {
  const classes = useStyles()
  const { topBar, history } = props
  const [openProfile, setOpenProfile] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClickProfile = (event) => {
    setOpenProfile(!openProfile)
    setAnchorEl(event.currentTarget)
  }

  const handleLogOut = async () => {
    try {
      await Auth.signOut({ global: true })
    } catch (error) {
      // console.log("Error signing out: ", error)
    }
  }
  return (
    <div>
      <div className={classes.manager} style={{ position: "relative" }}>
        <Button
          // color={window.innerWidth > 959 ? "transparent" : "white"}
          // justIcon={window.innerWidth > 959}
          // simple={!(window.innerWidth > 959)}
          // aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
          // style={{ position: "relative", paddingRight: "20px" }}
        >
          <Picture size="small" picture={topBar && topBar.picture} />
          <DropDownIcon
            className={classes.icons}
            style={{
              position: "absolute",
              bottom: "8px",
              left: "60px",
              margin: "0px",
              fontSize: "18px",
            }}
          />
        </Button>
        <Popover
          // id={id}
          open={openProfile}
          anchorEl={anchorEl}
          onClose={handleClickProfile}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Paper>
            <MenuList role="menu">
              <MenuItem
                onClick={() => {
                  history.push("/merchant/user-profile")
                  setOpenProfile(false)
                }}
                className={classes.dropdownItem}
              >
                My Profile &amp; Settings
              </MenuItem>
              {/* <MenuItem
                onClick={() => {
                  history.push("/merchant/user-settings")
                  setOpenProfile(false)
                }}
                className={classes.dropdownItem}
              >
                Settings
              </MenuItem> */}
              <Divider light />
              <MenuItem onClick={handleLogOut} className={classes.dropdownItem}>
                Logout
              </MenuItem>
            </MenuList>
          </Paper>
        </Popover>
      </div>
    </div>
  )
}

export default AdminNavbarLinks
