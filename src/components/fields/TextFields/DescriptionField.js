import React from "react"
import { TextField } from "@material-ui/core"

export default function DescriptionField({
  handleChange,
  values,
  required = false,
  error = false,
}) {
  return (
    <>
      <TextField
        id="description"
        required={required}
        margin="dense"
        label="Description"
        multiline
        rows={6}
        fullWidth
        onChange={handleChange}
        variant="outlined"
        name="description"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.description}
        error={error}
        helperText={error && "Please enter a valid description"}
      />
    </>
  )
}
