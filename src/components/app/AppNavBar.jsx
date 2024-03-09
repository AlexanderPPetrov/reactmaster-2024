import {
    Navbar,
    Container,
    Nav,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown.jsx";

function AppNavBar() {
    const { t } = useTranslation()
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Master course 2024</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink}
                                  to="/"
                                  activeclassname={"active"}
                        >{t('navbar.home')}</Nav.Link>
                        <Nav.Link as={NavLink}
                                  to="/students"
                                  activeclassname={"active"}
                        >{t('navbar.students')}</Nav.Link>
                        <Nav.Link as={NavLink}
                                  to="/products"
                                  activeclassname={"active"}
                        >{t('navbar.products')}</Nav.Link>
                    </Nav>
                    <LanguageDropdown/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavBar