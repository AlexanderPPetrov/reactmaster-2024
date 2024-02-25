import StudentsContainer from "./components/students/StudentsContainer.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <StudentsContainer/>
      </QueryClientProvider>
  )
}

export default App
