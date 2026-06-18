import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
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

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Masculino
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Camisetas</a></li>
                <li><a className="dropdown-item" href="#">Calças</a></li>
                <li><a className="dropdown-item" href="#">Jaquetas</a></li>
                <li><a className="dropdown-item" href="#">Acessórios</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Feminino
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Vestidos</a></li>
                <li><a className="dropdown-item" href="#">Blusas</a></li>
                <li><a className="dropdown-item" href="#">Calças</a></li>
                <li><a className="dropdown-item" href="#">Bolsas</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Infantil
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Meninos</a></li>
                <li><a className="dropdown-item" href="#">Meninas</a></li>
                <li><a className="dropdown-item" href="#">Bebês</a></li>
                <li><a className="dropdown-item" href="#">Calçados</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Esportiva
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Treino</a></li>
                <li><a className="dropdown-item" href="#">Corrida</a></li>
                <li><a className="dropdown-item" href="#">Fitness</a></li>
                <li><a className="dropdown-item" href="#">Tênis</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Jeans
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Skinny</a></li>
                <li><a className="dropdown-item" href="#">Mom Jeans</a></li>
                <li><a className="dropdown-item" href="#">Wide Leg</a></li>
                <li><a className="dropdown-item" href="#">Slim Fit</a></li>
              </ul>
            </li>
          </ul>

          {/* Ações */}
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-dark">
              Entrar
            </button>

            <button className="btn btn-dark position-relative">
              Carrinho
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}