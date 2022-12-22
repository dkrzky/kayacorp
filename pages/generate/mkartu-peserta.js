import AuthDataParser from "../../lib/AuthDataParser";
import base64ImageMobile from "../../events/brr/kartu-peserta/base64image_mobile";
import formidable from "formidable";

const MKartuPeserta = ({ data }) => {
  const style = {
    position: "absolute",
    fontFamily: "Josefin Sans",
    width: "527px",
    height: "1280px",
    backgroundImage: `url("data:image/png;base64, ${base64ImageMobile}")`,
    backgroundRepeat: "no-repeat",
    userSelect: "none",
    marginBottom: "20px",
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Josefin%20Sans&display=optional"
      />
      {data.map((d, i) => {
        return (
          <div key={i} style={{ ...style, top: `${i * 1280 + (i != 0 ? 10 : 0)}px` }}>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "375px",
                top: "50px",
                writingMode: "vertical-lr",
              }}
            >
              {d.EBib}
            </label>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "300px",
                top: "50px",
                writingMode: "vertical-lr",
              }}
            >
              {d.nmParticipant}
            </label>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "145px",
                top: "50px",
                writingMode: "vertical-lr",
              }}
            >
              {d.city}
            </label>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "30px",
                top: "50px",
                writingMode: "vertical-lr",
              }}
            >
              {d.brr}
            </label>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "145px",
                top: "450px",
                writingMode: "vertical-lr",
              }}
            >
              {d.dateEvent}
            </label>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "30px",
                top: "450px",
                writingMode: "vertical-lr",
              }}
            >
              {d.timeEvent}
            </label>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "145px",
                top: "695px",
                writingMode: "vertical-lr",
              }}
            >
              {d.gender == "M" ? "Pria" : "Wanita"}
            </label>
            <label
              style={{
                position: "absolute",
                fontSize: "30px",
                left: "30px",
                top: "695px",
                writingMode: "vertical-lr",
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

export default MKartuPeserta;

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
    },
  };
}
