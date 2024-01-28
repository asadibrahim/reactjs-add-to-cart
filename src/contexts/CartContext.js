import { createContext, useContext, useReducer, useEffect } from "react";
import { v4 as uuid } from "uuid";
import AddToCartReducer from "../reducers/CreateCartReducer";
const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartItems");
    if (localCartData.length === 0) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};
const initialstate = {
    cart: getLocalCartData(),
    totalItems: 0

};
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AddToCartReducer, initialstate);
    const AddToCart = (id, image, title, description, price, ItemQuantity) => {
        dispatch({
            type: 'addedtoCart',
            payload: {
                id: uuid(),
                image,
                title,
                description,
                price,
                quantity: ItemQuantity,
            }
        });
    }
    const DeleteItem = (id) => {
        dispatch({
            type: 'deleteItem',
            payload: id
        })
    }
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, AddToCart, DeleteItem }}>
            {children}
        </CartContext.Provider>
    )
}
const useCartContext = () => {
    return useContext(CartContext);
}
export { CartProvider, useCartContext }