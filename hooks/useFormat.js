const useFormat = () => {
  return {
    toThousandRupiah: (e, ifEmpty) => {
      if (!e) return ifEmpty ?? null;

      return `Rp. ${e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00`;
    },
    yyyyMMdd: (e) => {
      if (!e) return null;

      let date = e;
      if (typeof date == "string") date = new Date(date);

      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    },
    isEmail: (e) => {
      var re = /\S+@\S+\.\S+/;
      return re.test(e ?? "");
    },
  };
};

export default useFormat;
