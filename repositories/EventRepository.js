import axios from "axios";

const getEventInitializeDataRepo = async (eventId) => {
  const _payload = JSON.stringify({
    idevent: eventId,
  });

  var response = await fetch(
    "https://api.bantengseries.com//api/ticket/initialize.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

const sendPembayaranEventRepo = async (payload) => {
  const _payload = JSON.stringify(payload);

  var response = await fetch(
    "https://api.bantengseries.com//api/ticket/save.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

export { getEventInitializeDataRepo, sendPembayaranEventRepo };
