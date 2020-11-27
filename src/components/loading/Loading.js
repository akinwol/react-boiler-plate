import React from "react"
import { CircularProgress, Typography, Backdrop } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}))

const Loading = ({ text = "" }) => {
  const classes = useStyles()
  return (
    <div>
      <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
        <div>
          <Typography variant="h6" style={{ color: "#fff" }}>
            {text || ""}
          </Typography>
        </div>
      </Backdrop>
    </div>
  )
}
export default Loading
