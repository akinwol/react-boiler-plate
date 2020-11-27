import React from "react"
import { TextField } from "@material-ui/core"

export default function RecipeNameField({ handleChange, values, required = false, error = false }) {
  return (
    <>
      <TextField
        id="title"
        required={required}
        margin="dense"
        label="Meal Kit Name"
        fullWidth
        onChange={handleChange}
        variant="outlined"
        name="title"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.title}
        error={error}
        helperText={error && "Please enter a valid name"}
      />
    </>
  )
}
