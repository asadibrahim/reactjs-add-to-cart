export default function AddToCartReducer(state, action) {
    if (action.type === 'addedtoCart') {
        let { id, image, title, description, price, quantity } = action.payload;
        let TotalPrice = (parseInt(price) * parseInt(quantity));
        let cartProduct = {
            id: id + title,
            title,
            image,
            description,
            price,
            totalPrice: TotalPrice,
            quantity
        }
        let totalItems = state.totalItems + quantity;
        return {
            ...state,
            cart: [
                ...state.cart,
                cartProduct
            ],
            totalItems: totalItems
        };
    }
    if (action.type === 'deleteItem') {
        let Quantity = state.cart.filter((currItem) => currItem.id === action.payload);
        let TotalItems = state.totalItems - Quantity[0]['quantity'];
        let updatedCart = state.cart.filter((currItem) => currItem.id !== action.payload);
        return {
            ...state,
            cart: updatedCart,
            totalItems: TotalItems
        }
    }
}