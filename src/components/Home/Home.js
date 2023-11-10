import Banner from "./Banner/Banner";
import Header from "../../common components/Header/Header";
import Footer from "../../common components/Footer/Footer";
import FooterWrap from "../../common components/Footer/FooterWrap/FooterWrap";

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Footer/>
            <FooterWrap/>
        </div>
    );

}
export default Home;