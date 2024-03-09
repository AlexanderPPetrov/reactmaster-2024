import ProductsListItem from "./ProductsListItem.jsx";
function ProductsList({ products }) {
    function getProducts() {
        return products.map((product, index) => {
            return <ProductsListItem key={index}
                                     product={product}/>
        })
    }

    return (
        <div className={"row"}>
            {getProducts()}
        </div>
    )
}
export default ProductsList