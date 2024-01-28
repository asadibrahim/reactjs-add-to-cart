
import React, { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';
import ProductsList from '../consts/ProductsList';
import ShoppingCart from './ShoppingCart';
function ProductDetails({ ProductId }) {
    const { AddToCart } = useCartContext();
    const ProductDescription = ProductsList.filter(record => parseInt(record.id) === parseInt(ProductId.id));
    const [ItemQuantity, SetItemQuantity] = useState(1);
    return (
        <div className="product-details-container">
            <div className="product-image">
                <img
                    src={ProductDescription[0].image}
                    alt=""
                />
            </div>
            <div className="product-info">
                <div>
                    <h2>{ProductDescription[0].title}</h2>
                </div>
                <p>{ProductDescription[0].description}</p>
                <p><span>{ProductDescription[0].price}</span></p>
                <div className="quantity-container">
                    <label>Quantity</label>
                    <div>
                        <button onClick={() => { ItemQuantity > 1 && SetItemQuantity(ItemQuantity - 1) }}>
                            <span>-</span>
                        </button>
                        <input type="number" value={ItemQuantity} />
                        <button onClick={() => { ItemQuantity < 10 && SetItemQuantity(ItemQuantity + 1) }}>
                            <span>+</span>
                        </button>
                    </div>
                </div>
                <div >
                    <button className="add-to-cart-button" onClick={() => AddToCart(ProductDescription[0].id, ProductDescription[0].image, ProductDescription[0].title, ProductDescription[0].description, ProductDescription[0].price, ItemQuantity)}>
                        Add to Cart
                    </button>
                </div>
                <div>
                    <ShoppingCart />
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;