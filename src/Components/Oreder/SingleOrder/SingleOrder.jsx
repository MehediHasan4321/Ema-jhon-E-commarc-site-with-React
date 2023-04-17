import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
const SingleOrder = ({ product,deleteCart }) => {
    const { name, img, id, quantity, price } = product
    return (
        <div className=' border-2 w-2/3 m-4 rounded p-2 flex justify-between items-center'>
            <div className='flex gap-4 '>
                <img className='w-32 rounded ' src={img} alt="" />
                <div className=' my-auto'>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <p className='text-lg'>Price : ${price}</p>
                    <p className='text-lg'>Quantity : {quantity}</p>
                </div>

            </div>
            <span onClick={()=>deleteCart(id)}><TrashIcon className='w-12 h-12 mr-6 text-purple-400 bg-amber-200 rounded-full px-1 py-2 ' /> </span>
        </div>
    );
};

export default SingleOrder;