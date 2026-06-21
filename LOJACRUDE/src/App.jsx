import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./Components/Navbar";

import Esportivo from "./Pages/Esportivo";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Login from "./Pages/Login";
import Masculino from "./Pages/Masculino";
import Feminino from "./Pages/Feminino";
import Infantil from "./Pages/Infantil";
import Jeans from "./Pages/Jeans";
import Exemplo from "./Pages/Exemplo";


function App() {
  return (


    <BrowserRouter>


      <Navbar />


      <Routes>


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/produtos"
          element={<Produtos />}
        />

        <Route
          path="/masculino"
          element={<Masculino />}
        />

        <Route
          path="/feminino"
          element={<Feminino />}
        />

        <Route
          path="/infantil"
          element={<Infantil />}
        />

        <Route
          path="/jeans"
          element={<Jeans />}
        />

        <Route
          path="/exemplo"
          element={<Exemplo />}
        />

        <Route
          path="/esportivo"
          element={<Esportivo />}
        />

        <Route
          path="/login"
          element={<Login />}
        />


      </Routes>


    </BrowserRouter>


  );
}


export default App;
