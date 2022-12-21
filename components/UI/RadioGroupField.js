import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import DaScroll from "../../lib/DaScroll";

// data: [{
//     value: 'p',
//     label: 'Pria'
// }]
const RadioGroupField = React.forwardRef(function _(
  { data, icon, label, initializeValue, error },
  ref
) {
  const [selectedValue, setSelectedValue] = useState(0);
  const [isError, setIsError] = useState(false);

  const radioRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      value: selectedValue,
      focus: () => {
        // DaScroll(radioRef?.current?.id);
        radioRef?.current?.focus();
        setIsError1(true);
      },
    };
  });

  useEffect(() => {
    setSelectedValue(initializeValue);
    setIsError(error);
  }, [initializeValue, error]);

  return (
    <div className="row">
      <div className="col-1-sm align-items-center">
        {React.createElement(icon, {
          style: { color: "grey", fontSize: "35px" },
        })}
      </div>
      <div className="col">
        <FormControl ref={radioRef} error={isError}>
          <FormLabel id="demo-radio-buttons-group-label" className="m-0">
            {label}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            row
          >
            {data.map((d) => (
              <FormControlLabel
                key={d.id}
                value={d.id}
                label={d.value}
                onClick={() => setSelectedValue(d.id)}
                control={<Radio />}
                checked={selectedValue == d.id}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
});

export default RadioGroupField;
