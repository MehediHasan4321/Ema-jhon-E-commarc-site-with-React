import React, { useContext } from 'react';
import logo from '../../assets/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { authincation } from '../../AuthProvider/AuthProvider';
const Header = () => {

  const body = document.body;
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
      body.classList.add('scroll-down')
    }
    else {
      body.classList.remove('scroll-down')
    }
    lastScroll = currentScroll
  })
  const { logOut, isUser } = useContext(authincation)
  const handleLogOut = () => {
    logOut()
  }

  return (
    <div className='h-auto'>
      <div className='h-16 w-full bg-[#1C2B35]  scroll'>
        <nav className='container mx-auto flex justify-between items-center h-full'>
          <img src={logo} alt="" />
          <div className='text-white flex gap-8'>
            <Link to='products'>Products</Link>
            <Link to="/order">Order</Link>
            <Link to="/orderReview">Order Review</Link>
            <Link to="/inventory">Inventory Management</Link>
            {
              isUser ? <p className=' cursor-pointer' onClick={handleLogOut}>LogOut</p> : <Link to="/logIn">Log-in</Link>
            }
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;