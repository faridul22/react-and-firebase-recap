import { Link } from "react-router-dom";


const AllFoodsCard = ({ foodData }) => {

    const { id, title, price, cooking_time, description, } = foodData;

    return (
        <div className="card card-side bg-base-100 shadow-xl my-5">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3 className="font-semibold">Price: ${price}</h3>
                <h3 className="font-semibold">Cooking: {cooking_time}</h3>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-700 text-white hover:bg-green-800">
                        <Link to={`/foodDetails/${id}`}>Details</Link>
                    </button>
                    <button className="btn bg-emerald-500 text-white hover:bg-emerald-600">
                        <Link to={`/edit/${id}`}>Edit</Link>
                    </button>
                    <button className="btn bg-red-700 text-white hover:bg-red-800">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default AllFoodsCard;