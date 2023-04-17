import { getShoppingCart } from "../../utilities/fakedb";

const cartProdcutLodaded = async ()=>{
    const lodedData = await fetch('products.json');
    const products = await lodedData.json()
    const newPoduct = []
    const saveCarts = getShoppingCart()
    for(const id in saveCarts){
        const addedProduct = products.find(pro=>pro.id === id)
        const quantity = saveCarts[id]
        addedProduct.quantity = quantity
        newPoduct.push(addedProduct)
    }
   
    return newPoduct
}

export default cartProdcutLodaded