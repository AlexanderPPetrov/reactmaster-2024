import {Button, Card, CardBody, CardTitle, Image} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/products.js";

function ProductsListItem({ product }) {

    const dispatch = useDispatch()
    function onButtonClick() {
        dispatch(addProduct(product))
    }

    //TODO create price component with props value and size
    return (
        <div className={"col-md-4 mb-3"}>
            <Card className={"h-100"}>
                <CardBody className={"d-flex flex-column"}>
                    <div className={"d-flex justify-content-center py-3"}>
                        <Image src={product.image}
                               className={"img-fluid"}
                               style={{height: "160px"}}/>
                    </div>
                    <CardTitle>{product.title}</CardTitle>
                    <p className={"text-truncate"}>
                        {product.description}
                    </p>
                    <div className={"d-flex align-items-center mt-auto"}>
                        <div className={"d-flex align-items-end"}>
                          <span className={"text-primary fw-bold me-1"}
                                style={{fontSize: "1.25rem", lineHeight: "1.5rem"}}>
                          {product.price.toFixed(2)}
                        </span>
                            <span style={{fontSize: "0.75rem"}}>BGN</span>
                        </div>
                        <Button onClick={onButtonClick}
                            variant={"outline-success ms-auto"}>
                            Add to Cart
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductsListItem
