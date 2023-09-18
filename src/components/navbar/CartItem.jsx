import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    getProductById as getProductByIdApi,
    getProductImages as getProductImagesApi,
    deleteCartItem as deleteCartItemApi,
} from "../../services/api";
import { useDispatch } from "react-redux";
import { deleteItem as deleteItemAction } from "../../redux/reducer/cart";

const CartItem = ({ item, setProductPrice }) => {
    const dispatch = useDispatch();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const run = async () => {
            const response = await getProductByIdApi(item.product);

            if (response.status === "ok") {
                setProduct((prev) => ({ ...prev, ...response.product }));
            }
        };

        if (item) {
            run();
        }
    }, [item]);

    useEffect(() => {
        const run = async () => {
            const response = await getProductImagesApi(item.product);

            if (response.status === "ok") {
                for (const image of response.images) {
                    if (image.isCover) {
                        setProduct((prev) => ({ ...prev, image: image.url }));
                        break;
                    }
                }
            }
        };

        if (item) {
            run();
        }
    }, [item]);

    useEffect(() => {
        setProductPrice(
            product._id,
            product.price - (product.price * product.offer) / 100
        );
    }, [product]);

    const handleRemoveItem = async () => {
        const response = await deleteCartItemApi(item.id);

        if (response.status === "ok") {
            dispatch(deleteItemAction({ id: item.id }));
        } else {
            console.log(response.error);
        }
    };

    return (
        <>
            <li key={product._id} className="flex py-6">
                <Link
                    to={"/product/" + product._id}
                    className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                    />
                </Link>

                <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <Link to={"/product/" + product._id}>
                                {product.name || "Loading..."}
                            </Link>
                        </h3>
                        <p className="ml-4 whitespace-nowrap">
                            Rs.{" "}
                            {product._id
                                ? product.price -
                                  (product.price * product.offer) / 100
                                : "..."}
                        </p>
                    </div>

                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {item.quantity}</p>

                        <div className="flex">
                            <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={handleRemoveItem}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default CartItem;
