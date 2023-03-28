import React, { useState, useEffect } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Shop from './Shop/Shop';
import ShopAsid from './Shop/Shop-Asid/ShopAsid';

const Main = () => {
    const [cart, setCart] = useState([])
    const [carts, setCarts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])


    useEffect(() => {
        const newCart = []
        const savedCart = getShoppingCart()
        for (const id in savedCart) {
            const saveProduct = carts.find(cart => cart.id === id)
            if (saveProduct) {
                const quantity = savedCart[id]
                saveProduct.quantity = quantity ===0 ? 1 : quantity
                newCart.push(saveProduct)
            
            }

        }
        setCart(newCart)
    }, [carts])


    const handleAddToCartBtn = (product) => {
        addToDb(product.id)
        const newProduct = [...cart, product]
        setCart(newProduct)
    }

    return (
        <div className='container mx-auto mt-20 grid grid-cols-5 w-full'>
            <div className=' col-span-4'>
                <Shop handleAddToCartBtn={handleAddToCartBtn} carts={carts} />
            </div>
            <div className=' col-span-1'>
                <ShopAsid cart={cart} />
            </div>
        </div>
    );
};

export default Main;