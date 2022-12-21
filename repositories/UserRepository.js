const changePasswordRepo = async (payload) => {
  const _payload = JSON.stringify(payload);

  var response = await fetch(
    "https://api.bantengseries.com/api/users2/changePassword.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

export { changePasswordRepo };
