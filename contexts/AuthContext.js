import React, { createRef, useEffect, useRef, useState } from "react";
import {
  forgotPasswordRepo,
  registerRepo,
  signInRepo,
} from "../repositories/AuthRepository";
import StorageService from "../services/StorageService";
import jsonwebtoken from "jsonwebtoken";
import CookieService from "../services/CookieService";

const _EMPTY = {
  userid: null,
  password: null,
  fullname: null,
  email: null,
  stsdelete: null,
  lastupdate: null,
};

const _UnknownErrorMessage = "Terjadi kesalahan server. (coba lagi)";

const AuthContext = React.createContext({
  authData: {},
  isSigned: () => {},
  onLogin: async (username, password) => {},
  onLogout: () => {},
  onRegister: async (payload) => {},
  onForgotPassword: async (email) => {},
  onSetAuthData: (authData) => {},
});

const AuthContextProvider = (props) => {
  const [authData, setAuthData] = useState(props.authData ?? _EMPTY);

  useEffect(() => {
    // const authData = StorageService.authData();
    // if (authData?.userid) _setAuthData(authData);
  }, []);

  const isSigned = () => authData?.userid != null;

  const loginHandler = async (username, password) => {
    const data = await signInRepo({
      username,
      password,
    });

    if (data == null || !data.isSuccess)
      return {
        success: false,
        message: data.data ?? _UnknownErrorMessage,
      };

    setAuthData(data.data);

    const token = jsonwebtoken.sign(data.data, "banteng");
    CookieService.setToken(token);

    return {
      success: true,
    };
  };

  const registerHandler = async (formData) => {
    const data = await registerRepo({
      userid: formData.userid,
      password: formData.password,
      email: formData.email,
      fullname: formData.fullname,
    });

    if (data == null || !data.isSuccess)
      return {
        success: false,
        message: data.message ?? _UnknownErrorMessage,
      };

    const loginResult = await loginHandler(formData.userid, formData.password);
    if (!loginResult.success) {
      return {
        success: false,
        message: loginResult.message ?? _UnknownErrorMessage,
      };
    }

    return {
      success: true,
    };
  };

  const forgotPasswordHandler = async (email) => {
    const data = await forgotPasswordRepo(email);

    if (data == null || !data.isSuccess)
      return {
        success: false,
        message: data.message ?? _UnknownErrorMessage,
      };

    return { success: true };
  };

  const logoutHandler = () => {
    CookieService.clearToken();
    setAuthData(_EMPTY);
  };

  const setAuthDataHandler = (authData) => setAuthData(authData);

  return (
    <AuthContext.Provider
      value={{
        authData: authData,
        isSigned: isSigned,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        onRegister: registerHandler,
        onForgotPassword: forgotPasswordHandler,
        onSetAuthData: setAuthDataHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
