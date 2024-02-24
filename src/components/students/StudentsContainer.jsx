import StudentsList from "./StudentsList.jsx";

function StudentsContainer () {

    const students = [
        {
            firstName: "Ivan",
            lastName: "Ivanov",
        },
        {
            firstName: "Peter",
            lastName: "Petrov",
        },
        {
            firstName: "Maria",
            lastName: "Marieva",
        }
    ]

    return (
        <div>
            <StudentsList students={students}/>
        </div>
    )
}

export default StudentsContainer