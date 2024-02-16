import carrito from "../img/carrito.png";
import logo from "../img/logo.png";

export  function Navbar() {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img
            src={logo}
            alt="logo"
            className="mx-4"
            style={{ width: "4rem" }}
          />
        </a>
        <a href="/" className="navbar-brand">
          Productos
        </a>
        <a href="/" className="navbar-brand">
          About
        </a>
        <div>
          <img
            src={carrito}
            alt="carrito"
            className="mx-4 "
            style={{ width: "4rem" }}
          />
        </div>
      </div>
    </nav>
  );
}
