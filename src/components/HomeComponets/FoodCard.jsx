import { Link } from "react-router-dom";


const FoodCard = ({ food }) => {

    const { id, title, price, cooking_time, description, } = food
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="flex justify-between my-5">
                    <h3 className="font-semibold">Price: ${price}</h3>
                    <h3 className="font-semibold">Cooking: {cooking_time}</h3>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to={`/foodDetails/${id}`}>See Details</Link>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default FoodCard;