import jsHttpCookie from "cookie";
import jsonWebToken from "jsonwebtoken";

const AuthDataParser = (req) => {
  let authData;

  if (req && req.headers) {
    const cookies = req.headers.cookie;

    if (typeof cookies === "string") {
      const cookiesJSON = jsHttpCookie.parse(cookies);

      if (cookiesJSON["twk_id"] != null && cookiesJSON["twk_id"] != "")
        authData = jsonWebToken.verify(cookiesJSON["twk_id"], "banteng");
    }
  }

  return authData;
};

export default AuthDataParser;
