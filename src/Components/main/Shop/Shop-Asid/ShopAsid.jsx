import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const ShopAsid = ({cart}) => {
    const carts = cart
    let totalPrice = 0
    let quantity = 0
    let totalShipingCost = 0
    for (const product of carts) {
        product.quantity = product.quantity || 1
        totalPrice = totalPrice + product.price * product.quantity
        totalShipingCost += product.shipping
        quantity = quantity + product.quantity
    }
    const tax = totalPrice * 7 /100
    const grundTotal = totalPrice + totalShipingCost + tax
    return (
        <div className=' bg-amber-200 min-h-[550px] w-[350px] sticky top-0 relative '>
            <h1 className='text-2xl text-center pt-4'>Order Summary</h1>
            <div className='p-4 space-y-4 text-lg font-semibold'>
                <p>Total Order : {quantity}</p>
                <hr className='border-black'/>
                <p>Total Price : ${totalPrice.toFixed(2)}</p>
                <hr className='border-black'/>
                <p>Total Shiping Charge : ${totalShipingCost.toFixed(2)}</p>
                <hr className='border-black'/>
                <p>Tax : ${ tax.toFixed(2)}</p>
                <hr className='border-black'/>
                <h6 className='text-xl'>Payable Total : ${grundTotal.toFixed(2) }</h6>
                <hr className='border-black'/>
            </div>
            <div className=' w-full absolute bottom-0 p-2 space-y-2'>
                <button className=' bg-pink-600 px-4 py-2  text-lg font-semibold text-white w-full rounded-md'>Clear All Cart <i class=" ml-2 fa-solid fa-trash"></i> </button>
                <button className='bg-pink-600 px-4 py-2  text-lg font-semibold text-white w-full rounded-md'><Link to={'/checkOut'} className='w-full'> Process to checkout <i class=" ml-2 fa-solid fa-check"></i></Link></button>
            </div>
        </div>
    );
};

export default ShopAsid;