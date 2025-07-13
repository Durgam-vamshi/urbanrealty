import React from "react";
import "../styles/MasterPlan.css";

function MasterPlan() {
  return (
    <div className="master-plan-section">
      <div className="container">
        <div className="master-plan-wrapper p-4 rounded-4 bg-light">
          <div className="d-flex flex-row master-plan-con flex-lg-row g-5 align-items-start">

            {/* LEFT SIDE */}
            <div className="col-lg-7 d-flex flex-column">
              <h3 className="mb-3  Heading">Master Plan</h3>

              <div className="download-button-container d-none d-lg-flex">
                <button className="download-button large">Download Brochure</button>
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <img
                  alt="Master plan image"
                  width="329"
                  height="239"
                  decoding="async"
                  data-nimg="1"
                  className="img-fluid align-self-center w-100"
                  src="https://urbanranch.irarealty.in/_next/static/media/mpdesktop.26e5b3f0.webp"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-12 col-lg-5 rounded-4 py-3 mt-2">
              <div className="legend-container p-4">
                <h3 className="mb-4 fw-bold Heading">Legend</h3>

                <div className="row">
                  {[
                    ["1.", "Entry/exit with security cabin", "13.", "Mini soccer"],
                    ["2.", "Primary street", "14.", "Outdoor gym"],
                    ["3.", "Pedestrian walkway", "15.", "Picnic Zone"],
                    ["4.", "Multipurpose lawn with stepped sitting", "16.", "Shade structure with yoga/meditation"],
                    ["5.", "Stage with feature wall", "17.", "Play lawn"],
                    ["6.", "Sunken seating with fire pit", "18.", "Half basketball court with seating gallery"],
                    ["7.", "Swimming pool", "19.", "Tennis court"],
                    ["8.", "Shade structure and lounge seating", "20.", "Feature wall with sculpture"],
                    ["9.", "Car parking", "21.", "Skating rink"],
                    ["10.", "Driveway", "22.", "Informal seating"],
                    ["11.", "Plaza", "23.", "Edible garden"],
                    ["12.", "Children's play area", "", ""],
                  ].map(([num1, text1, num2, text2], index) => (
                    <div className="row mb-2 legend-con" key={index}>
                      <div className="col-6 d-flex align-items-start legend-item">
                        <span className="me-2">{num1}</span>
                        <span>{text1}</span>
                      </div>
                      <div className="col-6 d-flex align-items-start legend-item">
                        <span className="me-2">{num2}</span>
                        <span>{text2}</span>
                      </div>
                    </div>
                  ))}
                </div>


              </div>
                <div className="download-button-container  mt-4">
                  <button className=" download-button-larger">Download Brochure</button>
                </div>              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterPlan;




















// function MasterPlan() {
//   return (
//     <div className="master-plan-section">
//       <div className="container">
//         <div className="d-flex flex-column flex-lg-row g-5 align-items-start">
//           <div className="col-lg-7 d-flex flex-column">
//             <div>
//               <h3 className="mb-3 fw-bold Heading">Master Plan</h3>
//               <div className="download-button-container d-none d-lg-block">
//                 <button className="download-button mb-3">Download Brochure</button>
//               </div>
//               <div className="d-flex align-items-center justify-content-center">
//                 <img
//                   alt="Master plan image"
//                   width="329"
//                   height="239"
//                   decoding="async"
//                   data-nimg="1"
//                   className="img-fluid align-self-center w-100"
//                   src="https://urbanranch.irarealty.in/_next/static/media/mpdesktop.26e5b3f0.webp"
//                   style={{ color: "transparent" }}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-lg-5 rounded-4 py-3 mt-2">
//             <div className="bg-light p-4 legend-container">
//               <h3 className="mb-4 fw-bold Heading">Legend</h3>
//               <div className="row">
//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">1.</span>
//                     <span>Entry/exit with security cabin</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">13.</span>
//                     <span>Mini soccer</span>
//                   </div>
//                 </div>

//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">2.</span>
//                     <span>Primary street</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">14.</span>
//                     <span>Outdoor gym</span>
//                   </div>
//                 </div>

//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">3.</span>
//                     <span>Pedestrian walkway</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">15.</span>
//                     <span>Picnic Zone</span>
//                   </div>
//                 </div>

//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">4.</span>
//                     <span>Multipurpose lawn with stepped sitting</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">16.</span>
//                     <span>Shade structure with yoga/meditation</span>
//                   </div>
//                 </div>

//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">5.</span>
//                     <span>Stage with feature wall</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">17.</span>
//                     <span>Play lawn</span>
//                   </div>
//                 </div>

//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">6.</span>
//                     <span>Sunken seating with fire pit</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">18.</span>
//                     <span>Half basketball court with seating gallery</span>
//                   </div>
//                 </div>

//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">7.</span>
//                     <span>Swimming pool</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">19.</span>
//                     <span>Tennis court</span>
//                   </div>
//                 </div>

//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">8.</span>
//                     <span>Shade structure and lounge seating</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">20.</span>
//                     <span>Feature wall with sculpture</span>
//                   </div>
//                 </div>

//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">9.</span>
//                     <span>Car parking</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">21.</span>
//                     <span>Skating rink</span>
//                   </div>
//                 </div>

//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">10.</span>
//                     <span>Driveway</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">22.</span>
//                     <span>Informal seating</span>
//                   </div>
//                 </div>

//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">11.</span>
//                     <span>Plaza</span>
//                   </div>

//                   <div className="row mb-2">
//                   </div>

//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">23.</span>
//                     <span>Edible garden</span>
//                   </div>
//                 </div>

//                 <div className="row mb-2">
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2">12.</span>
//                     <span>Children's play area</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-start legend-item">
//                     <span className="me-2"></span>
//                     <span></span>
//                   </div>
//                 </div>
//               </div>
//               <div className="download-button-container d-block d-lg-none mt-4">
//                 <button className="download-button">Download Brochure</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
