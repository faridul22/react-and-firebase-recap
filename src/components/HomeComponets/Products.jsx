
import ProductCard from './ProductCard';

const Products = ({ foods }) => {
    console.log(foods)
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='my-8 text-center text-2xl font-semibold'>OUR MENU</h1>
            <div className='grid grid-cols-3 justify-center gap-4 '>
                {
                    foods.slice(0, 6).map(food => <ProductCard key={food.id} food={food} />)
                }
            </div>
        </div>
    );
};

export default Products;