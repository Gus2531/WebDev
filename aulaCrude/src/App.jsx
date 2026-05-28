import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro"
import Contatos from "./Pages/Contatos"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"


function App(){
    return(<> 
        <BrowserRouter>

            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Contatos" element={<Contatos/>}/>
                <Route path="/Cadastro" element={<Cadastro/>} />
            </Routes>

        </BrowserRouter>
    </>)
}

export default App