import React from 'react';
import AsidCart from './AsidCart/AsidCart';

const ShopAsid = (props) => {
    const carts = props.cart
    return (
        <div className=' bg-amber-200 h-screen w-[350px] '>
            <h1 className='text-2xl text-center pt-4'>Order Summary</h1>
            <p className='mt-4 ml-4'>Total Order : {carts.length < 10 ? '0' + carts.length : carts.length}</p>
            <div className='px-4 mt-5'>
                {
                    carts.map(cart=><AsidCart key={cart.id} cart={cart}/>)
                }
            </div>
        </div>
    );
};

export default ShopAsid;