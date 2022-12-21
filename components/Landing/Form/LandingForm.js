import Image from "next/image";

import img1 from "/public/assets/images/shap/home_speaker_memphis1.png";
import img2 from "/public/assets/images/shap/home_speaker_memphis2.png";
import img3 from "/public/assets/images/shap/home_speaker_memphis3.png";
import FormPerserta from "./FormPeserta";
import { useContext, useEffect, useRef, useState } from "react";
import PesertaContext from "../../../contexts/PesertaContext";
import EventContext from "../../../contexts/EventContext";
import DaScroll from "../../../lib/DaScroll";
import AuthContext from "../../../contexts/AuthContext";
import { useRouter } from "next/router";
import useFormat from "../../../hooks/useFormat";
import { calculatePrice } from "../../../contexts/_EventContext";
import StorageService from "../../../services/StorageService";

export default function LandingForm(props) {
  const [errorForm, setErrorForm] = useState({
    invalidIndexPeserta: null,
    invalidFieldName: null,
  });
  const [totalHarga, setTotalHarga] = useState();

  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const eventCtx = useContext(EventContext);
  const pesertaCtx = useContext(PesertaContext);
  const format = useFormat();

  const tambahPesertaHandler = () => {
    pesertaCtx.onTambahPeserta();

    setTimeout(() => {
      DaScroll("ticket-forms");
    }, 100);
  };

  const updateDataPesertaHandler = (indexPeserta, dataPeserta) =>
    pesertaCtx.onUpdatePeserta(indexPeserta, dataPeserta);

  const deletePesertaHandler = (indexPeserta) => {
    pesertaCtx.onHapusPeserta(indexPeserta);

    setTimeout(() => {
      DaScroll("ticket-forms");
    }, 100);
  };

  const bayarHandler = () => {
    const listPeserta = [...pesertaCtx.listPeserta];

    const invalidForm = eventCtx.onValidateDataPeserta(listPeserta);

    if (!authCtx.isSigned()) {
      eventCtx.onSimpanKeranjang(listPeserta);
      return router.push("/login");
    }

    if (!invalidForm) {
      eventCtx.onBayar(listPeserta);
    } else {
      setErrorForm(invalidForm);
    }
  };

  useEffect(() => {
    const loadedData = StorageService.keranjang();
    if (loadedData) {
      pesertaCtx.onLoadPeserta(loadedData);
      StorageService.keranjang(null, { remove: true });
      setTimeout(() => {
        DaScroll("ticket-forms");
      }, 100);
    }
  }, []);

  return (
    <section id="ts-speakers" className="ts-speakers">
      <div id="ticket-form" className="container">
        <h1>Form Registration</h1>
        <br />
        {pesertaCtx.listPeserta.map((d, i) => (
          <FormPerserta
            key={i}
            indexPeserta={i}
            dataPeserta={d}
            onEditingComplete={(data) => {
              updateDataPesertaHandler(i, data);
              setTotalHarga(eventCtx.eventData, data);
            }}
            onDeletePeserta={() => deletePesertaHandler(i)}
            errorForm={errorForm.invalidIndexPeserta == i && errorForm}
          />
        ))}
        <label className="form-total-harga-label">
          Total Harga&nbsp;:&nbsp;
        </label>
        <label className="form-total-harga-label-amount">
          {format.toThousandRupiah(
            calculatePrice(eventCtx.eventData, pesertaCtx.listPeserta),
            "-"
          )}
        </label>
        <div id="ticket-forms" className="row m-0">
          <button
            className="btn col-6"
            style={{
              backgroundColor: "yellowgreen",
              padding: "0 !important",
              lineHeight: "0 !important",
            }}
            onClick={tambahPesertaHandler}
          >
            TAMBAH PESERTA
          </button>
          <div className="col-6 pr-0">
            <button
              className="btn w-100"
              style={{
                backgroundColor: "indianred",
                padding: "0 !important",
                lineHeight: "0 !important",
              }}
              onClick={bayarHandler}
            >
              BAYAR
            </button>
          </div>
        </div>
      </div>

      <div className="speaker-shap">
        <Image className="shap1" src={img1} alt="" />
        <Image className="shap2" src={img2} alt="" />
        <Image className="shap3" src={img3} alt="" />
      </div>
    </section>
  );
}
