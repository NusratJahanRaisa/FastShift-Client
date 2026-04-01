import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode"; // নতুন সিএসএস ইম্পোর্ট

// Modules আপডেট
import { Autoplay, FreeMode } from "swiper/modules";

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
    <div className="bg-white py-10 overflow-hidden">
      <h2 className="text-center text-4xl font-bold mb-10">Trusted By</h2>

      <Swiper
        modules={[Autoplay, FreeMode]} 
        slidesPerView={5}
        spaceBetween={50}
        loop={true}
        speed={2000} 
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}
        className="mySwiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`logo-${index}`}
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}