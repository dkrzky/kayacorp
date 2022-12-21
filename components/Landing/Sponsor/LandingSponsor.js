import Image from "next/image";

import img_sponsor1 from "/public/assets/images/sponsors/sponsor1.png";
import img_sponsor2 from "/public/assets/images/sponsors/sponsor2.png";
import img_sponsor3 from "/public/assets/images/sponsors/sponsor3.png";
import img_sponsor4 from "/public/assets/images/sponsors/sponsor4.png";
import img_sponsor5 from "/public/assets/images/sponsors/sponsor5.png";
import img_sponsor6 from "/public/assets/images/sponsors/sponsor6.png";
import img_sponsor7 from "/public/assets/images/sponsors/sponsor7.png";
import img_sponsor8 from "/public/assets/images/sponsors/sponsor8.png";
import img_sponsor9 from "/public/assets/images/sponsors/sponsor9.png";

export default function LandingSponsor(props) {
  return (
    <section
      className="ts-intro-sponsors"
      style={{
        backgroundImage: "url(/assets/images/sponsors/sponsor_img.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title white">
              <span>Who helps us</span>
              Our Sponsors
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="sponsors-logo text-center">
              <a href="#">
                <Image src={img_sponsor1} alt="" />
              </a>
              <a href="#">
                <Image src={img_sponsor2} alt="" />
              </a>
              <a href="#">
                <Image src={img_sponsor3} alt="" />
              </a>
              <a href="#">
                <Image src={img_sponsor4} alt="" />
              </a>
              <a href="#">
                <Image src={img_sponsor5} alt="" />
              </a>
              <a href="#">
                <Image src={img_sponsor6} alt="" />
              </a>
              <a href="#">
                <Image src={img_sponsor7} alt="" />
              </a>
              <a href="#">
                <Image src={img_sponsor8} alt="" />
              </a>
              <a href="#">
                <Image src={img_sponsor9} alt="" />
              </a>
              <div className="sponsor-btn text-center">
                <a href="#" className="btn">
                  Become a Sponsor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
