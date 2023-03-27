import React from 'react';
import logo from '../../assets/Logo.svg'
import Banner from './Banner/Banner';
import './Header.css'
const Header = () => {
  
  const body = document.body;
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if(currentScroll<=0){
        body.classList.remove('scroll-up')
    }
    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }
    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }
    lastScroll = currentScroll
  })

  return (
    <div className='h-auto'>
      <div className='h-16 w-full bg-[#1C2B35]  scroll'>
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
      <Banner />
    </div>
  );
};

export default Header;