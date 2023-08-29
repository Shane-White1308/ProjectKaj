import {useState, useEffect} from "react";

const ProductCard = ({product, favourites = []}) => {
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        if (product.id && favourites?.length > 0){
            setIsFavourite(favourites.contains(product.id))
        }
    }, [product.id, favourites]);

    return (
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

                {/*<svg width="25" height="24" viewBox="0 0 25 24" fill="none" className="absolute top-0 right-0 m-5 cursor-pointer">*/}
                {/*    <path d="M7.83424 1.00019C8.50451 1.02196 9.15112 1.13749 9.77836 1.34673L9.80168 1.36888L10.019 1.43871C10.2637 1.51731 10.4584 1.59445 10.6305 1.6891L10.6665 1.70891L10.704 1.7257L11.1376 1.91967C11.1692 1.93875 11.2193 1.97242 11.2955 2.0272C11.308 2.0362 11.3266 2.04975 11.3469 2.06445C11.377 2.08628 11.4106 2.11066 11.4329 2.12658C11.4768 2.15796 11.5395 2.20215 11.6041 2.24158L11.6104 2.24541L11.6167 2.24915C11.6484 2.26781 11.6762 2.28413 11.7008 2.29859C11.8033 2.35872 11.851 2.38669 11.8915 2.41773L12.4989 2.88344L13.1071 2.41869C14.3235 1.48911 15.7946 0.989474 17.3053 1.00017V1.00019H17.3123C18.0079 1.00019 18.6862 1.09855 19.3192 1.31094L19.3192 1.31098L19.3281 1.31389C23.2647 2.59373 24.8434 6.97278 23.5752 11.0362C22.8371 13.1487 21.6338 15.0753 20.062 16.6488C17.7627 18.8747 15.2457 20.8574 12.5399 22.5746C9.81794 20.8668 7.28001 18.8801 4.95325 16.6367C3.39032 15.0611 2.18558 13.1448 1.43549 11.0315C0.148284 6.97664 1.71978 2.59361 5.71224 1.28704L5.71974 1.28459L5.7272 1.28201C6.00604 1.18586 6.29288 1.11671 6.5804 1.07539H6.66245H6.73502L6.80683 1.06491C7.10807 1.02096 7.40849 1.00019 7.71244 1.00019H7.83424ZM19.3422 3.01543L19.3274 3.00984L19.3125 3.00471C18.2637 2.64402 17.1482 3.21675 16.7831 4.23901L16.7795 4.24903L16.7762 4.25912C16.4322 5.29084 16.9668 6.42539 18.0046 6.80012C18.3998 6.95079 18.6873 7.3558 18.6873 7.82406V7.82792C18.6557 8.35125 18.8185 8.86753 19.1529 9.27351C19.5198 9.71904 20.0412 9.94794 20.5423 9.99577L20.6031 10.0016L20.6641 9.99994C21.6904 9.9724 22.5482 9.15995 22.6223 8.12014L22.6248 8.08464V8.04906V7.91046C22.6664 5.7476 21.3547 3.77928 19.3422 3.01543Z" fill={isFavourite ? "red" : "transparent"} stroke="#FF0000" strokeWidth="2"/>*/}
                {/*</svg>*/}

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
                        <span className="opacity-80">Rs. {product.offerPrice}</span>}</p>
                    <button type="button" className="bg-white hover:bg-yellow-600 text-black hover:text-black text-md px-4 py-2 rounded-b-2xl rounded-t-2xl border border-solid border-black text-center w-full uppercase">Add to cart</button>
                </div>
            </div>
    );
}

export default ProductCard;