import { useContext, useRef, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import classes from "../styles/pages/login.module.css";
import { Email as EmailIcon, RestaurantMenu } from "@mui/icons-material";
import AuthContext from "../contexts/AuthContext";
import LandingBackdrop from "../components/Landing/Backdrop/LandingBackdrop";
import { useRouter } from "next/router";
import AuthDataParser from "../lib/AuthDataParser";
import Image from "next/image";
import LandingHeader from "../components/Landing/Header/LandingHeader";

export default function Login() {
  const [submitted, setSubmitted] = useState(false);
  const [warning, setWarning] = useState();
  const router = useRouter();
  const auth = useContext(AuthContext);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const forgotPasswordHandler = () => router.push("/forgot-password");
  const registerHandler = () => router.push("/register");

  const validate = () => {
    if (usernameRef.current.value == "" || passwordRef.current.value == "") {
      setWarning("Tolong isi semua data");
      return false;
    }

    return true;
  };

  const loginHandler = async () => {
    if (!validate) return;

    setSubmitted(true);

    const result = await auth.onLogin(
      usernameRef.current.value,
      passwordRef.current.value
    );

    setSubmitted(false);

    if (result.success) router.push("/");
    else setWarning(result.message);
  };

  return (
    <div className={classes.background}>
      {submitted && <LandingBackdrop />}
      <LandingHeader onlyHome={true} />
      <div className={classes.form}>
        <div className={classes.logo}>
          <Image
            src="/assets/images/logo/login-logo.png"
            alt="logo"
            width={250}
            height={200}
          />
        </div>
        <FormTextField
          ref={usernameRef}
          type="email"
          label="Username atau Email"
          initializeValue={""}
          error={false}
        />
        <FormTextField
          ref={passwordRef}
          type="password"
          label="Password"
          initializeValue={""}
          error={false}
          onEnter={loginHandler}
        />
        {warning && <label className="warning">{warning}</label>}
        <div className={"btn col-12 mb-2"} onClick={loginHandler}>
          Masuk
        </div>
        <div className={"row m-0 " + classes["other-options"]}>
          <label onClick={registerHandler}>Daftar</label>
          <div className="col" />
          <label onClick={forgotPasswordHandler}>Lupa Password</label>
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
