import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroups from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import "../index.css";

const RadioGroup = (props) => {
  const { value, handleChange, options = [], label } = props;
  return (
    <div>
      <FormControl component="fieldset" >
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroups aria-label="gender" name="gender1" value={value} onChange={handleChange}>

          {options.map((option) => {
            return (<div >
              <FormControlLabel value={option.label} control={<Radio />} label={option.label} />
            </div>)
          })}
        </RadioGroups>
      </FormControl>
    </div>
  );
};

export default RadioGroup;
{/* <FormControlLabel
value="disabled"
disabled
control={<Radio />}
label="(Disabled option)"
/> */}