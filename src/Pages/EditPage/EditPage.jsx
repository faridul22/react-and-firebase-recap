import { useLoaderData } from "react-router-dom";

const EditPage = () => {
    const food = useLoaderData();
    console.log(food)
    const { id, title, price, cooking_time, description, } = food;

    const handleEdit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const cookingTime = form.cooking_time.value;
        const description = form.description.value;
        console.log(title, price, cookingTime, description)
    }
    return (
        <div className=" min-h-screen bg-base-200">
            <div className="py-16">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Edit now: <span className="font-thin">{food.title}</span></h1>
                    <p className="py-6">Information.</p>
                </div>
                <div className="card w-1/2 mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleEdit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input name="title" type="text" placeholder="Title" className="input input-bordered" defaultValue={title} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name="price" type="text" placeholder="Price" className="input input-bordered" defaultValue={price} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Cooking Time</span>
                            </label>
                            <input name="cooking_time" type="text" placeholder="Cooking time" className="input input-bordered" defaultValue={cooking_time} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" cols="30" rows="10" placeholder="Description" className="input input-bordered p-5" defaultValue={description} required id="" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-emerald-500 text-white hover:bg-emerald-600">Edit Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPage;