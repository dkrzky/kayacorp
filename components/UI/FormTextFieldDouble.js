import { TextField, Container, InputAdornment } from "@mui/material";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import DaScroll from "../../lib/DaScroll";

const FormTextFieldDouble = React.forwardRef(function _(
  {
    icon,
    label1,
    label2,
    type1,
    type2,
    initializeValue1,
    initializeValue2,
    error1,
    error2,
  },
  ref
) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const [isError1, setIsError1] = useState(false);
  const [isError2, setIsError2] = useState(false);

  const textFieldRef1 = useRef();
  const textFieldRef2 = useRef();

  const textFieldChangeHandler1 = (e) => setValue1(e.target.value);
  const textFieldChangeHandler2 = (e) => setValue2(e.target.value);

  const onInputHandler = (e, i) => {
    const value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 12);

    if (i == 1) setIsError1(value);
    else setIsError2(value);
  };
  useImperativeHandle(ref, () => {
    return {
      value1: value1,
      value2: value2,
      focus1: () => {
        // DaScroll(textFieldRef1?.current?.id);
        textFieldRef1?.current?.focus();
        setIsError1(true);
      },
      focus2: () => {
        // DaScroll(textFieldRef2?.current?.id);
        textFieldRef2?.current?.focus();
        setIsError2(true);
      },
    };
  });

  useEffect(() => {
    setValue1(initializeValue1 ?? "");
    setValue2(initializeValue2 ?? "");
    setIsError1(error1);
    setIsError2(error2);
  }, [initializeValue1, initializeValue2, error1, error2]);

  return (
    <div className="row mb-3 align-items-center">
      <div className="col-1-sm">
        {React.createElement(icon, {
          style: { color: "grey", fontSize: "35px" },
        })}
      </div>
      <div className="col pr-1">
        <TextField
          inputRef={textFieldRef1}
          type={type1}
          value={value1}
          id="outlined-basic"
          label={label1}
          variant="outlined"
          fullWidth
          placeholder="8121112223"
          error={isError1}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+62</InputAdornment>
            ),
          }}
          onChange={textFieldChangeHandler1}
          onInput={(e) => onInputHandler(e, 1)}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) event.preventDefault();
          }}
        />
      </div>
      <div className="col pl-1">
        <TextField
          inputRef={textFieldRef2}
          type={type2}
          value={value2}
          id="outlined-basic"
          label={label2}
          variant="outlined"
          fullWidth
          placeholder="8121112223"
          error={isError2}
          InputProps={{
            maxLength: 12,
            startAdornment: (
              <InputAdornment position="start">+62</InputAdornment>
            ),
          }}
          onChange={textFieldChangeHandler2}
          onInput={(e) => onInputHandler(e, 2)}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) event.preventDefault();
          }}
        />
      </div>
    </div>
  );
});

export default FormTextFieldDouble;
