import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import StudentsPage from "./pages/StudentsPage.jsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/students" element={<StudentsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter