import Dialog from "@mui/material/Dialog";
import classes from "./TransactionDialog.module.css";
import useFormat from "../../hooks/useFormat";
// import LabelTextForm from "../ui/LabelTextForm";
// import LinkTextForm from "../UI/LinkTextForm";
import FormLabelText from "../UI/FormLabelText";
import FormLinkText from "../UI/FormLinkText";
import useScreenInfo from "../../hooks/useScreenInfo";

const TransactionDialog = ({ data, open, onCloseHandler }) => {
  const format = useFormat();
  const isMobile = useScreenInfo().isMobile;

  const LabelForm30 = ({ label, text, isOdd }) => (
    <FormLabelText
      label={label}
      text={text}
      labelWidth="40%"
      //   style={{
      //     padding: "0 10px",
      //     backgroundColor: isOdd ?  "#cfcfcf" : "#DCDCDC",
      //   }}
    />
  );

  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth={data.stsPayment == "PAID" ? "xl" : "md"}
      onClose={onCloseHandler}
    >
      <div className={classes["close-btn"]} onClick={onCloseHandler}>
        Close
      </div>
      <div className={classes["transaction-dialog"]}>
        <label className={classes["dialog-label"]}>Transaction Details</label>
        <div>
          <FormLabelText
            label="Nomor Transaksi"
            text={data.transNo}
            labelWidth={data.stsPayment == "PAID" ? "15%" : "25%"}
          />
          <FormLabelText
            label="Jumlah Peserta"
            text={data.pax}
            labelWidth={data.stsPayment == "PAID" ? "15%" : "25%"}
          />
          <FormLabelText
            label="Status Pembayaran"
            text={data.stsPayment}
            labelWidth={data.stsPayment == "PAID" ? "15%" : "25%"}
          />
          <FormLabelText
            label="Tanggal Transaksi"
            text={data.transDate}
            labelWidth={data.stsPayment == "PAID" ? "15%" : "25%"}
          />
          {data.stsPayment != "PAID" && (
            <FormLinkText
              label="Link Pembayaran"
              alias="Klik untuk bayar"
              link={data.paymentLink}
              labelWidth={data.stsPayment == "PAID" ? "15%" : "25%"}
            />
          )}
          <FormLabelText
            label="Total Harga"
            text={format.toThousandRupiah(data.amount)}
            labelWidth={data.stsPayment == "PAID" ? "15%" : "25%"}
          />

          {data.stsPayment == "PAID" && (
            <div
              style={{
                display: "flex",
                width: "100%",
                margin: "5px 0",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  width: "10%",
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
                style={{ marginLeft: "auto" }}
              >
                <input
                  type="hidden"
                  name="data"
                  value={JSON.stringify(data.participant)}
                />
                <input type="hidden" name="isMobile" value={isMobile} />
                <input
                  className={classes["generate-btn"]}
                  type="submit"
                  value="Generate Semua"
                />
              </form>{" "}
            </div>
          )}

          {data.stsPayment == "PAID" && (
            <div className={classes["participant-list"]}>
              {data.participant.map((p, j) => (
                <div key={j} className={classes["participant-details"]}>
                  <div style={{ display: "flex" }}>
                    <label style={{ fontWeight: "bold", color: "#686868" }}>
                      Peserta {j + 1}
                    </label>

                    <form
                      target="_blank"
                      action="/generate/kartu-peserta"
                      method="post"
                      style={{ marginLeft: "auto" }}
                    >
                      <input
                        type="hidden"
                        name="data"
                        value={JSON.stringify([p])}
                      />
                      <input type="hidden" name="isMobile" value={isMobile} />
                      <input
                        className={classes["generate-btn"]}
                        type="submit"
                        value="Generate Kartu Peserta"
                        style={{ width: "185px" }}
                      />
                    </form>
                  </div>
                  <div className={classes["participant-info"]}>
                    <LabelForm30
                      label="Participant Code"
                      text={p.participantCd}
                      isOdd={true}
                    />
                    <LabelForm30
                      label="Nama"
                      text={p.nmParticipant}
                      isOdd={false}
                    />
                    <LabelForm30 label="Kota" text={p.city} isOdd={false} />
                    <LabelForm30 label="No Hp" text={p.phone} isOdd={true} />
                    <LabelForm30
                      label="No Hp Darurat"
                      text={p.emergPhone}
                      isOdd={false}
                    />
                    <LabelForm30 label="Kelamin" text={p.gender} isOdd={true} />
                    <LabelForm30
                      label="Ukuran Jersey"
                      text={p.gender.trim() == "M" ? "Pria" : "Wanita"}
                      isOdd={false}
                    />
                  </div>
                  <div className={classes["participant-event-info"]}>
                    <LabelForm30 label="EBIB" text={p.EBib} />
                    <LabelForm30 label="Category" text={p.category} />
                    <LabelForm30 label="BRR" text={p.brr} />
                    <LabelForm30 label="Harga" text={p.price} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default TransactionDialog;
