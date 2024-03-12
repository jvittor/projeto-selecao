import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout.jsx";
import Login from "./Components/auth/Login.jsx";
import Register from "./Components/auth/Register.jsx";
import NotFoundPage from "./Components/NotFoundPage.jsx";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/registrar" element={<Register />} />
          

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
export default App;
