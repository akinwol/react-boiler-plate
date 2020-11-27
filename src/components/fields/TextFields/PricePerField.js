import React from "react"
import { TextField } from "@material-ui/core"

export default function PricePerServing({ handleChange, values, required = false, error = false }) {
  return (
    <>
      <TextField
        id="pricePerServing"
        type="number"
        required={required}
        margin="dense"
        label="Price"
        fullWidth
        //         onKeyDown="javascript: return event.keyCode === 8 ||
        // event.keyCode === 46 ? true : !isNaN(Number(event.key))"
        onChange={handleChange}
        variant="outlined"
        name="pricePerServing"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.pricePerServing}
        error={error}
        helperText="Price per serving"
      />
    </>
  )
}
