import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import DaScroll from "../../lib/DaScroll";

// data: [{
//     value: 'p',
//     label: 'Pria'
// }]
const DropdownMenuFieldDouble = React.forwardRef(function _(
  {
    data1,
    data2,
    label1,
    label2,
    onChange1,
    onChange2,
    initializeValue1,
    initializeValue2,
    error1,
    error2,
    icon,
  },
  ref
) {
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");

  const [isError1, setIsError1] = useState(false);
  const [isError2, setIsError2] = useState(false);

  const selectRef1 = useRef();
  const selectRef2 = useRef();

  const onChangeHandler1 = (value) => {
    setSelectedValue1(value);
    if (onChange1) onChange1(value);
  };

  const onChangeHandler2 = (value) => {
    setSelectedValue2(value);
    if (onChange2) onChange2(value);
  };

  useImperativeHandle(ref, () => {
    return {
      value1: selectedValue1,
      value2: selectedValue2,
      focus1: () => {
        // DaScroll(selectRef1?.current?.id);
        selectRef1?.current?.focus();
        setIsError1(true);
      },
      focus2: () => {
        // DaScroll(selectRef2?.current?.id);
        selectRef2?.current?.focus();
        setIsError2(true);
      },
    };
  });

  useEffect(() => {
    setSelectedValue1(initializeValue1);
    setSelectedValue2(initializeValue2);
    setIsError1(error1);
    setIsError2(error2);
  }, [initializeValue1, initializeValue2, error1, error2]);

  // if (!data) return null;

  return (
    <div className="row mb-3 align-items-center">
      <div className="col-1-sm">
        {React.createElement(icon, {
          style: { color: "grey", fontSize: "35px" },
        })}
      </div>
      <div className="col pr-1">
        <FormControl ref={selectRef1} fullWidth error={isError1}>
          <InputLabel id="demo-simple-select-label">{label1}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label={label1}
            value={selectedValue1}
            disabled={data1 == null}
          >
            {data1 &&
              data1.map((d) => (
                <MenuItem
                  key={d.id}
                  value={d.id}
                  onClick={() => onChangeHandler1(d.id)}
                >
                  {d.value}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <div className="col pl-1">
        <FormControl ref={selectRef1} fullWidth error={isError2}>
          <InputLabel id="demo-simple-select-label">{label2}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label={label2}
            value={selectedValue2}
            disabled={data2 == null}
          >
            {data2 &&
              data2.map((d) => (
                <MenuItem
                  key={d.id}
                  value={d.id}
                  onClick={() => onChangeHandler2(d.id)}
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

export default DropdownMenuFieldDouble;
