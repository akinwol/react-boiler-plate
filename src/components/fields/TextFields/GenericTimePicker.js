import React from "react"
import DateFnsUtils from "@date-io/date-fns" // choose your lib
import { MuiPickersUtilsProvider, KeyboardTimePicker } from "@material-ui/pickers"

export default function GenericTimePicker({
  handleTimeChange,
  value,
  // required = false,
  // error = false,
  // helperText,
  fieldName,
  fieldLabel,
  // fieldId,
  // disabled = false,
  // defaultValue = "07:30",
  param1,
}) {
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          value={value}
          onChange={(date) => handleTimeChange(date, fieldName, param1)}
          label={fieldLabel}
          name={fieldName}
          // mask="__:__ _M"
        />
      </MuiPickersUtilsProvider>
      {/* <TextField
        id={fieldId}
        label={fieldLabel}
        type="time"
        // fullWidth
        // onChange={handleChange}
        defaultValue={defaultValue}
        // value={value}
        // required={required}
       
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        // disabled={disabled}
        // error={error}
        // helperText={error && helperText}
      /> */}
    </>
  )
}
