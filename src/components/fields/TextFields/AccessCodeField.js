import React from "react"
import { TextField } from "@material-ui/core"

export default function AccessCode({ handleChange, values }) {
  return (
    <>
      <TextField
        id="accessCode"
        margin="dense"
        type="number"
        label="Access Code"
        fullWidth
        onChange={handleChange}
        variant="outlined"
        name="accessCode"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.accessCode}
      />
    </>
  )
}
