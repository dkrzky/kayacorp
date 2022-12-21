import { useState } from "react";

// data: [
//     {
//       value: "2022-11-19",
//       label: "Nov 19",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       value: "2022-11-20",
//       label: "Nov 20",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       value: "2022-11-21",
//       label: "Nov 21",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ]

const EventDatePicker = ({ data }) => {
  const [selectedTanngal, setSelecteTanggal] = useState();

  const tanggalClickHandler = (value) => {
    setSelecteTanggal(value);
  };

  return (
    <div
      className="col-sm-8 wow fadeInUp"
      data-wow-duration="1.5s"
      data-wow-delay="300ms"
    >
      <div className="intro-left-content">
        <h3 className="ml-3">Pilih Tanggal Event</h3>
        <div className="row">
          {data.map((d, i) => (
            <div
              key={d.value}
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="400ms"
            >
              <div
                className="single-intro-text mb-30"
                style={{
                  backgroundColor:
                    selectedTanngal == d.value ? "darkred" : "white",
                }}
                onClick={() => {
                  tanggalClickHandler(d.value);
                }}
              >
                <i className="icon icon-calendar-full"></i>
                <h3 className="ts-title">{d.label}</h3>
                <p>{d.desc}</p>
                <span className="count-number">{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDatePicker;
