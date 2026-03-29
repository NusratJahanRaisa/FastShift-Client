import React from 'react';
import { Link } from 'react-router';

export default function LandingPage() {
  return (
    <div className="bg-[#f5f7f6] min-h-screen">
      
      
      
      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-[#f0f2f1] to-[#d9f99d] p-10 flex flex-col md:flex-row items-center justify-between min-h-screen">
        
        
        {/* Left Content */}
        <div className="max-w-xl">

          <h1 className="text-[#1f2937] font-bold text-5xl leading-snug">
          Experience <span className="text-[#84cc16] text-6xl font-bold ">FASTShift</span> – <br />
  
          </h1>
          <br />
          <h1 className="text-4xl font-bold text-[#1f2937] leading-snug">
            We Make Sure Your <br />
            <span className="text-[#84cc16]">Parcel Arrives</span> On Time <br />
            – Fast, Reliable, Effortless.
          </h1>

          <p className="mt-4 text-gray-500">
            FastShift ensures fast, reliable and hassle-free delivery tracking experience.
          </p>

          <Link to="/home">
             <button
                className="btn btn-lg mt-6 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-[#1f2937] transition">
                Go and Track →
             </button>
          </Link>
        </div>

      </section>

    </div>
  );
}