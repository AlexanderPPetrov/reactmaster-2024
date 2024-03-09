import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import StudentsPage from "./pages/StudentsPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/students" element={<StudentsPage/>}/>
                <Route path="/products" element={<ProductsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter