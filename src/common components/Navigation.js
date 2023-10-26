import {Nav, Navbar} from "react-bootstrap";

const Navigation = () => {
    return <>
        <div className='nav'>
            <Navbar expand='lg' className='container nav__inners row'>
                <Nav className='nav__items justify-content-around align-items-center'>
                    <Nav.Link className='nav__item' href='/'>HOME</Nav.Link>
                    <Nav.Link className='nav__item' href='/services'>SERVICES</Nav.Link>
                    <Nav.Link className='nav__item' href='/about'>ABOUT</Nav.Link>
                    <Nav.Link className='nav__item' href='/update'>UPDATES</Nav.Link>
                    <Nav.Link className='nav__item' href='/contact'>CONTACT</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    </>

}
export default Navigation;