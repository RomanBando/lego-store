import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link className="nav-link" to="/">Lego</Link></Navbar.Brand>
      </Container>
    </Navbar>
  );

}
