const getInvoicesRepo = async (userid) => {
  const _payload = JSON.stringify({
    userid,
  });

  var response = await fetch(
    "https://api.bantengseries.com/api/ticket/getInvoice.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

export { getInvoicesRepo };
