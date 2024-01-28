import { useCartContext } from '../contexts/CartContext';
import '../Cart.css';
function ShoppingCart() {
    const { cart } = useCartContext();
    const { DeleteItem } = useCartContext();
    const totalAmount = cart.reduce((acc, curr) => acc + parseInt(curr.totalPrice), 0);
    if (cart.length === 0) {
        return (
            <div className='mt-5 text-center'>
                <h3 className='mb-5'> No items in cart </h3>
            </div>
        );
    }
    return <>
        <div className="cart">
            <h2>My Cart</h2>
            <table className='CartTable'>
                <tr className='CartHeadRow'>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th className='border-none'></th>
                </tr>
                {cart.map((item) => (
                    <tr className='CartRow'>
                        <td><img className='CartImage' src={item.image} alt={item.title} /><p>{item.title}</p></td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>${item.totalPrice}</td>
                        <td><i class="fas fa-trash-alt" onClick={() => DeleteItem(item.id)}></i></td>
                    </tr>
                ))}
                <tr className='CartRow'>
                    <th>Sub Total</th>
                    <th></th>
                    <th></th>
                    <th>${totalAmount}</th>
                    <th></th>
                </tr>
            </table>
        </div>
    </>
};
export default ShoppingCart;