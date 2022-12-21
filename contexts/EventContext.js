import Router from "next/router";

import React, { useContext, useState } from "react";
import { sendPembayaranEventRepo } from "../repositories/EventRepository";
import StorageService from "../services/StorageService";
import AuthContext from "./AuthContext";
import { buildPayload, validateDataPeserta } from "./_EventContext";

const EventContext = React.createContext({
  eventID: null,
  eventData: null,
  onBayar: () => {},
  onValidateDataPeserta: (listPeserta) => {},
  onSimpanKeranjang: (listPeserta) => {},
});

export const EventContextProvider = ({
  eventID,
  eventData,
  onSubmitted,
  children,
}) => {
  const auth = useContext(AuthContext);

  const validateDataPesertaHandler = (listPeserta) =>
    validateDataPeserta(listPeserta);

  const bayarHandler = async (listDataPeserta) => {
    onSubmitted();

    const payload = buildPayload(auth.authData, eventData, listDataPeserta);

    const data = await sendPembayaranEventRepo(payload);

    window.location = data.redirect_url;
  };

  const simpanKeranjangHandler = (listPeserta) =>
    StorageService.keranjang(listPeserta);

  return (
    <EventContext.Provider
      value={{
        eventID: eventID,
        eventData: eventData,
        onBayar: bayarHandler,
        onValidateDataPeserta: validateDataPesertaHandler,
        onSimpanKeranjang: simpanKeranjangHandler,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
