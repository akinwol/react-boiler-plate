import React from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import WithRoot from "../withRoot/WithRoot.tsx"
import styles from "../assets/globalStyles/styles.ts"
import Loading from "./Loading"

const useStyles = makeStyles(styles)

const BackdropLoading = () => {
  const classes = useStyles()

  return (
    <div className={classes.loaderBg}>
      <Loading />
    </div>
  )
}

export default WithRoot(withStyles(styles)(BackdropLoading))
