import FormTextField from "../../UI/FormTextField";
import FormTextFieldDouble from "../../UI/FormTextFieldDouble";
import DropdownMenuField from "../../UI/DropdownMenuField";
import RadioGroupField from "../../UI/RadioGroupField";
import CircleContainer from "../../UI/CircleContainer";

import {
  BadgeRounded as BadgeRoundedIcon,
  Place as PlaceIcon,
  Call as CallIcon,
  SquareFoot as SquareFootIcon,
  Person as PersonIcon,
  DeleteForever as DeleteForeverIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
} from "@mui/icons-material";
import React, { useContext, useRef, useState, useEffect } from "react";
import EventContext from "../../../contexts/EventContext";
import DropdownMenuFieldDouble from "../../UI/DropdownMenuFieldDouble";

const FormPerserta = ({
  indexPeserta,
  dataPeserta,
  onEditingComplete,
  onDeletePeserta,
  errorForm,
}) => {
  const [_s, __s] = useState(0);
  const _f = () => __s(_s + 1);

  const [selectedCategoryCode, setSelectedCategoryCode] = useState();

  const eventData = useContext(EventContext).eventData;

  const refs = {
    namaKTP: useRef(),
    kota: useRef(),
    noTelepon: useRef(),
    jerseySizeCode: useRef(),
    genderCode: useRef(),
    brrCode: useRef(),
  };

  // const emailRef = useRef();
  // const namaKTPRef = useRef();
  // const kotaRef = useRef();
  // const noTeleponRef = useRef();
  // const jerseySizeRef = useRef();
  // const genderRef = useRef();
  // // const categoryRef = useRef();
  // // const brrRef = useRef();
  // const brrCategoryRef = useRef();

  const categories = eventData.brrCategory?.map((d) => {
    return { id: d.idBrrCategory, value: d.nmCategory, brr: d.brr };
  });

  const listBRR = eventData.brrCategory
    ?.find((b) => b.idBrrCategory == selectedCategoryCode)
    ?.brr?.map((b) => {
      return {
        id: b.idBrr,
        value: b.nmBrr,
      };
    });

  // const formBlurHandler = () =>
  //   onEditingComplete({
  //     email: emailRef.current.value,
  //     namaKTP: namaKTPRef.current.value,
  //     kota: kotaRef.current.value,
  //     noTelepon: noTeleponRef.current.value1,
  //     noTeleponDarurat: noTeleponRef.current.value2,
  //     jerseySizeCode: jerseySizeRef.current.value,
  //     genderCode: genderRef.current.value,
  //     categoryCode: brrCategoryRef.current.value1,
  //     brrCode: brrCategoryRef.current.value2,
  //   });

  const formBlurHandler = () =>
    onEditingComplete({
      namaKTP: refs.namaKTP.current.value,
      kota: refs.kota.current.value,
      noTelepon: refs.noTelepon.current.value1,
      noTeleponDarurat: refs.noTelepon.current.value2,
      jerseySizeCode: refs.jerseySizeCode.current.value,
      genderCode: refs.genderCode.current.value,
      categoryCode: refs.brrCode.current.value1,
      brrCode: refs.brrCode.current.value2,
    });

  const categoryChangeHandler = (value) => setSelectedCategoryCode(value);

  useEffect(() => {
    if (dataPeserta.categoryCode)
      setSelectedCategoryCode(dataPeserta.categoryCode);

    if (errorForm) {
      // _f();

      switch (errorForm.invalidFieldName) {
        case "noTelepon":
          refs["noTelepon"].current.focus1();
          break;

        case "noTeleponDarurat":
          refs["noTelepon"].current.focus2();
          break;

        case "categoryCode":
          refs["brrCode"].current.focus1();
          break;

        case "brrCode":
          refs["brrCode"].current.focus2();
          break;

        default:
          refs[errorForm.invalidFieldName].current.focus();
          break;
      }
    }
  }, [refs, errorForm, dataPeserta.categoryCode]);

  return (
    <div
      className="form-control mb-5"
      style={{ position: "relative", padding: "40px" }}
      onBlur={formBlurHandler}
    >
      <div className="row align-items-center mb-3">
        <label
          className="m-0 mr-2"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "darkslategrey",
            marginRight: "0.5rem",
          }}
        >
          Peserta {indexPeserta + 1}
        </label>
        {indexPeserta == 0 ? null : (
          <div
            style={{
              backgroundColor: "red",
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "5px",
            }}
            onClick={onDeletePeserta}
          >
            <div
              style={{
                width: "1rem",
                height: "5px",
                background: "white",
                margin: "auto",
                borderRadius: "1px",
                marginTop: "0.6rem",
              }}
            />
          </div>
        )}
      </div>      
      <FormTextField
        // ref={namaKTPRef}
        ref={refs.namaKTP}
        label="Nama Sesuai KTP"
        icon={BadgeRoundedIcon}
        initializeValue={dataPeserta.namaKTP}
        error={errorForm.invalidFieldName == "namaKTP"}
      />
      <FormTextField
        // ref={kotaRef}
        ref={refs.kota}
        label="Asal Kota"
        icon={PlaceIcon}
        initializeValue={dataPeserta.kota}
        error={errorForm.invalidFieldName == "kota"}
      />
      <FormTextFieldDouble
        // ref={noTeleponRef}
        ref={refs.noTelepon}
        icon={CallIcon}
        label1="No Whatsapp"
        label2="No Telepon Darurat"
        initializeValue1={dataPeserta.noTelepon}
        initializeValue2={dataPeserta.noTeleponDarurat}
        error1={errorForm.invalidFieldName == "noTelepon"}
        error2={errorForm.invalidFieldName == "noTeleponDarurat"}
        type1={"tel"}
        type2={"tel"}
      />
      <DropdownMenuField
        // ref={jerseySizeRef}
        ref={refs.jerseySizeCode}
        data={eventData.jerseySize}
        icon={SquareFootIcon}
        label="Size Jersey"
        initializeValue={dataPeserta.jerseySizeCode}
        error={errorForm.invalidFieldName == "jerseySizeCode"}
      />
      <RadioGroupField
        // ref={genderRef}
        ref={refs.genderCode}
        data={eventData.gender ?? []}
        icon={PersonIcon}
        label="Kelamin"
        initializeValue={dataPeserta.genderCode ?? eventData.gender?.at(0)?.id}
        error={errorForm.invalidFieldName == "genderCode"}
      />
      {/* <DropdownMenuField
        ref={categoryRef}
        data={categories}
        icon={ConfirmationNumberIcon}
        label="Category"
        onChange={categoryChangeHandler}
      />
      <DropdownMenuField
        ref={brrRef}
        data={listBRR}
        icon={SquareFootIcon}
        label="BRR"
        onChange={_f}
      /> */}
      <DropdownMenuFieldDouble
        // ref={brrCategoryRef}
        ref={refs.brrCode}
        icon={ConfirmationNumberIcon}
        data1={categories}
        data2={listBRR}
        label1="Category"
        label2="BRR"
        onChange1={categoryChangeHandler}
        onChange2={_f}
        initializeValue1={dataPeserta.categoryCode}
        initializeValue2={dataPeserta.brrCode}
        error1={errorForm.invalidFieldName == "categoryCode"}
        error2={errorForm.invalidFieldName == "brrCode"}
      />

      {/* {indexPeserta == 0 ? null : (
        <div
          style={{
            position: "absolute",
            right: "0.5rem",
            bottom: "-1.4rem",
          }}
          onClick={onDeletePeserta}
        >
          <DeleteForeverIcon
            style={{
              color: "red",
              fontSize: "35px",
            }}
          />
        </div>
      )} */}
    </div>
  );
};

export default FormPerserta;
