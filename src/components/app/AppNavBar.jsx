import {
    Navbar,
    Container,
    Nav,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function AppNavBar() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Master course 2024</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink}
                                  to="/"
                                  activeclassname={"active"}>Начало</Nav.Link>
                        <Nav.Link as={NavLink}
                                  to="/students"
                                  activeclassname={"active"}
                        >Студенти</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavBar