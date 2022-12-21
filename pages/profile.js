import classes from "../styles/pages/profile.module.css";
import { Email as EmailIcon } from "@mui/icons-material";
import { useContext, useEffect, useRef, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import AuthContext from "../contexts/AuthContext";
import AuthDataParser from "../lib/AuthDataParser";
import LandingBackdrop from "../components/Landing/Backdrop/LandingBackdrop";
// import LabelTextForm from "../components/UI/LabelTextForm";
import LandingHeader from "../components/Landing/Header/LandingHeader";
import { changePasswordRepo } from "../repositories/UserRepository";
import useScreenInfo from "../hooks/useScreenInfo";
import DialogMessage from "../components/UI/DialogMessage";
import FormLabelText from "../components/UI/FormLabelText";

export default function Profile({ authData }) {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const auth = useContext(AuthContext);
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  const [warning, setWarning] = useState();
  const isMobile = useScreenInfo().isMobile;

  const validate = () => {
    if (
      oldPasswordRef.current.value == "" ||
      newPasswordRef.current.value == "" ||
      confirmPasswordRef.current.value == ""
    ) {
      setWarning("Tolong isi semua data");
      return;
    }

    if (newPasswordRef.current.value != confirmPasswordRef.current.value) {
      setWarning("Pastikan password baru sama");
      return;
    }

    return true;
  };

  const changePasswordHandler = async () => {
    if (!validate()) return;

    const result = await changePasswordRepo({
      userid: auth.authData.userid,
      oldpassword: oldPasswordRef.current.value,
      newpassword: confirmPasswordRef.current.value,
    });

    if (!result.isSuccess)
      setWarning(result.message ?? "Terjadi kesalahan server. (coba lagi)");

    oldPasswordRef.current.clear();
    newPasswordRef.current.clear();
    confirmPasswordRef.current.clear();

    setOpen(true);
    setTimeout(() => setOpen(false), 1250);
  };

  useEffect(() => {
    if (authData) auth.onSetAuthData(authData);
  }, [auth, authData]);

  return (
    <div className={classes.background}>
      <DialogMessage open={open} message={"Berhasil Mengubah Password"} />
      {submitted && <LandingBackdrop />}
      <LandingHeader />
      <div className={classes.form}>
        <label className={classes["form-title"]}>Profile</label>
        <FormLabelText
          label="User Id"
          text={authData.userid}
          labelWidth={isMobile ? "30%" : null}
        />
        <FormLabelText
          label="Full Name"
          text={authData.fullname}
          labelWidth={isMobile ? "30%" : null}
        />
        <FormLabelText
          label="Email"
          text={authData.email}
          labelWidth={isMobile ? "30%" : null}
        />
        <div className={classes["change-password-form"]}>
          <label className={classes["change-password-label"]}>
            Ubah Password
          </label>
          <FormTextField
            ref={oldPasswordRef}
            type="password"
            label="Password Lama"
            initializeValue={""}
            error={false}
          />
          <FormTextField
            ref={newPasswordRef}
            type="password"
            label="Password Baru"
            initializeValue={""}
            error={false}
          />
          <FormTextField
            ref={confirmPasswordRef}
            type="password"
            label="Konfirmasi Password Baru"
            initializeValue={""}
            error={false}
          />
          {warning && <label className="waning">{warning}</label>}
          <div className={"btn col m-0 p-0"} onClick={changePasswordHandler}>
            Ubah Password
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const authData = AuthDataParser(req);

  if (!authData)
    return {
      redirect: {
        permanent: true,
        destination: "/login",
      },
      props: {},
    };

  return {
    props: {
      authData,
    },
  };
}
