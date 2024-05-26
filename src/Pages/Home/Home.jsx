import { useLoaderData } from "react-router-dom";
import Banner from "../../components/HomeComponets/Banner";
import Products from "../../components/HomeComponets/Products";

const Home = () => {
    const foods = useLoaderData();
    console.log(foods)
    return (
        <div>
            <Banner />
            <Products foods={foods} />
        </div>
    );
};

export default Home;