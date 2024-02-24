import { useState, useEffect } from "react";

function StudentsListItem({ title }) {

    const [selected, setSelected] = useState(false);
    const message = 'Student: ';
    function onButtonClick() {
        setSelected(!selected)
    }

    useEffect(() => {
        console.log(title, selected)
    }, [selected])


    return (
        <div className={selected ? 'selected' : ''}>
            {message} { title }

            <button type="button"
                    onClick={onButtonClick}>
                Select
            </button>
        </div>
    )
}

export default StudentsListItem
