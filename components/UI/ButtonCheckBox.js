import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { useImperativeHandle, useState } from "react";

// data: [{
//     value: 'p',
//     label: 'Pria'
// }]
const ButtonCheckBox = React.forwardRef(function _(
  { data, initSelectedValue, label },
  ref
) {
  const [selectedValue, setSelectedValue] = useState(initSelectedValue);

  useImperativeHandle(ref, () => {
    return {
      value: selectedValue,
    };
  });

  return (
    <div className="checkbox-groups">
      <FormControl component="fieldset" variant="standard" fullWidth>
        <FormLabel component="legend">{label}</FormLabel>
        <div>
          {data.map((d) => (
            <Button
              key={d.value}
              className="mr-3"
              variant={d.value == selectedValue ? "contained" : "outlined"}
              size="medium"
              onClick={() => setSelectedValue(d.value)}
            >
              {d.label}
            </Button>
          ))}
        </div>
      </FormControl>
    </div>
  );
});

export default ButtonCheckBox;