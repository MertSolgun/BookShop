import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Header({ handleChange, handleShow }) {
  return (
    <div>
      <div>
        <Navbar expand="lg" className="bg-success">
          <Container>
            <Navbar.Brand href="#" className="text-white fw-bold">
              KiddieBookHaven
            </Navbar.Brand>
            <Nav.Link href="#pricing">
              <Button variant="primary" onClick={handleShow} className="me-2">
                Basket
              </Button>
            </Nav.Link>
          </Container>
        </Navbar>
        <div className="inputDiv">
          <InputGroup>
            <Form.Control className="input" onChange={handleChange} />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default Header;
