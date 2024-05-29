import { useLoaderData } from "react-router-dom";
import AllFoodsCard from "../../components/DashboardComponents/AllFoodsCard";


const AllFoods = () => {
    const allFoodData = useLoaderData();

    return (
        <div className="">
            {
                allFoodData.map(foodData => <AllFoodsCard key={foodData.id} foodData={foodData} />)
            }
        </div>
    );
};

export default AllFoods;