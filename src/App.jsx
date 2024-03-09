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



import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartToast from "./components/ui/CartToast.jsx";
import AppDrawer from "./components/app/AppDrawer.jsx";

const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}>
        <AppRouter/>
        <AppDrawer/>
        <CartToast/>
      </QueryClientProvider>
  )
}

export default App
