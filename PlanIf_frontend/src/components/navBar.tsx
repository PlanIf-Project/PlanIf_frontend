import { Container, Nav, Navbar } from "react-bootstrap";
import "../styles/perfil-style.css";

const AppNavBar = (props: any) => {
    return (
        <Navbar className="navbar">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
      </Navbar>
)
}

export default AppNavBar;