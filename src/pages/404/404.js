import "date-fns"
import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { image404 } from "../../utils"

const styles = (theme) => ({
  image: {
    [theme.breakpoints.up("md")]: {
      width: "700px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
})
const useStyles = makeStyles(styles)

export default function Page404() {
  const classes = useStyles()

  return (
    <>
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "40px" }}>
          <img src={image404} className={classes.img} alt="404" />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "40px" }}>
          <Typography variant="h2" color="textPrimary">
            This page does not exist 
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
