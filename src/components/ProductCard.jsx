import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const ProductCard = ({product, favourites = []}) => {
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        if (product.id && favourites?.length > 0){
            setIsFavourite(favourites.contains(product.id))
        }
    }, [product.id, favourites]);

    return (
        <Link to={"/product/"+product.id}>
            <div key={product.id} className="relative group w-full flex flex-col gap-3 ">
                <div className="w-full relative rounded-lg aspect-[1] overflow-hidden">
                    <img
                        src={product.image1}
                        alt={product.name}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-b-xl rounded-t-lg border border-solid border-yellow-600"
                    />
                    <img
                        src={product.image2}
                        alt={product.name}
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                    />
                </div>

                {product.originalPrice !== product.offerPrice &&
                    <p className="absolute top-0 left-0 m-4 px-2 py-1 bg-white text-red-500 font-semibold rounded-md"> Save {Math.floor(((product.originalPrice - product.offerPrice) / product.originalPrice) * 100)}%</p>
                }

                <div className="flex flex-col w-full gap-1.5 bg-yellow-500 rounded-b-2xl rounded-t-lg">
                    <h3 className="text-center text-xl font-semibold text-black">
                            {product.name}
                    </h3>
                    <p className="text-center text-lg font-semibold text-black">{product.offerPrice !== product.originalPrice ?
                        <>
                            <span className="line-through opacity-50">Rs. {product.originalPrice}</span>
                            <span className="text-red-500"> Rs. {product.offerPrice}</span>
                            <span className="text-red-500"> Save {Math.floor(((product.originalPrice - product.offerPrice) / product.originalPrice) * 100)}%</span>
                        </> :
                        <span className="opacity-80">Rs. {product.offerPrice}</span>}
                    </p>
                    <button type="button" className="bg-white hover:bg-yellow-600 text-black hover:text-black text-md px-4 py-2 rounded-b-2xl rounded-t-2xl border border-solid border-black text-center w-full uppercase">Add to cart</button>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;