import { Email as EmailIcon } from "@mui/icons-material";
import { useContext, useEffect, useRef, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import AuthContext from "../contexts/AuthContext";
import AuthDataParser from "../lib/AuthDataParser";
import { getInvoicesRepo } from "../repositories/InvoiceRepository";
import LandingHeader from "../components/Landing/Header/LandingHeader";
import classes from "../styles/pages/transaction.module.css";
import TransactionDialog from "../components/Transaction/TransactionDialog";
import useScreenInfo from "../hooks/useScreenInfo";
import { useRouter } from "next/router";
import useFormat from "../hooks/useFormat";

export default function Transaction({ authData, invoices }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const auth = useContext(AuthContext);
  const isMobile = useScreenInfo().isMobile;
  const router = useRouter();
  const format = useFormat();
  const formRef = useRef();

  const detailsOpenHandler = (index) => {
    if (!isMobile) setOpenIndex(index);
    else openTransactionDetailMobile(index); //post form-data
  };

  const detailsCloseHandler = () => setOpenIndex(-1);

  const openTransactionDetailMobile = (i) => {
    formRef.current.data.value = JSON.stringify(invoices[i]);
    formRef.current.submit();
  };

  useEffect(() => {
    if (authData) auth.onSetAuthData(authData);
  }, [auth, authData]);

  return (
    <form ref={formRef} action="/mtransaction-detail" method="POST">
      <input type="hidden" name="data" />
      <div className={classes.background}>
        <LandingHeader />
        {openIndex != -1 && (
          <TransactionDialog
            data={invoices[openIndex]}
            open={true}
            onCloseHandler={detailsCloseHandler}
          />
        )}
        <div className={classes.form}>
          <div className="row m-0">
            <label>Daftar Transaksi</label>
          </div>
          <div className={classes["transaction-list"]}>
            {invoices.map((t, i) => {
              return (
                <div
                  key={i}
                  className={classes["transaction-row"]}
                  onClick={() => detailsOpenHandler(i)}
                >
                  <div className={classes["transaction-header"]}>
                    <label className={`${classes["transaction-no"]} ${isMobile && classes["transaction-no-mobile"]}`}>
                      {t.transNo}
                    </label>

                    {!isMobile && (
                      <label className={classes["transaction-amount"]}>
                        {format.toThousandRupiah(t.amount)}
                      </label>
                    )}
                    <label
                      className={classes["transaction-sts"]}
                      style={{
                        backgroundColor:
                          t.stsPayment == "PAID" ? "#00FF00	" : "#FF0000",
                      }}
                    >
                      {t.stsPayment}
                    </label>
                    <label className={classes["transaction-date"]}>
                      {isMobile ? format.yyyyMMdd(t.transDate) : t.transDate}
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </form>
  );
}

export async function getServerSideProps({ req }) {
  const authData = AuthDataParser(req);

  if (!authData)
    return {
      redirect: {
        permanent: true,
        destination: "/login",
      },
      props: {},
    };

  const invoices = await getInvoicesRepo(authData.userid);

  return {
    props: {
      authData,
      invoices,
    },
  };
}
