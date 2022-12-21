import { useContext, useRef, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import { Email as EmailIcon } from "@mui/icons-material";
import AuthContext from "../contexts/AuthContext";
import LandingBackdrop from "../components/Landing/Backdrop/LandingBackdrop";
import { useRouter } from "next/router";
import AuthDataParser from "../lib/AuthDataParser";
import classes from "../styles/pages/forgot-password.module.css";
import useFormat from "../hooks/useFormat";
import { Dialog } from "@mui/material";
import DialogMessage from "../components/UI/DialogMessage";
import LandingHeader from "../components/Landing/Header/LandingHeader";

export default function ForgotPassword() {
  const [warning, setWarning] = useState();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const auth = useContext(AuthContext);
  const router = useRouter();
  const emailRef = useRef();
  const format = useFormat();

  const goBackToLoginHandler = () => router.push("/login");

  const validate = () => {
    if(emailRef.current.value == "") {
      setWarning("Tolong isi email");
      return false;
    }

    if (!format.isEmail(emailRef.current.value)) {
      setWarning("Email tidak valid");
      return false;
    }

    return true;
  };

  const sendEmailHandler = async () => {
    if (!validate()) return false;

    setSubmitted(true);

    const result = await auth.onForgotPassword(emailRef.current.value);

    setSubmitted(false);

    if (!result.success) return setWarning(result.message);

    setOpen(true);
    setTimeout(() => setOpen(false), 1250);
  };

  return (
    <div className={classes.background}>
      <DialogMessage open={open} message={"Email berhasil dikirim"} />
      {submitted && <LandingBackdrop />}
      <LandingHeader onlyHome={true} />
      <div className={classes.form}>
        <label className={classes["form-title"]}>Lupa Password</label>
        <FormTextField
          ref={emailRef}
          type="email"
          label="Email"
          initializeValue={""}
          error={false}
        />
        {warning && <label className="warning">{warning}</label>}
        <div className={"btn col"} onClick={sendEmailHandler}>
          Send Email
        </div>
        <div className={"row m-0 " + classes["other-options"]}>
          <label onClick={goBackToLoginHandler}>Kembali ke Login</label>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const authData = AuthDataParser(req);

  if (authData)
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props: {},
    };

  return {
    props: {},
  };
}
