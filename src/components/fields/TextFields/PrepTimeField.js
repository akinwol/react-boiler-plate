import React from "react"
import { TextField, Typography, MenuItem, Grid } from "@material-ui/core"
import { hhOptions, mmOptions } from "../../../utils"
import withRoot from "../../withRoot/WithRoot.tsx"

function PrepTimeField({ handleChange, values }) {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            style={{ display: "inline-flex", lineHeight: "3.5", marginRight: "10px" }}
          >
            Prep Time:
          </Typography>
          <TextField
            select
            id="prepTimeHh"
            placeholder="HH"
            label="HH"
            // className={classes.textField}
            value={values.prepTimeHh}
            onChange={handleChange}
            name="prepTimeHh"
            margin="dense"
            // fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment position="start">
            //       <AccountBalance color="primary" />
            //     </InputAdornment>
            //   ),
            // }}
          >
            <MenuItem value="">
              <em>none</em>
            </MenuItem>
            {hhOptions.map((hh) => (
              <MenuItem key={hh} value={hh}>
                {hh}
              </MenuItem>
            ))}
          </TextField>
          <Typography
            variant="body2"
            style={{ display: "inline-flex", lineHeight: "3.5", marginLeft: "10px" }}
          >
            :
          </Typography>
          <TextField
            select
            id="prepTimeMm"
            placeholder="MM"
            label="MM"
            // className={classes.textField}
            value={values.prepTimeMm}
            onChange={handleChange}
            name="prepTimeMm"
            margin="dense"
            // fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginLeft: "10px" }}
          >
            {mmOptions.map((mm) => (
              <MenuItem key={mm} value={mm}>
                {mm}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </>
  )
}

export default withRoot(PrepTimeField)
