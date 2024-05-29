import AllFoodsCard from "../../components/DashboardComponents/AllFoodsCard";
import { useEffect, useState } from "react";


const AllFoods = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/foods")
            .then(res => res.json())
            .then(data => {
                setFoods(data)
                console.log("form All foods", data)
            })
    }, [])

    const handleDeleteFoods = (id) => {
        setFoods(foods.filter(food => food.id !== id))
    }

    return (
        <div className="">
            {
                foods?.map(foodData => <AllFoodsCard key={foodData.id} foodData={foodData} onDelete={handleDeleteFoods} />)
            }
        </div>
    );
};

export default AllFoods;