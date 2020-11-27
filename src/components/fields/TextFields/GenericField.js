import React from "react"
import { TextField } from "@material-ui/core"

export default function GenericField({
  handleChange,
  value,
  required = false,
  error = false,
  helperText,
  fieldName,
  fieldLabel,
  fieldId,
  fieldType,
  disabled = false,
  placeholder = "",
  displayHelperText = false,
  multiline = false,
  rows = 1,
}) {
  return (
    <>
      <TextField
        id={fieldId}
        type={fieldType} // password, number
        required={required}
        margin="dense"
        label={fieldLabel}
        fullWidth
        onChange={handleChange}
        variant="outlined"
        placeholder={placeholder}
        name={fieldName}
        InputLabelProps={{
          shrink: true,
        }}
        value={value}
        error={error}
        helperText={displayHelperText && helperText}
        disabled={disabled}
        multiline={multiline}
        rows={rows}
      />
    </>
  )
}
