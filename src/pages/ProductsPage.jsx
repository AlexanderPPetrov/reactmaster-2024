import ProductsLayout from "../layouts/ProductsLayout.jsx";
import ProductsContainer from "../components/products/ProductsContainer.jsx";
function ProductsPage() {

    return(
        <ProductsLayout content={<ProductsContainer/>}/>
    )
}

export default ProductsPage