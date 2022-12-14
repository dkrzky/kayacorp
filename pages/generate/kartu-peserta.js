import AuthDataParser from "../../lib/AuthDataParser";
import base64Image from "../../events/brr/kartu-peserta/base64image";
import formidable from "formidable";
import useScreenInfo from "../../hooks/useScreenInfo";

const KartuPeserta = ({ data }) => {
  const style = {
    position: "relative",
    fontFamily: "Josefin Sans",
    width: "1280px",
    height: "527px",
    backgroundImage: `url("data:image/png;base64, ${base64Image}")`,
    backgroundRepeat: "no-repeat",
    userSelect: "none",
    marginBottom: "20px",
  };

  const isMobile = useScreenInfo().isMobile;

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Josefin%20Sans&display=optional"
      />
      {data.map((d, i) => {
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
              {d.brr}
            </label>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "450px",
                top: "355px",
              }}
            >
              {d.dateEvent}
            </label>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "450px",
                top: "465px",
              }}
            >
              {d.timeEvent}
            </label>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "695px",
                top: "355px",
              }}
            >
              {d.gender == "M" ? "Pria" : "Wanita"}
            </label>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "695px",
                top: "465px",
              }}
            >
              {d.jerseySize}
            </label>
          </div>
        );
      })}
    </div>
  );
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
