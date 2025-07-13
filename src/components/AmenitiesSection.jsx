// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "../styles/AmenitiesSection.css";

// function AmenitiesSection() {
//   const images = [
//     "https://urbanranch.irarealty.in/_next/static/media/c1mv.0fb2d028.webp",
//     "https://urbanranch.irarealty.in/_next/static/media/c1mv.0fb2d028.webp",
//     "https://urbanranch.irarealty.in/_next/static/media/c1mv.0fb2d028.webp",
//   ];

//   return (
//     <section className="amenities-section text-white">
//       <div className="container px-3 px-md-5">
//         <div className="d-flex flex-column mt-2 mb-5 flex-wrap justify-content-center align-items-center gap-4">
//           {/* Left Column */}
//           <div
//             className="p-4"
//             style={{
//               flex: "1 1 45%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               justifyContent: "center",
//               borderRadius: "12px",
//             }}
//           >
//             <span className="amenities-title mb-3">
//               Community & Amenities
//             </span>
//             <h2 className="amenities-heading fw-bold mb-4">
//               A Lifestyle that Breathes <br /> and Belongs
//             </h2>

//             <div className="amenities-category mb-3">
//               <h5 className="category-title mb-2">
//                 Social & Community Spaces
//               </h5>
//               <ul className="category-list ps-3">
//                 <li>Grand Clubhouse, Banquet Hall, Guest Suites</li>
//                 <li>Party Lawns, Amphitheater, Café‑style seating</li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Column: Swiper Slider */}
//           <div
//             style={{
//               flex: "1 1 45%",
//               maxWidth: "400px",
//               width: "100%",
//               height: "100%",
//             }}
//           >
//             <Swiper
//               modules={[Pagination]}
//               spaceBetween={10}
//               slidesPerView={1}
//               pagination={{ clickable: true }}
//               className="swiper-amenities"
//               style={{
//                 borderRadius: "12px",
//               }}
//             >
//               {images.map((src, index) => (
//                 <SwiperSlide
//                   key={index}
//                   className="d-flex justify-content-center align-items-center swiperamenities"
//                 >
//                   <img
//                     src={src}
//                     alt={`Amenity Slide ${index + 1}`}
//                     className="rounded img-fluid w-100"
//                     style={{
//                       height: "250px",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AmenitiesSection;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/AmenitiesSection.css";

function AmenitiesSection() {
  const images = [
    "https://urbanranch.irarealty.in/_next/static/media/c1mv.0fb2d028.webp",
    "https://urbanranch.irarealty.in/_next/static/media/c1mv.0fb2d028.webp",
    "https://urbanranch.irarealty.in/_next/static/media/c1mv.0fb2d028.webp",
  ];

  return (
    <section className="amenities-section text-white">
      <div className="container px-3 ">
        <div className=" mt-2 mb-5  gap-4">
          {/* Left Column */}
          <div
            className="p-4"
            style={{
         
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              borderRadius: "12px",
            }}
          >
            <span className="amenities-title mb-3">
              Community & Amenities
            </span>
            <h2 className="amenities-heading fw-bold mb-4">
              A Lifestyle that Breathes <br /> and Belongs
            </h2>

            <div className="amenities-category mb-3">
              <h5 className="category-title mb-2">
                Social & Community Spaces
              </h5>
              <ul className="category-list ps-3">
                <li>Grand Clubhouse, Banquet Hall, Guest Suites</li>
                <li>Party Lawns, Amphitheater, Café‑style seating</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Swiper Slider */}
          <div
            style={{
             
              maxWidth: "100%",
              width: "100%",
              height: "100%",
            }}
          >
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={2.5}
              centeredSlides={true}
              loop={true}
              loopAdditionalSlides={images.length}
              pagination={{ clickable: true }}
              className="swiper-amenities"
              style={{ borderRadius: "12px" }}
            >
              {images.map((src, index) => (
                <SwiperSlide
                  key={index}
                  className="d-flex justify-content-center align-items-center swiperamenities w-100"
                >
                  <img
                    src={src}
                    alt={`Amenity Slide ${index + 1}`}
                    className=" img-fluid "
                    style={{
                      height: "170px",
                      width:"250px",
                      objectFit:"scale-down"
                   
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AmenitiesSection;
