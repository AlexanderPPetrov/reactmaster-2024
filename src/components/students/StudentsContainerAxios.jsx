import StudentsList from "./StudentsList.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import SearchInput from "../ui/SearchInput.jsx";
function StudentsContainer () {

    const [students, setStudents] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                //Success
                const { data } = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts'
                )
                const students = data || []
                setStudents(students)
            } catch (e) {
                //Error
                console.log(e)
            }
        }
        fetchData()

    }, []);


    function onSearch(value) {
        setSearchValue(value)
    }

    function filteredStudents() {
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