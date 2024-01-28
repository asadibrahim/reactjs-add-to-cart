import ProductsList from "../consts/ProductsList";
import { NavLink } from 'react-router-dom';
import '../Products.css';
function Products() {
    return (
        <div className="Products-List">
            <h2 className="">Products</h2>
            <div className="product-container">
                {ProductsList.map((product) => (
                    <div key={product.id} className="product-card">
                        <div>
                            <h3>
                                <NavLink to={`/product/${product.id}`}>
                                    {product.title}
                                </NavLink>
                            </h3>
                        </div>
                        <div>
                            <img
                                src={product.image}
                                alt={product.title}
                            />
                        </div>
                        <div>
                            <p>${product.price}</p>
                        </div>
                        <div>
                            <NavLink to={`/product/${product.id}`}>
                                Details
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Products;