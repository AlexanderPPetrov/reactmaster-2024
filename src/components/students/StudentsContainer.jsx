import StudentsList from "./StudentsList.jsx";
import { useState } from "react";
import SearchInput from "../ui/SearchInput.jsx";
import { useFetchStudents } from "../hooks/useFetchStudents.js";

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
        <div>
            <SearchInput searchValue={searchValue} onSearch={onSearch}/>
            <StudentsList students={filteredStudents()}/>
        </div>
    )
}

export default StudentsContainer