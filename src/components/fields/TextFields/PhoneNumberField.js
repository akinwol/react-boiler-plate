import React from "react"
import { TextField } from "@material-ui/core"

export default function AccountNameField({ handleChange, values }) {
  return (
    <>
      <TextField
        id="phoneNumber"
        margin="dense"
        type="number"
        label="Phone Number"
        fullWidth
        onChange={handleChange}
        variant="outlined"
        name="phoneNumber"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.phoneNumber}
      />
    </>
  )
}
