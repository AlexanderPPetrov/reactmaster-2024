import { Button, Toast, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import { removeProduct } from "../../redux/slices/products.js";


function CartToast() {

    const dispatch = useDispatch()

    const selectedProducts = useSelector((state) => {
        return state.products.selectedProducts
    })

    const onRemoveProduct = (product) => {
        dispatch(removeProduct(product))
    }

    //TODO create _cart.scss and move current inline style definitions there
    const cartProducts = () => {
        return selectedProducts.map((product, index) => {
            const key = `${product.id}_${index}`
            return <ListGroup.Item key={key}>
                <div className={"d-flex justify-content-between"}>
                    <span style={{flex: "0 0 80%"}} className={"text-truncate"}>{product.title}</span>
                    <CiCircleRemove style={{cursor: "pointer"}} size={20} onClick={() => onRemoveProduct(product)}/>
                </div>
            </ListGroup.Item>
        })
    }

    //TODO add logic to toggle drawer navigation (offside)
    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 999,
        }}>
            <Toast show={Boolean(selectedProducts.length)} >
                <Toast.Header>
                    <strong className="me-auto">Cart</strong>
                    <small>Items ({selectedProducts.length})</small>
                </Toast.Header>
                <Toast.Body>
                    <ListGroup style={{
                        paddingRight: "10px",
                        overflowY: "auto",
                        maxHeight: "260px",
                    }}>
                        { cartProducts()}
                    </ListGroup>
                    <Button variant={"outline-success mt-3"}>Open Cart</Button>
                </Toast.Body>
            </Toast>
        </div>

    );
}

export default CartToast;