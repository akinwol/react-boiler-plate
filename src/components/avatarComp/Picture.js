import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import avatar from "../assets/img/faces/face.png"
// import avatar from "../assets/img/faces/face.png";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
    display: "inline-block",
  },
  xsmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: "50%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    // margin: '0 auto',
  },
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: "50%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    // margin: '0 auto',
  },
  medium: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    borderRadius: "50%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    // boxShadow:
    //   '0px 16px 30px rgba(0, 0, 0, 0.3), 0px 4px 10px rgba(0, 0, 0, 0.3)',
    // margin: "0 auto",
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    borderRadius: "50%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    // margin: "0 auto",
  },
}))

const Picture = ({ size = "medium", picture, firstName }) => {
  // @ts-ignore: Unreachable code error
  const classes = useStyles()

  return (
    <Avatar alt={`${firstName || ""} picture`} src={picture || avatar} className={classes[size]} />
  )
}
export default Picture
