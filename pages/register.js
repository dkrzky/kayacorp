import { useContext, useRef, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import { Email as EmailIcon } from "@mui/icons-material";
import AuthContext from "../contexts/AuthContext";
import LandingBackdrop from "../components/Landing/Backdrop/LandingBackdrop";
import { useRouter } from "next/router";
import AuthDataParser from "../lib/AuthDataParser";
import classes from "../styles/pages/register.module.css";
import useFormat from "../hooks/useFormat";
import LandingHeader from "../components/Landing/Header/LandingHeader";

export default function Register() {
  const [warning, setWarning] = useState();
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const useridRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const fullNameRef = useRef();
  const auth = useContext(AuthContext);
  const format = useFormat();

  const alreadyHaveAnAccountHandler = () => router.push("/login");

  const validate = () => {
    if (
      useridRef.current.value == "" ||
      passwordRef.current.value == "" ||
      emailRef.current.value == "" ||
      fullNameRef.current.value == ""
    ) {
      setWarning("Tolong isi semua data");
      return false;
    }

    if (!format.isEmail(emailRef.current.value)) {
      setWarning("Email tidak valid");
      return false;
    }

    return true;
  };

  const registerHandler = async () => {
    if (!validate()) return;

    setSubmitted(true);

    const { success, message } = await auth.onRegister({
      userid: useridRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      fullname: fullNameRef.current.value,
    });

    if (!success) {
      setSubmitted(false);
      setWarning(message);
      return;
    }

    router.push("/");
  };

  return (
    <div className={classes.background}>
      {submitted && <LandingBackdrop />}
      <LandingHeader onlyHome={true} />
      <div className={classes.form}>
        <label className={classes["form-title"]}>Daftar</label>
        <FormTextField
          ref={useridRef}
          type="text"
          label="User ID"
          initializeValue={""}
          error={false}
        />
        <FormTextField
          ref={passwordRef}
          type="password"
          label="Password"
          initializeValue={""}
          error={false}
        />
        <FormTextField
          ref={emailRef}
          type="email"
          label="Email"
          initializeValue={""}
          error={false}
        />
        <FormTextField
          ref={fullNameRef}
          type="text"
          label="Full Name"
          initializeValue={""}
          error={false}
        />
        {warning && <label className="warning">{warning}</label>}
        <div className={"btn col"} onClick={registerHandler}>
          Daftar
        </div>
        <div className={"row m-0 " + classes["other-options"]}>
          <label onClick={alreadyHaveAnAccountHandler}>Sudah Punya Akun?</label>
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
