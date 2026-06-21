import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-dark" to="/">
          OUTSKAT
        </Link>

        {/* Botão Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarOutskat"
          aria-controls="navbarOutskat"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarOutskat">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/masculino">
                Masculino
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/feminino">
                Feminino
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/infantil">
                Infantil
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/esportivo">
                Esportivo
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/jeans">
                Jeans
              </Link>
            </li>
          </ul>

          {/* Ações */}
          <div className="d-flex align-items-center gap-2">
            <Link className="btn btn-outline-dark" to="/login">
              Entrar
            </Link>

           <button onClick={() => setShow(true)} className="btn btn-outline-dark">
                   Carrinho
                 </button>
           
                 <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
                   <Offcanvas.Header closeButton>
                     <Offcanvas.Title>Carrinho</Offcanvas.Title>
                   </Offcanvas.Header>
           
                   <Offcanvas.Body>
                     <p>Você não tem itens no carrinho</p>
                   </Offcanvas.Body>
                 </Offcanvas>
          </div>
        </div>
      </div>
    </nav>
  );
}