import { Button, Toast, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import { removeProduct } from "../../redux/slices/products.js";
import {setDrawerOpened} from "../../redux/slices/application.js";


function CartToast() {

    const dispatch = useDispatch()

    const selectedProducts = useSelector((state) => {
        return state.products.selectedProducts
    })

    const onRemoveProduct = (product) => {
        dispatch(removeProduct(product))
    }

    const getUniqueProducts = () => {
        const uniqueProducts = []
        selectedProducts.forEach(product => {
            const matchedProduct = uniqueProducts.find(({id})=> {
                return id === product.id
            })

            if(!matchedProduct) {
                uniqueProducts.push({...product, count: 1})
            } else {
                matchedProduct.count = matchedProduct.count + 1
            }
        })

        return uniqueProducts
    }

    function getTotalPrice() {
        const total =  selectedProducts.reduce((acc, product) => {
            return acc + product.price
        }, 0)
        return total.toFixed(2)
    }

    //TODO create _cart.scss and move current inline style definitions there
    const cartProducts = () => {
        return getUniqueProducts().map((product) => {
            return <ListGroup.Item key={product.id}>
                <div className={"d-flex justify-content-between"}>
                    <span style={{flex: "0 0 80%"}} className={"text-truncate"}>
                        <strong>({product.count}) </strong>
                        {product.title}
                    </span>
                    <CiCircleRemove style={{cursor: "pointer"}} size={20} onClick={() => onRemoveProduct(product)}/>
                </div>
            </ListGroup.Item>
        })
    }

    function openAppDrawer() {
        dispatch(setDrawerOpened(true))
    }
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
                    <div className={"d-flex justify-content-between align-items-center"}>
                        <Button onClick={openAppDrawer}
                            variant={"outline-success mt-3"}>Open Cart</Button>
                        <div className={"fw-bold text-primary"} style={{fontSize: "1.5rem"}}>
                            { getTotalPrice() }BGN
                        </div>
                    </div>

                </Toast.Body>
            </Toast>
        </div>

    );
}

export default CartToast;