import React, { useContext, useState } from "react";

import {
  HomeRounded as HomeIcon,
  ShoppingBasket as ShoppingBasketIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import Link from "next/link";
import AuthContext from "../../../contexts/AuthContext";
import { useRouter } from "next/router";
import useScreenInfo from "../../../hooks/useScreenInfo";
import { Dialog, Slide } from "@mui/material";
import BottomSheet from "../../UI/BottomSheet";

export default function LandingHeader({ onlyHome }) {
  const [open, setOpen] = useState(false);
  const auth = useContext(AuthContext);
  const router = useRouter();
  const isMobile = useScreenInfo().isMobile;

  const homeHandler = () => router.push("/");

  const transactionHandler = () => router.push("/transaction");

  const profileHandler = () =>
    router.push({
      pathname: "/profile",
    });

  const logoutHandler = () => {
    router.push({
      pathname: "/",
    });
    auth.onLogout();
  };

  const openMenuHandler = () => setOpen(true);

  const closeMenuHandler = () => setOpen(false);

  if (onlyHome)
    return (
      <header className="landing-header">
        <div className="items">
          <HomeIcon className="item home" onClick={homeHandler} />
        </div>
      </header>
    );

  return (
    <header className="landing-header">
      <BottomSheet
        open={auth.isSigned() && isMobile && open}
        onClose={closeMenuHandler}
      >
        <div className="bottom-sheet-menu">
          <div className="bottom-sheet-content">
            <label
              style={{
                marginTop: "20px",
                fontSize: "20px",
                color: "#555",
              }}
              onClick={profileHandler}
            >
              Profile
            </label>
            <div
              style={{
                width: "85%",
                height: "1px",
                backgroundColor: "gray",
              }}
            />
            <label
              style={{
                fontSize: "20px",
                color: "#555",
              }}
              onClick={transactionHandler}
            >
              Transaksi
            </label>
            <div
              style={{
                width: "85%",
                height: "1px",
                backgroundColor: "gray",
              }}
            />
            <label
              style={{
                marginBottom: "20px",
                fontSize: "20px",
                color: "#555",
              }}
              onClick={logoutHandler}
            >
              Logout
            </label>
          </div>
        </div>
      </BottomSheet>
      <div className="items">
        <HomeIcon className="item home" onClick={homeHandler} />
        {/* <label
          onClick={homeHandler}
          style={{
            fontSize: "18px",
            marginRight: "auto",
            color: "white",
            fontWeight: "Bold",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          Home
        </label> */}
        {/* <ShoppingBasketIcon className="item cart" /> */}
        {!auth.isSigned() && (
          <>
            <div style={{ width: "5px" }} />
            <Link href={"/login"}>
              <div className="item">
                <label>Masuk</label>
              </div>
            </Link>
            <div className="divider" />
            <Link href={"/register"}>
              <div className="item">
                <label>Daftar</label>
              </div>
            </Link>
          </>
        )}
        {/* {auth.isSigned() && <div className="divider" />} */}
        {auth.isSigned() && !isMobile && (
          <div className="item profile">
            <AccountCircleIcon className="item profile-icon" />
            <label>{auth.authData.fullname}</label>
            <div className="profile-options">
              <label style={{ marginTop: "10px" }} onClick={profileHandler}>
                Profile
              </label>
              <label onClick={transactionHandler}>Transaksi</label>
              <label style={{ marginBottom: "10px" }} onClick={logoutHandler}>
                Logout
              </label>
            </div>
          </div>
        )}
        {auth.isSigned() && isMobile && (
          <div className="item profile" onClick={openMenuHandler}>
            <AccountCircleIcon className="item profile-icon" />
            <label>{auth.authData.fullname}</label>
          </div>
        )}
      </div>
    </header>
  );
}
