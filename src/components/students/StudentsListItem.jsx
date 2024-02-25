import { useState, useEffect } from "react";

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

            <input
                name="address"
                value={studentInfo.address}
                onChange={onStudentInfoChange}/>
            <input
                name="telephone"
                value={studentInfo.telephone}
                onChange={onStudentInfoChange}/>
            <input
                name="age"
                value={studentInfo.age}
                onChange={onStudentInfoChange}/>
            <button type="button"
                    onClick={onButtonClick}>
                Select
            </button>
        </div>
    )
}

export default StudentsListItem
