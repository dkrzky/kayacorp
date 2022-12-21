import jscookie from "js-cookie";

class CookieService {
  constructor() {}

  static setToken(value) {
    if (!value) return;

    jscookie.set("twk_id", value, { expires: 3, sameSite: "Strict" });
  }

  static clearToken() {
    jscookie.remove("twk_id");
  }
}

export default CookieService;
