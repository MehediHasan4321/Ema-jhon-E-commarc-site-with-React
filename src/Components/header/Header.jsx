import React from 'react';
import logo from '../../assets/Logo.svg'
const Header = () => {
    return (
        <div className='h-16 w-full bg-[#1C2B35]'>
        <nav className='container mx-auto flex justify-between items-center h-full'>
          <img src={logo} alt="" />
          <div className='text-white flex gap-8'>
            <a href="#">Order</a>
            <a href="#">Order Review</a>
            <a href="#">Inventory Management</a>
            <a href="/log-in">Log-in</a>
          </div>
        </nav>
    </div>
    );
};

export default Header;