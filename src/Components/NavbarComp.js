import {Navbar,Nav} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
    return(
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand >
        <Link className="navbar-brand" to ='/'>
          Shorty
          </Link>
          </Navbar.Brand>
      
      <Nav className="ml-auto">
        {/* <Nav.Link href="/contact-us">Contact Us</Nav.Link>
        <Nav.Link href="/admin-login">Admin Login</Nav.Link> */}
        <Nav.Link >
          <Link className="navbar-dark navbar-nav nav-link navbar-expand" to='/contact-us'>Contact Us</Link></Nav.Link>
        <Nav.Link > <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/admin-login">Admin Login</Link></Nav.Link>
      </Nav>
    </Navbar>
    );
  }
export default NavbarComp
