import React from 'react';
import bg from '../assets/All/location-merchant.png'

const BeMerchant = () => {
  return (
    <section className="w-11/12 mx-auto mb-10">
      <div className="mx-auto">
        {/* Main Banner Container */}
        <div className="w-full rounded-[48px] overflow-hidden bg-[#003131] flex items-center shadow-2xl">


          {/* Content Wrapper */}
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center px-8 md:px-20 py-12">
            
            {/* Left Content (2/3 width on desktop) */}
            <div className='flex flex-row justify-center items-center'>
                <div className="w-full md:w-2/3 text-white space-y-8 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                Merchant and Customer Satisfaction <br className="hidden md:block" /> 
                is Our First Priority
              </h2>
              
              <p className="text-gray-300 text-lg md:text-base max-w-2xl leading-relaxed">
                We offer the lowest delivery charge with the highest value along with 100% safety of your product. FASTShift courier delivers your parcels in every corner of Bangladesh right on time.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                <button className="bg-[#B6E330] hover:bg-[#a5cf2b] text-[#003131] font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
                  Become a Merchant
                </button>
                
                <button className="border-2 border-[#B6E330] text-[#B6E330] hover:bg-[#B6E330] hover:text-[#003131] font-bold py-4 px-10 rounded-full transition duration-300 shadow-md">
                  Earn with Us
                </button>
              </div>
            </div>

            <div className="flex justify-end">
                <img src={bg} className="justify-end object-contain" />
            </div>
        </div>

          </div>
        </div>

        
      </div>
    </section>
  );
};

export default BeMerchant;