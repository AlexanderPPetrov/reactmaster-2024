// import { useState } from "react";
// import { Form, Button } from "react-bootstrap";

import { Card, CardBody } from "react-bootstrap";

function ProductsListItem({ product }) {

    // const [selected, setSelected] = useState(false)
    //
    // function onButtonClick() {
    //     setSelected(!selected)
    // }

    return (
        <div className={"col-md-4"}>
            <Card>
                <CardBody>
                    {product.title}
                    {product.description}
                    {product.image}
                    {product.price}
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductsListItem
