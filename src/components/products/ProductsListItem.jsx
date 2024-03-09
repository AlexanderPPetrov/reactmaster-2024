// import { useState } from "react";
// import { Form, Button } from "react-bootstrap";

import {Button, Card, CardBody, CardTitle, Image} from "react-bootstrap";

function ProductsListItem({ product }) {

    // const [selected, setSelected] = useState(false)
    //
    // function onButtonClick() {
    //     setSelected(!selected)
    // }

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
                          {product.price}
                        </span>
                            <span style={{fontSize: "0.75rem"}}>BGN</span>
                        </div>
                        <Button variant={"outline-success ms-auto"}>Add to Cart</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductsListItem
