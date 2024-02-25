export function multiply(a, b) {
    return a * b;
}

export const myMultipyFunction = (a, b) => {
    return a * b
}

const myMultiplyFunction2 = (a, b) => a * b
export default myMultiplyFunction2



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