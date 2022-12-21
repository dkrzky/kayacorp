import { useContext, useEffect, useState } from "react";
import EventContext from "../../../contexts/EventContext";
import useScreenInfo from "../../../hooks/useScreenInfo";

export default function LandingBanner() {
  const [imgSrc, setImgSrc] = useState("");
  const eventCtx = useContext(EventContext);
  const isMobile = useScreenInfo().isMobile;

  useEffect(() => {
    const img = require(`/events/${eventCtx.eventID}/background/${
      isMobile ? "mobile_main_background" : "main_background"
    }.jpg`);

    setImgSrc(img.default.src);
  }, [eventCtx.eventID, isMobile]);

  return (
    <section className="hero-area">
      <div
        // className="banner-item"
        className="main-background"
        style={{
          backgroundImage: `url("${imgSrc}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          backgroundPosition: "center -25px",
        }}
      >
        <div className="buy-ticket">
          <div
            href="#ticket-form"
            style={{
              backgroundImage: 'url("/assets/images/splash.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center center",
            }}
          >
            <a href="#ticket-form">
              <label
                style={{
                  fontSize: "2rem",
                  height: "6rem",
                  lineHeight: "6.5rem",
                  color: "ghostwhite",
                  cursor: "pointer",
                }}
              >
                Buy Ticket
              </label>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="tiles"></div> */}
    </section>
  );
}
