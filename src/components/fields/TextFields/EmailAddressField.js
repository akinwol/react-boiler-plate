import React from "react"
import { TextField } from "@material-ui/core"

export default function AccountNameField({
  handleChange,
  values,
  required = false,
  error = false,
}) {
  return (
    <>
      <TextField
        id="emailAddress"
        required={required}
        margin="dense"
        type="email"
        label="Email Address"
        fullWidth
        onChange={handleChange}
        variant="outlined"
        name="emailAddress"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.emailAddress}
        error={error}
        helperText={error && "Please enter a valid Email Address"}
      />
    </>
  )
}
