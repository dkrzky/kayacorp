import { useRouter } from "next/router";
import classes from "../styles/pages/thankyou.module.css";

const ThankYou = (props) => {
  const router = useRouter();

  const goHomeHandler = () => router.push("/transaction");

  return (
    <div className={classes.parent}>
      <div className={classes.child}>
        <h1 style={{ marginBottom: "3rem", color: "white" }}>Thank You</h1>
        {/* <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: checkAnimation,
              rendererSettings: {
                className: "check-animation",
              },
            }}
            height={250}
            width={250}
          /> */}
        <div style={{ whiteSpace: "nowrap", color: "white" }}>
          terima kasih untuk pembelian tiket event
        </div>
        <br />
        <div className={"btn " + classes.goback} onClick={goHomeHandler}>
          Lihat Transaksi
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

// export async function getServerSideProps(context) {
//   const orderId = context.query["order_id"];

//   const data = await getConfirmation(orderId);

//   return {
//     props: {
//       data: data,
//     },
//   };
// }
