import { useContext } from "react";
import EventContext from "../../../contexts/EventContext";

export default function LandingFooter(props) {
  const eventCtx = useContext(EventContext);

  const img = require(`/events/${eventCtx.eventID}/background/book_ticket_background.jpg`);

  return (
    <div className="footer-area">
      <section
        className="ts-book-seat"
        style={{ backgroundImage: `url(${img.default.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="book-seat-content text-center mb-100">
                <h2 className="section-title white">
                  <span>Hurry up!</span>
                  Book your Ticket
                </h2>
                <a href="#ticket-form" className="btn">
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="ts-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="ts-footer-social text-center mb-30">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/bantengriderun">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/bantengriderun/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="copyright-text text-center">
                <p>
                  <a href="https://www.kayacorp.co.id">
                    Copyright © 2022 kayacorp.co.id . All rights reserved.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <div className="BackTo" style={{ display: "none" }}>
        <a href="#" className="fa fa-angle-up" aria-hidden="true"></a>
      </div> */}
    </div>
  );
}
