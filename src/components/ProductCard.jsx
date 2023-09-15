import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProductImages as getProductImagesApi } from "../services/api";

const ProductCard = ({ product }) => {
    const [coverImage, setCoverImage] = useState("");
    const [modelImage, setModelImage] = useState("");

    useEffect(() => {
        const run = async () => {
            const response = await getProductImagesApi(product._id);

            if (response.status === "ok") {
                for (const image of response.images) {
                    if (image.isCover) setCoverImage(image.url);
                    if (image.isModel) setModelImage(image.url);
                }
            }
        };

        if (product) {
            run();
        }
    }, [product]);

    return (
        <Link to={"/product/" + product._id}>
            <div className="relative group w-full flex flex-col gap-3 ">
                <div className="w-full relative rounded-lg aspect-[1] overflow-hidden">
                    <img
                        src={coverImage}
                        alt={product.name}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-b-xl rounded-t-lg border border-solid border-yellow-600"
                    />
                    <img
                        src={modelImage}
                        alt={product.name}
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                    />
                </div>

                {product.offer !== 0 && (
                    <p className="absolute top-0 left-0 m-4 px-2 py-1 bg-white text-red-500 font-semibold rounded-md">
                        {" "}
                        Save {product.offer}%
                    </p>
                )}

                <div className="flex flex-col w-full gap-1.5 bg-yellow-500 rounded-b-2xl rounded-t-lg">
                    <h3 className="text-center text-xl font-semibold text-black">
                        {product.name}
                    </h3>
                    <p className="text-center text-lg font-semibold text-black">
                        {product.offer !== 0 ? (
                            <>
                                <span className="line-through opacity-50">
                                    Rs. {product.price}
                                </span>
                                <span className="text-red-500">
                                    {" "}
                                    Rs.{" "}
                                    {product.price -
                                        (product.price * product.offer) / 100}
                                </span>
                                <span className="text-red-500">
                                    {" "}
                                    Save {product.offer}%
                                </span>
                            </>
                        ) : (
                            <span className="opacity-80">
                                Rs. {product.price}
                            </span>
                        )}
                    </p>
                    <button
                        type="button"
                        className="bg-white hover:bg-yellow-600 text-black hover:text-black text-md px-4 py-2 rounded-b-2xl rounded-t-2xl border border-solid border-black text-center w-full uppercase"
                        disabled={product.quantity === 0}
                    >
                        {product.quantity === 0
                            ? "Out of stock"
                            : "Add to cart"}
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
