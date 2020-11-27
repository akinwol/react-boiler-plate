import React from "react"
import { TextField } from "@material-ui/core"

export default function FirstNameField({ handleChange, values, required = false, error = false }) {
  return (
    <>
      <TextField
        id="firstName"
        required={required}
        margin="dense"
        label="First Name"
        fullWidth
        onChange={handleChange}
        variant="outlined"
        name="firstName"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.firstName}
        error={error}
        helperText={error && "Please enter a valid name"}
      />
    </>
  )
}
