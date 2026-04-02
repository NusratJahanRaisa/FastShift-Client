import React from 'react';
import { Outlet } from 'react-router';
import img from '../assets/All/authImage.png'
import NoBGLogo from '../Shared/Logo/NoBGLogo';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#faf8f8] flex items-center justify-center ">

      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        
        <div className=''>
            <div className='flex pt-3 ml-12' >
               <NoBGLogo></NoBGLogo>
            </div>
            <div className='border'>
                <Outlet></Outlet>
            </div>
        </div>

        <div className="bg-[#f2f9e6] flex items-center justify-center p-8 relative min-h-screen">
          <div className="w-full flex justify-center items-center">
               <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;