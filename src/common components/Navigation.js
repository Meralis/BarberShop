import {Nav, Navbar} from "react-bootstrap";

const Navigation = () => {
    return <>
        <div className='header__nav'>
            <Navbar expand='lg' className='container header__inners row'>
                <Nav className='header__items justify-content-around align-items-center'>
                    <Nav.Link className='header__item' href='/'>HOME</Nav.Link>
                    <Nav.Link className='header__item' href='/services'>SERVICES</Nav.Link>
                    <Nav.Link className='header__item' href='/about'>ABOUT</Nav.Link>
                    <Nav.Link className='header__item' href='/update'>UPDATES</Nav.Link>
                    <Nav.Link className='header__item' href='/contact'>CONTACT</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    </>

}
export default Navigation;