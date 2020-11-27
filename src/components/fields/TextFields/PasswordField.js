import React from "react"
import { TextField } from "@material-ui/core"

export default function PasswordField({ handleChange, values, required = false, error = false }) {
  return (
    <>
      <TextField
        id="password"
        type="password"
        required={required}
        margin="dense"
        label="Password"
        fullWidth
        onChange={handleChange}
        variant="outlined"
        name="password"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.password}
        error={error}
        helperText={error && "Please provide a password"}
      />
    </>
  )
}
