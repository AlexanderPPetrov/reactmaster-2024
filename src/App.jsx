import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./AppRouter.jsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./translations/index.js";

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "bg",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });




const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}>
        <AppRouter/>
      </QueryClientProvider>
  )
}

export default App
