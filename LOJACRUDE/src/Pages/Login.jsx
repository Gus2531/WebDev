import React from "react";

function Login() {
  return (
    <div className="container bg-dark mt-5 p-5 rounded">
      <h2 className="text-white">Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email" className="form-label text-white">
            Email:
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label text-white">
            Password:
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;