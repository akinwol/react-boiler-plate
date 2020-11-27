import React from "react"
import { TextField, MenuItem } from "@material-ui/core"

export default function GenericField({
  handleChange,
  value,
  required = false,
  error = false,
  helperText,
  fieldName,
  fieldLabel,
  fieldId,
  disabled = false,
  options = [],
}) {
  return (
    <>
      <TextField
        id={fieldId}
        select
        required={required}
        margin="dense"
        label={fieldLabel}
        fullWidth
        onChange={handleChange}
        variant="outlined"
        name={fieldName}
        InputLabelProps={{
          shrink: true,
        }}
        //  style={{ marginLeft: "10px" }}
        value={value}
        error={error}
        helperText={error && helperText}
        disabled={disabled}
      >
        {options.map((o) => (
          <MenuItem key={o.value || o} value={o.value || o}>
            {o.name || o}
          </MenuItem>
        ))}
      </TextField>
    </>
  )
}
