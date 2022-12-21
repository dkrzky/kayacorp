// import formidable from "formidable";
import { useContext, useEffect } from "react";
import LandingHeader from "../components/Landing/Header/LandingHeader";
import AuthContext from "../contexts/AuthContext";
import AuthDataParser from "../lib/AuthDataParser";
import classes from "../styles/pages/mtransaction.module.css";
import LabelTextForm from "../components/ui/LabelTextForm";
import useFormat from "../hooks/useFormat";
import formidable from "formidable";
import LinkTextForm from "../components/UI/LinkTextForm";

const MtransactionDetail = ({ authData, data }) => {
  const auth = useContext(AuthContext);
  const format = useFormat();

  const LabelForm45 = ({ label, text }) => (
    <LabelTextForm label={label} text={text} isOdd={true} labelWidth="45%" />
  );

  useEffect(() => {
    if (authData) auth.onSetAuthData(authData);
  }, [auth, authData]);

  return (
    <div className={classes.background}>
      <LandingHeader />
      <div
        style={{ marginTop: "70px", paddingBottom: "30px", padding: "0 15px" }}
      >
        <div className={classes.form}>
          <LabelForm45
            label="Nomor Transaks"
            text={data.transNo}
            labelWidth="50%"
          />
          <LabelForm45 label="Jumlah Peserta" text={data.pax} labelWidth="50%" />
          <LabelForm45
            label="Status Pembayaran"
            text={data.stsPayment}
            labelWidth="50%"
          />
          <LabelForm45
            label="Tanggal Transaksi"
            text={data.transDate}
            labelWidth="50%"
          />
          <LinkTextForm
            label="Link Pembayaran"
            link={data.stsPayment == "PAID" ? "-" : data.paymentLink}
            labelWidth="15%"
          />
          <LabelForm45
            label="Total harga"
            text={format.toThousandRupiah(data.amount)}
            labelWidth="50%"
          />
          {data.stsPayment == "PAID" && (
            <>
              <label
                style={{
                  width: "50%",
                  fontWeight: "bold",
                  color: "rgb(136, 136, 136)",
                  userSelect: "none",
                }}
              >
                Daftar Peserta
              </label>

              <form
                target="_blank"
                action="/generate/kartu-peserta"
                method="post"
                style={{ marginBottom: "10px", width: "100%" }}
              >
                <input
                  type="hidden"
                  name="data"
                  value={JSON.stringify(data.participant)}
                />
                <input
                  className={"btn " + classes["generate-btn"]}
                  type="submit"
                  value="Generate Semua"
                />
              </form>
              <div className={classes["participant-list"]}>
                {data.participant.map((p, j) => (
                  <div key={j} className={classes["participant-details"]}>
                    <label style={{ fontWeight: "bold", color: "#686868" }}>
                      Peserta {j + 1}
                    </label>

                    <div className={classes["participant-info"]}>
                      <LabelForm45
                        label="Participant Code"
                        text={p.participantCd}
                        isOdd={true}
                        labelWidth="45%"
                      />
                      <LabelForm45
                        label="Nama"
                        text={p.nmParticipant}
                        isOdd={false}
                      />
                      <LabelForm45 label="Email" text={p.email} isOdd={true} />
                      <LabelForm45 label="Kota" text={p.city} isOdd={false} />
                      <LabelForm45 label="No Hp" text={p.phone} isOdd={true} />
                      <LabelForm45
                        label="No Hp Darurat"
                        text={p.emergPhone.trim() === "" ? "-" : p.emergPhone}
                        isOdd={false}
                        labelWidth="60%"
                      />
                      <LabelForm45
                        label="Kelamin"
                        text={p.gender}
                        isOdd={true}
                      />
                      <LabelForm45
                        label="Ukuran Jersey"
                        text={p.jerseySize}
                        isOdd={false}
                      />
                    </div>
                    <div className={classes["participant-event-info"]}>
                      <LabelForm45 label="EBIB" text={p.EBib} />
                      <LabelForm45 label="Category" text={p.category} />
                      <LabelForm45 label="BRR" text={p.brr} />
                      <LabelForm45
                        label="Harga"
                        text={format.toThousandRupiah(p.price)}
                      />
                    </div>
                    {data.stsPayment == "PAID" && (
                      <form
                        target="_blank"
                        action="/generate/kartu-peserta"
                        method="post"
                        style={{ marginTop: "10px", width: "100%" }}
                      >
                        <input
                          type="hidden"
                          name="data"
                          value={JSON.stringify([p])}
                        />
                        <input
                          className={"btn " + classes["generate-btn"]}
                          type="submit"
                          value="Generate Kartu Peserta"
                        />
                      </form>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MtransactionDetail;

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
      authData: authData,
      data: JSON.parse(data.fields.data),
    },
  };
}
