import {Button, Toast} from 'react-bootstrap';

function CartToast() {
    //TODO should be visible only if there are items in the cart
    //TODO fix template to match a real Cart
    //TODO add logic to toggle drawer navigation (offside)
    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 999,
        }}>
            <Toast show={true} >
                <Toast.Header>
                    <strong className="me-auto">Cart</strong>
                    <small>Items (2)</small>
                </Toast.Header>
                <Toast.Body>
                    <span>Мъжки дънки</span>
                    <Button variant={"outline-success"}>Open Cart</Button>
                </Toast.Body>
            </Toast>
        </div>

    );
}

export default CartToast;