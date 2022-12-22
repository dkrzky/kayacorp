import AuthDataParser from "../../lib/AuthDataParser";
import base64Image from "../../events/brr/kartu-peserta/base64image";
import formidable from "formidable";
import useScreenInfo from "../../hooks/useScreenInfo";
import { useEffect, useState } from "react";

const KartuPeserta = ({ data }) => {
  const [style, setStyle] = useState({
    position: "absolute",
    width: "1280px",
    height: "527px",
    backgroundImage: `url("data:image/png;base64, ${base64Image}")`,
    backgroundRepeat: "no-repeat",
    marginBottom: "10px",
    userSelect: "none",
  });
  const isMobile = useScreenInfo().isMobile;

  useEffect(() => {
    if (isMobile)
      setStyle({
        ...style,
        transform: "rotate(90deg)",
        left: "-365px",
        top: "385px",
      });
  }, [isMobile]);

  return data.map((d, i) => {
    return (
      <div key={i} style={style}>
        <label
          style={{
            position: "absolute",
            fontSize: "30px",
            left: "50px",
            top: "120px",
          }}
        >
          {d.EBib}
        </label>
        <label
          style={{
            position: "absolute",
            fontSize: "30px",
            left: "50px",
            top: "200px",
          }}
        >
          {d.nmParticipant}
        </label>
        <label
          style={{
            position: "absolute",
            fontSize: "30px",
            left: "50px",
            top: "355px",
          }}
        >
          {d.city}
        </label>
        <label
          style={{
            position: "absolute",
            fontSize: "30px",
            left: "50px",
            top: "465px",
          }}
        >
          {d.category}
        </label>
        <label
          style={{
            position: "absolute",
            fontSize: "30px",
            left: "445px",
            top: "355px",
          }}
        >
          {d.dateEvent}
        </label>
        <label
          style={{
            position: "absolute",
            fontSize: "30px",
            left: "445px",
            top: "465px",
          }}
        >
          {d.timeEvent}
        </label>
        <label
          style={{
            position: "absolute",
            fontSize: "30px",
            left: "690px",
            top: "355px",
          }}
        >
          {d.gender}
        </label>
        <label
          style={{
            position: "absolute",
            fontSize: "30px",
            left: "690px",
            top: "465px",
          }}
        >
          {d.jerseySize}
        </label>
      </div>
    );
  });
};

export default KartuPeserta;

export async function getServerSideProps({ req }) {
  const authData = AuthDataParser(req);

  if (req.method != "POST" && authData)
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props: {},
    };

  const data = await new Promise((resolve, reject) => {
    const form = formidable();

    form.parse(req, (err, fields, files) => {
      if (err) reject({ err });
      resolve({ err, fields, files });
    });
  });

  if (!data.fields)
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props: {},
    };

  return {
    props: {
      data: JSON.parse(data.fields.data),
      isMobile: data.fields.isMobile,
    },
  };
}
