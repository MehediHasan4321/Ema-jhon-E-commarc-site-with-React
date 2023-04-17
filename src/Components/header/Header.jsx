import React from 'react';
import logo from '../../assets/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  
  const body = document.body;
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if(currentScroll>lastScroll){
      body.classList.add('scroll-down')
    }
    else{
      body.classList.remove('scroll-down')
    }
    lastScroll = currentScroll
  })

  return (
    <div className='h-auto'>
      <div className='h-16 w-full bg-[#1C2B35]  scroll'>
        <nav className='container mx-auto flex justify-between items-center h-full'>
          <img src={logo} alt="" />
          <div className='text-white flex gap-8'>
            <Link  to='products'>Products</Link>
            <Link to="/order">Order</Link>
            <Link to="/orderReview">Order Review</Link>
            <Link to="/inventory">Inventory Management</Link>
            <Link to="/logIn">Log-in</Link>
            <Link to={'/signUp'}>Sign Up</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;