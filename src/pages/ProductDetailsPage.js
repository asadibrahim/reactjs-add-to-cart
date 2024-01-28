import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import '../ProductDetails.css';
function ProductDetailsPage() {
    const ProductId = useParams();
    return (
        <ProductDetails ProductId={ProductId} />
    )
}
export default ProductDetailsPage;