import Head from "next/head";
import Script from "next/script";

const BundleScript = () => {
  return (
    <>
      <Script type="text/javascript" src="/assets/js/jquery.js" strategy="lazyOnload"></Script>
      <Script
        type="text/javascript"
        src="/assets/js/popper.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        type="text/javascript"
        src="/assets/js/bootstrap.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        type="text/javascript"
        src="/assets/js/jquery.appear.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        type="text/javascript"
        src="/assets/js/jquery.magnific-popup.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        type="text/javascript"
        src="/assets/js/owl.carousel.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script type="text/javascript" src="/assets/js/wow.min.js" strategy="lazyOnload"></Script>
      <Script
        type="text/javascript"
        src="/assets/js/isotope.pkgd.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script type="text/javascript" src="/assets/js/main.js" strategy="lazyOnload"></Script>
      <Script type="text/javascript" src="/assets/js/tawk.js" strategy="lazyOnload"></Script>
    </>
  );
};

export default BundleScript;
