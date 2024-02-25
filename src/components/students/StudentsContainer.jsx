import StudentsList from "./StudentsList.jsx";
import { useState } from "react";
import SearchInput from "../ui/SearchInput.jsx";
import { useFetchStudents } from "../hooks/useFetchStudents.js";
import Card from 'react-bootstrap/Card';

function StudentsContainer () {

    const { data } = useFetchStudents()

    const [searchValue, setSearchValue] = useState('')

    function onSearch(value) {
        setSearchValue(value)
    }

    function filteredStudents() {
        const students = data || []
        return students.filter(({ title }) => {
            return title.toLowerCase().includes(searchValue.toLowerCase())
        })
    }

    return (
        <Card>
            <Card.Body>
                <SearchInput searchValue={searchValue} onSearch={onSearch}/>
                <StudentsList students={filteredStudents()}/>
            </Card.Body>
        </Card>
    )
}

export default StudentsContainer