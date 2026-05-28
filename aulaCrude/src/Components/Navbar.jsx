import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(<> 
        <nav className="bg-dark p-3">   
            <div className="d-flex justify-content-around">
                <Link to="/" className="fs-3 text-decoration-none">
                    Steam
                </Link>
                
                <div className="d-flex gap-5">
                    <Link to="/" className="btn btn-light"> Home </Link>
                    <Link to="/Contatos" className="btn btn-light"> Contato </Link>
                    <Link to="/Cadastro" className="btn btn-light"> Cadastro </Link>
                </div>
            </div>
        </nav>
    </>)
}


export default Navbar