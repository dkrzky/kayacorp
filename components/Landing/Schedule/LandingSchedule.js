// import Image from "next/image";

// import img1 from "/public/assets/images/speakers/speaker1.jpg";
// import img2 from "/public/assets/images/speakers/speaker2.jpg";
// import img3 from "/public/assets/images/speakers/speaker3.jpg";
// import img4 from "/public/assets/images/speakers/speaker4.jpg";
// import img5 from "/public/assets/images/speakers/speaker5.jpg";
// import img6 from "/public/assets/images/speakers/speaker6.jpg";
// import img7 from "/public/assets/images/speakers/speaker7.jpg";
// import img8 from "/public/assets/images/speakers/speaker8.jpg";
// import img9 from "/public/assets/images/schedule_lunch.png";

// export default function LandingSchedule(props) {
//   return (
//     <section className="ts-schedule">
//       <div className="container">
//         <div className="row">
//           <div
//             className="col-lg-6 align-self-center wow fadeInUp"
//             data-wow-duration="1.5s"
//             data-wow-delay="400ms"
//           >
//             <div className="ts-schedule-content">
//               <h2 className="column-title">
//                 <span>Schedule Details</span>
//                 Information of Event Schedules
//               </h2>
//               <p>
//                 World is committed to making participation in the event a
//                 harassment free experience for everyone, regardless of level of
//                 experience, gender, gender identity and expression
//               </p>
//             </div>
//           </div>

//           <div
//             className="col-lg-6 wow fadeInUp"
//             data-wow-duration="1.5s"
//             data-wow-delay="500ms"
//           >
//             <div className="ts-schedule-info mb-70">
//               <ul className="nav nav-tabs" role="tablist">
//                 <li className="nav-item">
//                   <a
//                     className="active"
//                     title="Click Me"
//                     href="#date1"
//                     role="tab"
//                     data-toggle="tab"
//                   >
//                     <h3>5th June</h3>
//                     <span>Friday</span>
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className=""
//                     href="#date2"
//                     title="Click Me"
//                     role="tab"
//                     data-toggle="tab"
//                   >
//                     <h3>6th June</h3>
//                     <span>Saturday</span>
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className=""
//                     href="#date3"
//                     title="Click Me"
//                     role="tab"
//                     data-toggle="tab"
//                   >
//                     <h3>7th June</h3>
//                     <span>Sunday</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-lg-12">
//             <div className="tab-content schedule-tabs">
//               <div role="tabpanel" className="tab-pane active" id="date1">
//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 9.30 - 10.30 AM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img1}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Marketing Matters!
//                         <strong>@ Fredric Martinsson</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 10.30 - 11.30 AM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img2}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Reinventing Experiences
//                         <strong>@ Melisa Lundryn</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 11.30 - 12.30 PM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img3}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Cultures of Creativity
//                         <strong>@ Johnsson Agaton</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing launce">
//                   <div className="schedule-slot-time">
//                     <span> 12.30 - 01.30 PM</span>
//                   </div>
//                   <div className="schedule-slot-info">
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Lunch Break
//                         <strong>@ Rebecca Henrikon</strong>
//                       </h3>
//                       <a href="#">
//                         <Image src={img4} alt="" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 01.30 - 02.30 PM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img5}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Human Centered Design
//                         <strong>@ Agaton Johnsson</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing-btn">
//                   <a href="#" className="btn">
//                     More Details
//                   </a>
//                 </div>
//               </div>
              
//               <div role="tabpanel" className="tab-pane" id="date2">
//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 02.30 - 03.30 PM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img6}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Marketing Matters!
//                         <strong>@ Johnsson Agaton</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 03.30 - 04.30 PM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img7}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Reinventing Experiences
//                         <strong>@ Fredric Martinsson</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 04.30 - 05.30 PM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img8}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Cultures of Creativity
//                         <strong>@ Hall Building</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 05.30 - 06.30 PM</span>
//                   </div>
//                   <div className="schedule-slot-info">
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Lunch Break
//                         <strong>@ Agaton Johnsson</strong>
//                       </h3>
//                       <a href="#">
//                         <Image src={img9} alt="" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 06.30 - 07.30 PM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img9}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Human Centered Design
//                         <strong>@ Henrikon Rebecca</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing-btn">
//                   <a href="#" className="btn">
//                     More Details
//                   </a>
//                 </div>
//               </div>
//               <div role="tabpanel" className="tab-pane" id="date3">
//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 07.30 - 11.30 PM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img1}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Marketing Matters!
//                         <strong>@ Fredric Martinsson</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 9.30 - 10.30 AM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img2}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Reinventing Experiences
//                         <strong>@ Melisa Lundryn</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 10.30 - 11.30 AM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img3}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Cultures of Creativity
//                         <strong>@ Johnsson Agaton</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing launce">
//                   <div className="schedule-slot-time">
//                     <span> 11.30 - 12.30 PM</span>
//                   </div>
//                   <div className="schedule-slot-info">
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Lunch Break
//                         <strong>@ Rebecca Henrikon</strong>
//                       </h3>
//                       <a href="#">
//                         <Image src={img9} alt="" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing">
//                   <div className="schedule-slot-time">
//                     <span> 12.30 - 01.30 PM</span>
//                     Workshop
//                   </div>
//                   <div className="schedule-slot-info">
//                     <a href="#">
//                       <Image
//                         className="schedule-slot-speakers"
//                         src={img4}
//                         alt=""
//                       />
//                     </a>
//                     <div className="schedule-slot-info-content">
//                       <h3 className="schedule-slot-title">
//                         Human Centered Design
//                         <strong>@ Agaton Johnsson</strong>
//                       </h3>
//                       <p>
//                         How you transform your business as technology, consumer,
//                         habits industry dynamics change? Find out from those
//                         leading the charge. How you transform
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="schedule-listing-btn">
//                   <a href="#" className="btn">
//                     More Details
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
