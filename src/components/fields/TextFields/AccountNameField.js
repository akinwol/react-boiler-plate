import React from "react"
import { TextField } from "@material-ui/core"

export default function AccountNameField({
  handleChange,
  values,
  label = "Account Name",
  error = false,
}) {
  return (
    <>
      <TextField
        id="accountName"
        margin="dense"
        label={label}
        fullWidth
        onChange={handleChange}
        variant="outlined"
        name="accountName"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.accountName}
        error={error}
        helperText={error && "Please enter a valid name"}
      />
    </>
  )
}
