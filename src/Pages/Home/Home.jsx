import Banner from "../../components/HomeComponets/Banner";
import Products from "../../components/HomeComponets/Products";
import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;