import Navigation from "../Navigation";

const Footer = () => {
    return (
        <div className='footer container'>
            <Navigation />
            <div className='footer__company-name'>
                <p>SOUTHCORNER BARBERSHOP</p>
            </div>
            <div className='footer__copyright'>
                <p>Copyright 2016</p>
            </div>
        </div>
    );
}
export default Footer;