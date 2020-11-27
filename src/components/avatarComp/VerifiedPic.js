import React from "react"
import { CheckCircleRounded } from "@material-ui/icons"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { Badge } from "@material-ui/core"
import Picture from "./Picture"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}))

export default function VerifiedPic(props) {
  const classes = useStyles()
  const { verification, size } = props
  const handleSize = (s) => {
    if (s === "xsmall") {
      return "15px"
    }
    if (s === "small") {
      return "20px"
    }
    return "25px"
  }
  const iconSize = handleSize(size)

  const VerifiedIcon = withStyles((theme) => ({
    root: {
      width: iconSize,
      height: iconSize,
      border: `1px solid ${theme.palette.background.paper}`,
      borderRadius: iconSize,
      borderColor: "rgba(40, 140, 255, 1)",
      color: "rgba(40, 140, 255, 1)",
      backgroundColor: "#fff",
    },
  }))(CheckCircleRounded)
  return (
    <>
      {verification && verification.isVerified ? (
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          classes={{
            anchorOriginBottomRightCircle: classes.anchorOriginBottomRightCircle,
          }}
          badgeContent={<VerifiedIcon color="secondary" />}
        >
          <Picture props={props} />
        </Badge>
      ) : (
        <Picture props={props} />
      )}
    </>
  )
}
