import React, { createRef, useRef, useState } from "react";
import { signInRepo } from "../repositories/AuthRepository";

const UserContext = React.createContext({});

export const UserContextProvider = (props) => {
  return (
    <UserContext.Provider value={{}}>{props.children}</UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
