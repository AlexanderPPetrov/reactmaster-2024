import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function StudentsListItem({ title }) {

    const [selected, setSelected] = useState(false)
    const [studentInfo, setStudentInfo] = useState({
        address: '',
        telephone: '',
        age: '',
    })

    const message = 'Student: ';
    function onButtonClick() {
        setSelected(!selected)
        console.log(studentInfo)
    }
    // useEffect(() => {
    //     if(selected) {
    //         console.log(studentInfo.address)
    //     }
    // }, [selected])

    function onStudentInfoChange(e) {
        const { name, value } = e.target;
        const newValue = { ...studentInfo, [name]: value }
        setStudentInfo(newValue);

        // setStudentInfo(()=> newValue)

        // setStudentInfo((prevState) => {
        //     return {
        //         ...prevState,
        //         [name]: value
        //     }
        // })
    }
    return (
        <div className={selected ? 'selected' : ''}>
            {message} { title }
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address"
                                  value={studentInfo.address}
                                  onChange={onStudentInfoChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control name="telephone"
                                  value={studentInfo.telephone}
                                  onChange={onStudentInfoChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control name="age"
                                  value={studentInfo.age}
                                  onChange={onStudentInfoChange}/>
                </Form.Group>
                <Button variant="primary"
                        type="button"
                        onClick={onButtonClick}>
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default StudentsListItem
