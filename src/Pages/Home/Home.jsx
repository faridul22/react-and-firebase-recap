import { useLoaderData } from "react-router-dom";
import Banner from "../../components/HomeComponets/Banner";
import Foods from "../../components/HomeComponets/Foods";

const Home = () => {
    const foods = useLoaderData();
    console.log(foods)
    return (
        <div>
            <Banner />
            <Foods foods={foods} />
        </div>
    );
};

export default Home;