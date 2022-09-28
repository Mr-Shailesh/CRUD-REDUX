import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import Speed from "./Speed";

function NavScrollExample() {
  return (
    <Navbar bg="light">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>

        <Nav className="me-auto my-2 my-lg-0">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </Nav>

        <div className="d-flex">
          {/* <Speed /> */}
          <Link to="/add" className="btn btn-outline-primary">
            Add User
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
