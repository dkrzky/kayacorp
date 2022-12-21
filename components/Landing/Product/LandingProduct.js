import Image from "next/image";
import { useContext } from "react";
import EventContext from "../../../contexts/EventContext";

import img_pricing from "/public/assets/images/shap/pricing_memphis1.png";

export default function LandingProduct() {
  const eventCtx = useContext(EventContext);
  
  const img_product1 = require(`/events/${eventCtx.eventID}/product/sepatu.jpg`);
  const img_product2 = require(`/events/${eventCtx.eventID}/product/sepeda.jpg`);

  return (
    <section className="ts-pricing gradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title white">BANTENG CHARITY</h2>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="400ms"
          >
            {" "}
            <div className="post">
              <div className="post-media post-image">
                  <Image src={img_product1} className="img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="400ms"
          >
            {" "}
            <div className="post">
              <div className="post-media post-image">
                  <Image src={img_product2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="speaker-shap wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="400ms"
      >
        <Image className="shap2" src={img_pricing} alt="" />
      </div>
    </section>
  );
}
