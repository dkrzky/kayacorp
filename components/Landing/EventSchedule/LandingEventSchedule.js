import EventRegistration from "./EventRegistration";
import EventDatePicker from "./EventDatePicker";

const _dataEvent = [
  {
    value: "2022-11-19",
    label: "Nov 19",
    desc: "Se.",
  },
  {
    value: "2022-11-20",
    label: "Nov 20",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function LandingEventSchedule(props) {
  return (
    <section className="ts-intro-item section-bg">
      <div className="container">
        <div className="row">
          <EventDatePicker data={_dataEvent} />
          <EventRegistration />
        </div>
      </div>
    </section>
  );
}
