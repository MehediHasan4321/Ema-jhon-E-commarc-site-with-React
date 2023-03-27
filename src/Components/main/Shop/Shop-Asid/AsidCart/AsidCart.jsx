import React, { useState } from 'react';

const AsidCart = (props) => {
    const { img, price } = props.cart;
    const [productPrice, setProductPrice] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const handlePluseBtn = (price) => {
        setQuantity(quantity + 1)
        setProductPrice(productPrice + price)
    }
    const handleMinusBtn = (price) => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            setProductPrice(productPrice - price)
        }
        
    }
    return (
        <div className='flex justify-around items-center mt-2 gap-2 w-full bg-gray-100'>
            <img className='w-[80px] h-[80px]' src={img} alt="Product images" />
            <div className='flex items-center gap-3'>
                <button onClick={() => handlePluseBtn(price)} className='bg-amber-200 px-2 text-lg rounded-md'>+</button>
                <p>{quantity}</p>
                <button onClick={() => handleMinusBtn(price)} className='bg-amber-200 px-2 text-lg rounded-md'>-</button>
            </div>
            <p>${productPrice}</p>
            <span className='text-xl cursor-pointer'><i className="fa-regular fa-trash-can"></i></span>
        </div>
    );
};

export default AsidCart;