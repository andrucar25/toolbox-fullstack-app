import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar className="bg-danger mb-4 d-flex">
    <Container>
      <Nav.Link as={Link} to="/" className="text-light fs-4">
        React Test App
      </Nav.Link>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/files-list" className="text-light fs-4">
          Files List
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
