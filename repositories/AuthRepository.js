const signInRepo = async (payload) => {
  const _payload = JSON.stringify(payload);

  var response = await fetch(
    "https://api.bantengseries.com/api/users2/signin.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

const registerRepo = async (payload) => {
  const _payload = JSON.stringify(payload);

  var response = await fetch(
    "https://api.bantengseries.com/api/users2/register.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

const forgotPasswordRepo = async (email) => {
  const _payload = JSON.stringify({
    email,
  });

  var response = await fetch(
    "https://api.bantengseries.com/api/users2/forgotPassword.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

export { signInRepo, registerRepo, forgotPasswordRepo };
