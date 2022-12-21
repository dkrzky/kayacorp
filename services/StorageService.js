class StorageService {
  constructor() {}

  static __ss__(key, value, remove = false) {
    if (remove) return localStorage.removeItem(key);

    if (value) localStorage.setItem(key, JSON.stringify(value));
    else return JSON.parse(localStorage.getItem(key));
  }

  static authData(value, { remove } = {}) {
    return this.__ss__("authData", value, remove);
  }

  static keranjang(value, { remove } = {}) {
    return this.__ss__("keranjang", value, remove);
  }
}

export default StorageService;
