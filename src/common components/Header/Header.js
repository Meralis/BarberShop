import Navigation from "../Navigation";
import {Nav} from "react-bootstrap";

const Header = () => {
    return <>
        <div className='header__logo'>
            <Nav.Link className='logo' href='/'>
                <img src={'images/logo.png'} className='logo' alt="logo"/>
            </Nav.Link>
        </div>
        <Navigation/>
    </>
}
export default Header;