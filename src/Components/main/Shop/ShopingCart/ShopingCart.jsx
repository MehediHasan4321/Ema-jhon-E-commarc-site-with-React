import React from 'react';

const ShopingCart = ({cart,handleAddToCartBtn}) => {
    const {img,price,name,ratings,seller} = cart

    return (
        <div className='w-[350px] h-[550px] rounded border-2 border-gray-200 relative'>
            <img className='p-1 rounded' src={img ? img : 'images not found'} alt="Single Product images" />
            <div className='px-4 mt-4 space-y-2'>
                <h4 className='text-xl'> {name}</h4>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <small>Ratings : {ratings}</small>
            </div>
            <button onClick={()=>handleAddToCartBtn(cart)} className='w-full py-2 bg-amber-200 hover:bg-amber-400 text-lg absolute bottom-0'>Add To Cart <i class="fa-solid fa-cart-plus"></i></button>
        </div>
    );
};

export default ShopingCart;