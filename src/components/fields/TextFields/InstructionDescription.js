import React from "react"
import { TextField } from "@material-ui/core"

export default function InstructionDescription({
  handleChange,
  values,
  required = false,
  error = false,
}) {
  return (
    <>
      <TextField
        id="instructionDescription"
        required={required}
        margin="dense"
        label="Description"
        multiline
        rows={6}
        fullWidth
        onChange={handleChange}
        variant="outlined"
        name="instructionDescription"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.instructionDescription}
        error={error}
        helperText={error && "Please enter a valid description"}
      />
    </>
  )
}
