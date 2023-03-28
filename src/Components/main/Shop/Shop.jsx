
import ShopingCart from './ShopingCart/ShopingCart';

const Shop = (props) => {
   const carts = props.carts
    return (
        <div className='flex gap-8 flex-wrap'>
            {
                carts.map(cart=><ShopingCart key={cart.id} handleAddToCartBtn={props.handleAddToCartBtn} cart ={cart} />)
            }
        </div>
    );
};

export default Shop;