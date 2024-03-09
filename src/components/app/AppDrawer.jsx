import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

function AppDrawer() {

    //Drawer state (shown or not shown)
    //TODO react state from redux (store)
    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false);

    return(
        <Offcanvas show={show}
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