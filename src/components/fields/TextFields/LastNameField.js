import React from "react"
import { TextField } from "@material-ui/core"

export default function LastNameField({ handleChange, values, required = false, error = false }) {
  return (
    <>
      <TextField
        id="lastName"
        required={required}
        margin="dense"
        label="Last Name"
        fullWidth
        onChange={handleChange}
        variant="outlined"
        name="lastName"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.lastName}
        error={error}
        helperText={error && "Please enter a valid name"}
      />
    </>
  )
}
