// import { successColor, dangerColor } from "../jss/material-dashboard-react";
import iconStyles from "./iconStyles"

const cardStyles = (theme) => ({
  ...iconStyles,
  root: {
    display: "flex",
    height: "100%",
  },
  roundedBorder: {
    borderRadius: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  recipeStepImage: {
    width: "100%",
    height: "200px",
  },
  mealItemListImage: {
    width: "100%",
    height: "100%",
    // height: "250px",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  fitContent: {
    width: "fit-content",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    "& svg": {
      margin: theme.spacing(1.5),
    },
    "& hr": {
      margin: theme.spacing(0, 0.5),
    },
  },
})

export default cardStyles
