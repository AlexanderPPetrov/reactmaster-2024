import AppNavBar from "../components/app/AppNavBar.jsx";
function ProductsLayout({ content }) {
    return (
        <>
            <AppNavBar/>
            <div className="container mt-5">
                { content }
            </div>
        </>
    )
}
export default ProductsLayout