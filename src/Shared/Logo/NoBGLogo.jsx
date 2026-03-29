import React from 'react';
import logo from '../../assets/logo_no_bg.png'

const NoBGLogo = () => {
    return (
        <div className='h-14'>
            
            <img src={logo} className='h-full w-full object-contain'>
            </img>
        </div>
    );
};

export default NoBGLogo;