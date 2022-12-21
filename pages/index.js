import { useEffect } from "react";

export default function LandingPage(props) {
  useEffect(() => {
    window.location.href = "/event/brr";
  }, []);

  return <></>;
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
