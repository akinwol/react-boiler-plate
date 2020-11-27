import { successColor, dangerColor } from "../jss/material-dashboard-react"

const iconStyles = {
  successIcon: {
    color: successColor[0],
  },
  errorIcon: {
    color: dangerColor[0],
  },
  verticalAlignBottom: {
    verticalAlign: "bottom",
  },
  alignIconAndText: {
    display: "flex",
    alignItems: "center",
  },
  textMarginLeft: {
    marginLeft: "5px",
  },
  verticalAlignSub: {
    verticalAlign: "sub",
  },
  textBesideIcon: {
    display: "inline-flex",
    marginLeft: "5px",
  },
}

export default iconStyles
