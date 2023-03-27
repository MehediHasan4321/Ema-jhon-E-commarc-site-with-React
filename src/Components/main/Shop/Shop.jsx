import React, { useEffect, useState } from 'react';
import ShopingCart from './ShopingCart/ShopingCart';

const Shop = (props) => {
    const [carts,setCarts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])
    return (
        <div className='flex gap-8 flex-wrap'>
            {
                carts.map(cart=><ShopingCart key={cart.id} handleAddToCartBtn={props.handleAddToCartBtn} cart ={cart} />)
            }
        </div>
    );
};

export default Shop;