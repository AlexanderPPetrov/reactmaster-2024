import { Offcanvas } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { setDrawerOpened } from "../../redux/slices/application.js";

function AppDrawer() {

    const dispatch = useDispatch()

    const drawerOpened = useSelector( state => {
        return state.application.drawerOpened
    })

    const handleClose = () => {
        dispatch(setDrawerOpened(false))
    };

    return(
        <Offcanvas show={drawerOpened}
                   onHide={handleClose}
                   placement={"end"}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Количка</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default AppDrawer