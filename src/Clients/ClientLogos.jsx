import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import logo1 from "../assets/brands/amazon.png";

import logo2 from "../assets/brands/start-people-1.png";
import logo3 from "../assets/brands/casio.png";
import logo4 from "../assets/brands/amazon_vector.png";
import logo5 from "../assets/brands/randstad.png";
import logo6 from "../assets/brands/moonstar.png";
import logo7 from "../assets/brands/start.png";



export default function ClientLogos() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <div className="bg-white py-10 text-orange-500 ">
      <h2 className="text-center text-4xl font-bold mb-10">
        Trusted By
      </h2>

     <Swiper
        
        autoplay={{
          delay: 2000,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center mx-auto">
            <img
              src={logo}
              alt={`client logo ${index}`}
              className="object-cover transition duration-300 mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


{/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
 */}


// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };


//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
       
//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </>
//   );
// }
