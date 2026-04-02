import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Services from "../Service/Services";
import ClientLogos from "../../Clients/ClientLogos";
import Features from "../../Features/Features";
import BeMerchant from "../../BeMerchant/BeMerchant";

export default function Home() {
  return (
    <div className="bg-[#f5f7f6] min-h-screen ">

      {/* Navbar */}
      <Navbar></Navbar>

      {/* Banner Section */}
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
        </div>

      {/* Services */}
      <Services></Services>

      {/* Company Logos */}
      <ClientLogos></ClientLogos>

      {/* Features Section */}
      <Features></Features>

      <BeMerchant></BeMerchant>
      {/* Footer */}
      <footer className="bg-[#1f2937] text-gray-300 py-8 text-center">
        © 2026 FASTShift. All rights reserved.
      </footer>
    </div>
  );
}