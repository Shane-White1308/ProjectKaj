import { useState, useEffect } from "react";
import { getProductImages as getProductImagesApi } from "../../services/api";
import { Link } from "react-router-dom";

const SearchItem = ({ product }) => {
    const [image, setImage] = useState("");

    useEffect(() => {
        const run = async () => {
            const response = await getProductImagesApi(product._id);

            if (response.status === "ok") {
                for (const image of response.images) {
                    if (image.isCover) {
                        setImage(image.url);
                        break;
                    }
                }
            }
        };

        if (product._id) {
            run();
        }
    }, [product]);

    return (
        <>
            <li key={product._id}>
                <Link
                    to={"/product/" + product._id}
                    className="flex py-3 items-center"
                >
                    <img
                        src={image}
                        alt={product.name}
                        className="h-10 w-10 flex-shrink-0 rounded-md object-cover object-center"
                    />

                    <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{product.name}</h3>
                            <p className="ml-4">
                                Rs.{" "}
                                {product.price -
                                    (product.price * product.offer) / 100}
                            </p>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    );
};

export default SearchItem;
