import { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Website from "./pages/Website";
import Properties from "./pages/Properties/Properties";
import Contact from "./components/Contact/Contact";
import { Value } from "./components/Value/Value";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropertyDetail from "./pages/PropertyDetail/PropertyDetail";
import { MantineProvider,createTheme } from "@mantine/core";
import '@mantine/core/styles.css';
import UserContext from "./context/UserContext";


const theme = createTheme({
  /** Put your mantine theme override here */
});
function App() {
  const [userDetails, setUserDetails] = useState({
    favourites: [], 
    bookings: [],
    token: null,
  });
  const queryClient = new QueryClient();
  return (
    <UserContext.Provider value={{userDetails,setUserDetails}}>
    <MantineProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback="<div>Loading...</div>">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Website />} />
              <Route path="/properties">
                <Route index element={<Properties />} />
                <Route path=":propertyId" element={<PropertyDetail />} />
              </Route>
              <Route path="/contactUs" element={<Contact />} />
              <Route path="/values" element={<Value />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
    </MantineProvider>
    </UserContext.Provider>
  );
}

export default App;
