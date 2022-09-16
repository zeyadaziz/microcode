import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarRb() {
  return (
    <>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MicroCode</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/allemployees">Employees</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
           </Nav>
        </Container>
      </Navbar>
        </>
  );
}

export default NavbarRb;