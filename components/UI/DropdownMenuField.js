import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import DaScroll from "../../lib/DaScroll";

// data: [{
//     value: 'p',
//     label: 'Pria'
// }]
const DropdownMenuField = React.forwardRef(function _(
  { data, icon, label, onChange, initializeValue, error },
  ref
) {
  const [selectedValue, setSelectedValue] = useState("");
  const [isError, setIsError] = useState(false);

  const selectRef = useRef();

  const onChangeHandler = (value) => {
    setSelectedValue(value);
    if (onChange) onChange(value);
  };

  useImperativeHandle(ref, () => {
    return {
      value: selectedValue,
      focus: () => {
        // DaScroll(selectRef?.current?.id);
        selectRef?.current?.focus();
        setIsError(true);
      },
    };
  });

  useEffect(() => {
    setSelectedValue(initializeValue);
    setIsError(error);
  }, [initializeValue, error]);

  // if (!data) return null;

  return (
    <div className="row mb-3 align-items-center">
      <div className="col-1-sm">
        {React.createElement(icon, {
          style: { color: "grey", fontSize: "35px" },
        })}
      </div>
      <div className="col">
        <FormControl ref={selectRef} fullWidth error={isError}>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label={label}
            value={selectedValue}
            disabled={data == null}
          >
            {data &&
              data.map((d) => (
                <MenuItem
                  key={d.id}
                  value={d.id}
                  // selected={d.id == selectedValue}
                  onClick={() => onChangeHandler(d.id)}
                >
                  {d.value}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
});

export default DropdownMenuField;
