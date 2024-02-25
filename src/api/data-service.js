export async function fetchStudents() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}