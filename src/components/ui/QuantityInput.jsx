import { Button, InputGroup, Form } from "react-bootstrap";

function QuantityInput({ value, onDecrement, onIncrement, size = "md" }) {
    return (
        <InputGroup style={{width: "86px"}}>
            <Button variant="outline-success"
                    onClick={onDecrement}
                    disabled={value <= 1}
                    size={size}>
                -
            </Button>
            <Form.Control readOnly
                          value={value}
                          size={size}
                          className={"text-center"}/>
            <Button variant="outline-success"
                    onClick={onIncrement}
                    size={size}>
                +
            </Button>
        </InputGroup>
    )
}
export default QuantityInput