import React, { createRef, useRef, useState } from "react";

const _persertaObject = {
  namaKTP: "",
  kota: "",
  noTelepon: "",
  noTeleponDarurat: "",
  jerseySizeCode: null,
  genderCode: null,
  categoryCode: null,
  brrCode: null,
};

const PesertaContext = React.createContext({
  listPeserta: [],
  onTambahPeserta: () => {},
  onKurangPeserta: () => {},
  onHapusPeserta: (indexPeserta) => {},
  onUpdatePeserta: (indexPeserta, data) => {},
  onLoadPeserta: (data) => {},
});

export const PesertaContextProvider = (props) => {
  const [listPeserta, setListPeserta] = useState([_persertaObject]);

  const tambahPesertaHandler = () => {
    const updatedList = [...listPeserta];
    updatedList.push(_persertaObject);

    setListPeserta(updatedList);
  };

  const kurangPesertaHandlelr = () => {
    const updatedList = [...listPeserta];
    const removedPeserta = updatedList.at(-1);

    // if (removedPeserta && _isDataPesertaNotEmpty(removedPeserta)) {
    //   //not empty pls confirm
    // } else {
    //   updatedList.pop();
    // }

    updatedList.pop();

    setListPeserta(updatedList);
  };

  const hapusPesertaHandler = (indexPeserta) => {
    const updatedList = [...listPeserta];

    updatedList.splice(indexPeserta, 1);

    setListPeserta(updatedList);
  };

  const updateDataPeserta = (indexPeserta, data) => {
    const updatedList = [...listPeserta];

    updatedList[indexPeserta] = data;

    setListPeserta(updatedList);
  };

  const loadPesertaHandler = (data) => setListPeserta(data);

  return (
    <PesertaContext.Provider
      value={{
        listPeserta: listPeserta,
        onTambahPeserta: tambahPesertaHandler,
        onKurangPeserta: kurangPesertaHandlelr,
        onHapusPeserta: hapusPesertaHandler,
        onUpdatePeserta: updateDataPeserta,
        onLoadPeserta: loadPesertaHandler,
      }}
    >
      {props.children}
    </PesertaContext.Provider>
  );
};

export default PesertaContext;
