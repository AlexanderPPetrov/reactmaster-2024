import HomePage from "./pages/HomePage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <HomePage/>
      </QueryClientProvider>
  )
}

export default App
