import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavbarComp() {

    const cartProduct = useSelector(state => state.cart);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Redux API Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Products</Nav.Link>
                    </Nav>
                    <button className='btn btn-primary ms-3'><Nav.Link as={Link} to="/cart">Bag: {cartProduct.length}</Nav.Link></button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;