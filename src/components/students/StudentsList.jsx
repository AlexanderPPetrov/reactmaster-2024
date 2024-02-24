import StudentsListItem from "./StudentsListItem.jsx";
function StudentsList({ students }) {
    function getStudents() {
        return students.map((student, index) => {
            return <StudentsListItem key={index}
                                     title={student.firstName}/>
        })
    }

    return (
        <div>
            {getStudents()}
        </div>
    )
}
export default StudentsList