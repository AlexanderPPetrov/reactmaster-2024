import DefaultLayout from "../layouts/DefaultLayout.jsx";
import StudentsContainer from "../components/students/StudentsContainer.jsx";
function HomePage() {

    return(
        <DefaultLayout leftColumn={<StudentsContainer/>} rightColumn={null}/>
    )
}

export default HomePage