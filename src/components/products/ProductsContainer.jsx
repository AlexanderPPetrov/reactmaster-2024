import ProductsList from "./ProductsList.jsx";
import { useFetchProducts } from "../hooks/useFetchProducts.js";

function ProductsContainer () {
    const { data } = useFetchProducts()
    const products = data || []
    return (
        <ProductsList products={products}/>
    )
}

export default ProductsContainer