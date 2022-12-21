import Image from "next/image";
import { useContext } from "react";

import EventContext from "../../../contexts/EventContext";

import img_news1 from "/public/assets/images/shap/news_memphis1.png";
import img_news2 from "/public/assets/images/shap/news_memphis2.png";

export default function LandingNews(props) {
  const eventCtx = useContext(EventContext);

  const img_blog1 = require(`/events/${eventCtx.eventID}/blog/blog1.jpeg`);
  const img_blog2 = require(`/events/${eventCtx.eventID}/blog/blog2.jpeg`);
  const img_blog3 = require(`/events/${eventCtx.eventID}/blog/blog3.jpeg`);

  return (
    <section className="ts-blog section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title">
              <span>Activity</span>
              Banteng Ride & Night Run 2022
            </h2>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="400ms"
          >
            <div className="post">
              <div className="post-media post-image">
                  <Image src={img_blog1} className="img-fluid" alt="" />
              </div>

              <div className="post-body">
                <div className="post-meta">
                  {/* <span className="post-author">
                    <a href="#">BY Admin</a>
                  </span> */}

                  {/* <div className="post-meta-date">October 8, 2018</div> */}
                </div>
                <div className="entry-header">
                  <h2 className="entry-title">
                    Banteng Fondo Ride
                  </h2>
                </div>

                <div className="entry-content">
                  <p>
                    Regulasi Kegiatan Banteng Fondo Ride Sebagai Berikut :{" "}
                    <br />
                    <br />
                    • Tanggal : 26 November 2022
                    <br />
                    • Lokasi : Simpang Lima Gumul Kediri -
                    &emsp;&emsp;&emsp;&emsp; Blitar Makan Bung Karno (PP)
                    <br />
                    • Jenis Sepeda : Road Bike
                    <br />
                    • Donasi : Rp. 150.000
                    <br />
                    <br />
                    Dengan Mengikuti acara ini, kamu sudah ikut berpatisipasi
                    menyumbang 1000 Sepeda untuk Guru dan 2000 Sepatu untuk
                    Siswa didaerah pedalaman.
                  </p>
                </div>

                {/* <div className="post-footer">
                  <a href="news-single.html" className="btn-link">
                    Read More <i className="icon icon-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="500ms"
          >
            <div className="post">
              <div className="post-media post-image">
                  <Image src={img_blog2} className="img-fluid" alt="" />
              </div>

              <div className="post-body">
                <div className="post-meta">
                  {/* <span className="post-author">
                    <a href="#">BY Admin</a>
                  </span> */}

                  {/* <div className="post-meta-date">October 8, 2018</div> */}
                </div>
                <div className="entry-header">
                  <h2 className="entry-title">
                    Banteng Night Run
                  </h2>
                </div>

                <div className="entry-content">
                  <p>
                    Regulasi Kegiatan Banteng Fondo Ride Sebagai Berikut :{" "}
                    <br />
                    <br />
                    • Tanggal : 26 November 2022
                    <br />
                    • Lokasi : Simpang Lima Gumul Kediri
                    <br />
                    • Donasi : Rp. 100.000
                    <br />
                    <br />
                    Dengan Mengikuti acara ini, kamu sudah ikut berpatisipasi
                    menyumbang 1000 Sepeda untuk Guru dan 2000 Sepatu untuk
                    Siswa didaerah pedalaman.
                    <br />
                    <br />
                    <br />
                  </p>
                </div>

                {/* <div className="post-footer">
                  <a href="news-single.html" className="btn-link">
                    Read More <i className="icon icon-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="600ms"
          >
            <div className="post">
              <div className="post-media post-image">
                  <Image src={img_blog3} className="img-fluid" alt="" />
              </div>

              <div className="post-body">
                <div className="post-meta">
                  {/* <span className="post-author">
                    <a href="#">BY Admin</a>
                  </span> */}

                  {/* <div className="post-meta-date"></div> */}
                </div>
                <div className="entry-header">
                  <h2 className="entry-title">
                    Banteng Fun Ride
                  </h2>
                </div>

                <div className="entry-content">
                  <p>
                    Regulasi Kegiatan Banteng Fondo Ride Sebagai Berikut :{" "}
                    <br />
                    <br />
                    • Tanggal : 27 November 2022
                    <br />
                    • Lokasi : Simpang Lima Gumul Kediri
                    <br />
                    • Jenis Sepeda : Road Bike
                    <br />
                    • Donasi : Rp. 50.000
                    <br />
                    <br />
                    Dengan Mengikuti acara ini, kamu sudah ikut berpatisipasi
                    menyumbang 1000 Sepeda untuk Guru dan 2000 Sepatu untuk
                    Siswa didaerah pedalaman.
                    <br />
                    <br />
                  </p>
                </div>

                {/* <div className="post-footer">
                  <a href="news-single.html" className="btn-link">
                    Read More <i className="icon icon-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="speaker-shap">
        <Image className="shap2" src={img_news1} alt="" />
        <Image className="shap1" src={img_news2} alt="" />
      </div>
    </section>
  );
}
