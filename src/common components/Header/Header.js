import Navigation from "../Navigation";
import {Nav} from "react-bootstrap";

const Header = () => {
    return <>
        <div className='header'>
            <div className='header__logo'>
                <Nav.Link href='/'>
                    <img src={'images/logo.png'} className='logo' alt="logo"/>
                </Nav.Link>
            </div>
            <Navigation/>
        </div>
    </>
}
export default Header;