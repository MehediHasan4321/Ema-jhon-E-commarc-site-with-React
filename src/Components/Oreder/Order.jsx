import React, { useState } from 'react';
import ShopAsid from '../main/Shop/Shop-Asid/ShopAsid';
import { useLoaderData } from 'react-router-dom';
import SingleOrder from './SingleOrder/SingleOrder';
import { removeFromDb } from '../../../utilities/fakedb';

const Order = () => {
    const products = useLoaderData()
    const [cart,setCart] = useState(products)
    const deleteCart =id=>{
        const remaingn = cart.filter(pro=> pro.id !== id)
        setCart(remaingn)
        removeFromDb(id)
    }
    return (
        <div className=' container mx-auto grid grid-cols-4 gap-3 mt-20'>
            <div className=' col-span-3'>
                {
                    cart.map(pro=><SingleOrder key={pro.id} product={pro} deleteCart={deleteCart}/>)
                }
            </div>
            <div className=' col-span-1'>
                <ShopAsid cart={cart} />
            </div>
        </div>
    );
};

export default Order;