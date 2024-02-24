import StudentsContainer from "./components/students/StudentsContainer.jsx";

function App() {

    //Array destructuring
    const myArray = ["Ivan", "Peter"]
    const [firstPerson, secondPerson] = myArray

    console.log(firstPerson, secondPerson)

    function dummyFunction() {
        return [1, 2]
    }

    function dummyObjectFunction() {
        return {
            a: 1,
            b: 2,
        }
    }

    const [kakvotoIskame, kakvotoIskame2] = dummyFunction()
    console.log(kakvotoIskame, kakvotoIskame2)

    const { a, b } = dummyObjectFunction();
    console.log(a, b);

  return (
      <>
          <StudentsContainer/>
      </>
  )
}

export default App
