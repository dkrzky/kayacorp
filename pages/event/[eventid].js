import LandingHeader from "../../components/Landing/Header/LandingHeader";
import LandingBanner from "../../components/Landing/Banner/LandingBanner";
import LandingEventSchedule from "../../components/Landing/EventSchedule/LandingEventSchedule";
import LandingForm from "../../components/Landing/Form/LandingForm";
import LandingSchedule from "../../components/Landing/Schedule/LandingSchedule";
import LandingProduct from "../../components/Landing/Product/LandingProduct";
import LandingNews from "../../components/Landing/News/LandingNews";
import LandingSponsor from "../../components/Landing/Sponsor/LandingSponsor";
import LandingMap from "../../components/Landing/Map/LandingMap";
import LandingFooter from "../../components/Landing/Footer/LandingFooter";
import BundleScript from "../../components/Landing/BundleScript";
import { PesertaContextProvider } from "../../contexts/PesertaContext";
import { EventContextProvider } from "../../contexts/EventContext";
import NoEvent from "../../components/Landing/NoEvent/NoEvent";
import { getEventInitializeDataRepo } from "../../repositories/EventRepository";
import { useContext, useEffect, useState } from "react";
import LandingBackdrop from "../../components/Landing/Backdrop/LandingBackdrop";
import AuthContext, { AuthContextProvider } from "../../contexts/AuthContext";
import AuthDataParser from "../../lib/AuthDataParser";

export default function EventPage({ authData, eventID, initData }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const auth = useContext(AuthContext);

  useEffect(() => {
    setIsLoaded(true);
    if (authData) auth.onSetAuthData(authData);
  }, [isLoaded, submitted, auth, authData]);

  if (!initData) window.location.href = "/event/brr";

  return (
    <EventContextProvider
      eventID={eventID}
      eventData={initData}
      onSubmitted={() => setSubmitted(true)}
    >
      <PesertaContextProvider>
        {submitted && <LandingBackdrop />}
        <div className="body-inner">
          <LandingHeader />
          <LandingBanner />
          {/* <LandingEventSchedule /> */}
          <LandingForm />
          {/* <LandingSchedule /> */}
          <LandingProduct />
          <LandingNews />
          {/* <LandingSponsor /> */}
          <LandingMap />
          <LandingFooter />
        </div>
        {isLoaded && <BundleScript />}
      </PesertaContextProvider>
    </EventContextProvider>
  );
}

export async function getServerSideProps({ query, req }) {
  const eventID = query["eventid"];
  const authData = AuthDataParser(req);

  let data;

  try {
    data = await getEventInitializeDataRepo(eventID);
  } catch (error) {
    console.log(error);
  }

  if (data == null || data.length == 0)
    return {
      props: {},
      redirect: {
        permanent: true,
        destination: "/404",
      },
    };

  return {
    props: { eventID, initData: data[0], authData: authData ?? null },
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { eventid: "brr" } }],
//     fallback: "blocking",
//   };
// }

// export async function getStaticProps({params }) {
//   const eventId = params.eventid;

//   const data = await getEventInitializeDataRepo(eventId);

//   return {
//     props: {
//       eventID: eventId,
//       initData: data[0],
//     },
//   };
// }
