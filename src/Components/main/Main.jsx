import React, { useState } from 'react';
import Shop from './Shop/Shop';
import ShopAsid from './Shop/Shop-Asid/ShopAsid';

const Main = () => {
    const [cart,setCart] = useState([])
    const handleAddToCartBtn = (product)=>{
        const newProduct = [...cart,product]
        setCart(newProduct)
    }
    return (
        <div className='container mx-auto mt-20 grid grid-cols-5 w-full'>
            <div className=' col-span-4'>
                <Shop handleAddToCartBtn={handleAddToCartBtn} />
            </div>
            <div className=' col-span-1'>
                <ShopAsid cart ={cart}/>
            </div>
        </div>
    );
};

export default Main;