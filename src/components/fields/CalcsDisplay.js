import "date-fns"
import React from "react"
import { Typography, Grid } from "@material-ui/core"
import { formatCurrency } from "../../utils/index"

export default function CalcsDisplay({
  amount,
  currencyCode,
  fieldTitle = "Field Title",
  fontWeight = 500,
}) {
  return (
    <>
      <Grid item xs={6} sm={8} md={9} lg={9}>
        <Typography variant="body1" style={{ fontWeight }}>
          {fieldTitle}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={3} style={{ margin: "auto" }}>
        <Typography variant="body1" style={{ fontWeight }}>
          {formatCurrency(amount, currencyCode)}
        </Typography>
      </Grid>
    </>
  )
}
