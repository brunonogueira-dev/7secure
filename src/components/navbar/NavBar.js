import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" className={"navbar-dark"} expand="lg">
            <Container>
                <Navbar.Brand href="/">PSLinux</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/hosts" className={"nav-link"}>Hosts</Link>
                        <Link to="/" className={"nav-link"}>Packege</Link>
                        <Link to="/" className={"nav-link"}>Hosts</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;