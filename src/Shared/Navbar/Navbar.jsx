import React from 'react';
import NoBGLogo from '../Logo/NoBGLogo';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="w-11/12 mx-auto px-6 py-2 flex justify-between items-center">
          <div>
            <NoBGLogo></NoBGLogo>
          </div>
          <nav className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-[#84cc16] font-medium">Home</a>
            <a href="/track" className="text-gray-700 hover:text-[#84cc16] font-medium">Track</a>
            <a href="/about" className="text-gray-700 hover:text-[#84cc16] font-medium">About</a>
          </nav>
        </div>
      </nav>
    );
};

export default Navbar;