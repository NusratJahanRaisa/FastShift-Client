import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-[#f5f7f6] min-h-screen">

      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero / Welcome Section */}
      <section className="bg-gradient-to-r from-[#f0f2f1] to-[#d9f99d] p-10 flex flex-col md:flex-row items-center justify-between min-h-[60vh]">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f2937] leading-snug">
            Welcome to <span className="text-[#84cc16]">FASTShift</span>
          </h1>
          <p className="mt-4 text-gray-700">
            Track, manage, and ensure your parcels arrive on time with ease. FASTShift makes delivery fast, reliable, and hassle-free.
          </p>
          <button className="btn btn-lg mt-6 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-[#1f2937] transition">
            Track Your Parcel →
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="w-[300px] h-[250px] bg-[#e5e7eb] rounded-2xl flex items-center justify-center">
            <span className="text-gray-400">Illustration</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#1f2937] text-center mb-12">Why Choose FASTShift?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1f2937] mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your parcels delivered on time, every time. Speed is our promise.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1f2937] mb-2">Real-Time Tracking</h3>
            <p className="text-gray-600">
              Track your parcel at every step with our live tracking system.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1f2937] mb-2">Hassle-Free</h3>
            <p className="text-gray-600">
              Simple, easy, and stress-free delivery experience for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-[#84cc16] py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ship?</h2>
        <p className="mb-6">Start tracking and managing your parcels effortlessly with FASTShift.</p>
        <button className="btn btn-lg px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-[#1f2937] transition">
          Get Started →
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f2937] text-gray-300 py-8 text-center">
        © 2026 FASTShift. All rights reserved.
      </footer>
    </div>
  );
}