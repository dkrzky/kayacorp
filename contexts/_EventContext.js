const validateDataPeserta = (listPeserta) => {
  let isValid = true;
  let invalidIndexPeserta;
  let invalidFieldName;

  for (let i = 0; i < listPeserta.length; i++) {
    const peserta = listPeserta[i];

    const pesertaKeys = Object.keys(peserta);

    for (let j = 0; j < pesertaKeys.length; j++) {
      const key = pesertaKeys[j];

      if (peserta[key] == null || peserta[key]?.toString().trim() == "") {
        isValid = false;
        invalidIndexPeserta = i;
        invalidFieldName = key;

        if (key == "noTeleponDarurat") isValid = true;
      }

      if (!isValid) break;
    }

    if (!isValid) break;
  }

  return isValid
    ? null
    : {
        invalidIndexPeserta,
        invalidFieldName,
      };
};

const calculatePrice = (eventData, listDataPeserta) => {
  let totalPrice = 0;

  const listBRR = listDataPeserta.map((d) => {
    return {
      categoryCode: d.categoryCode,
      brrCode: d.brrCode,
    };
  });

  listBRR.forEach((d) => {
    const price =
      eventData.brrCategory
        .find((c) => c.idBrrCategory == d.categoryCode)
        ?.brr.find((b) => b.idBrr == d.brrCode)?.price ?? 0;

    totalPrice += +price;
  });

  return totalPrice;
};

const buildPayload = (authData, eventData, listDataPeserta) => {
  const amount = calculatePrice(eventData, listDataPeserta);

  const result = {
    userid: authData.userid,
    idEvent: eventData.idEvent,
    bookDate: null,
    pax: listDataPeserta.length,
    amount: amount,
    participant: listDataPeserta.map((d) => {
      // console.log(eventData.jerseySize)
      // console.log(d.jerseySizeCode)

      const jerseySize = eventData.jerseySize.find(
        (f) => f.id == d.jerseySizeCode
      ).value;
      const gender = eventData.gender.find((f) => f.id == d.genderCode).value;

      const _categories = eventData.brrCategory.find(
        (f) => f.idBrrCategory == d.categoryCode
      );
      const _brr = _categories.brr.find((f) => f.idBrr == d.brrCode);

      const category = _categories.nmCategory;
      const brr = _brr.nmBrr;
      const price = _brr.price;

      return {
        nmParticipant: d.namaKTP,
        city: d.kota,
        phone: d.noTelepon,
        emergPhone: d.noTeleponDarurat,
        jerseySize: jerseySize,
        gender: gender,
        category: category,
        brr: brr,
        price: price,
      };
    }),
  };

  return result;
};

export { buildPayload, validateDataPeserta, calculatePrice };
