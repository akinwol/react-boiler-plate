import "date-fns"
import React from "react"
import { Typography } from "@material-ui/core"

export default function TitleContent({
  fieldName = "",
  fieldContent = "",
  addEllipsis = false,
  variant = "body1",
  fieldContent2 = "",
  component = "div",
}) {
  return (
    <>
      <Typography variant="caption" color="textSecondary">
        {fieldName}
      </Typography>
      {addEllipsis ? (
        <Typography
          variant="body1"
          color="textPrimary"
          style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {fieldContent}
        </Typography>
      ) : (
        <>
          <Typography variant={variant} color="textPrimary" component="div">
            {fieldContent}
          </Typography>
          <Typography variant={variant} color="textPrimary" component={component}>
            {fieldContent2}
          </Typography>
        </>
      )}
    </>
  )
}
