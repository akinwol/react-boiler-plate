import React from "react"
import { TextField } from "@material-ui/core"

export default function RecipeNameField({ handleChange, values, required = false, error = false }) {
  return (
    <>
      <TextField
        id="servingsPerKit"
        type="number"
        required={required}
        margin="dense"
        label="Servings"
        fullWidth
        //         onKeyDown="javascript: return event.keyCode === 8 ||
        // event.keyCode === 46 ? true : !isNaN(Number(event.key))"
        onChange={handleChange}
        variant="outlined"
        name="servingsPerKit"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.servingsPerKit}
        error={error}
        helperText="Serving amount per kit order"
      />
    </>
  )
}
