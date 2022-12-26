import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "./images/logo.png";
import userIcon from "./images/user.png";
import cartIcon from "./images/cart.png";
import './NavBar.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function NavBar() {
  const {user} = useContext(UserContext);

  return(
    
    <Navbar  expand="lg" variant="warning" className="bgc">
      <Container fluid>
        <Navbar.Brand><Link className="nav-link d-block" to="/"><img className="logo" src={logo} alt="logo"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-center">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/profile">
              <span>{user ? user.first_name: ""}</span>
              <img className="icon" src={userIcon} alt="user"/>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart"><img className="icon" src={cartIcon} alt="cart"/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
