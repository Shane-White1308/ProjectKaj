import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProductImages as getProductImagesApi } from "../services/api";
import {
    addToCart as addToCartApi,
    updateCartItem as updateCartItemApi,
    deleteCartItem as deleteCartItemApi,
} from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import {
    addItem as addItemAction,
    changeQuantity as changeQuantityAction,
    deleteItem as deleteItemAction,
} from "../redux/reducer/cart";

const ProductCard = ({ product }) => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const [coverImage, setCoverImage] = useState("");
    const [modelImage, setModelImage] = useState("");

    const [cartConf, setCartConf] = useState({});

    const [loading, setLoading] = useState(false);

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

    useEffect(() => {
        if (product?._id) {
            const item = cartItems.filter(
                (item) => item.product === product._id
            );

            if (item) {
                setCartConf(item[0]);
            } else {
                setCartConf({});
            }
        }
    }, [cartItems, product]);

    const handleAddToCart = async () => {
        if (!loading) {
            setLoading(true);
            const response = await addToCartApi(product._id);

            if (response.status === "ok") {
                dispatch(
                    addItemAction({
                        id: response.cart._id,
                        product: response.cart.product,
                        quantity: response.cart.quantity,
                    })
                );
            } else {
                console.log(response.error);
            }

            setLoading(false);
        }
    };

    const handleDecreaseQuantity = async () => {
        if (!loading) {
            setLoading(true);

            if (cartConf.quantity > 1) {
                const response = await updateCartItemApi(
                    cartConf.id,
                    cartConf.quantity - 1
                );

                if (response.status === "ok") {
                    dispatch(
                        changeQuantityAction({
                            id: cartConf.id,
                            quantity: cartConf.quantity - 1,
                        })
                    );
                } else {
                    console.log(response.error);
                }
            } else {
                const response = await deleteCartItemApi(cartConf.id);

                if (response.status === "ok") {
                    dispatch(deleteItemAction({ id: cartConf.id }));
                } else {
                    console.log(response.error);
                }
            }

            setLoading(false);
        }
    };

    const handleIncreaseQuantity = async () => {
        if (!loading) {
            setLoading(true);

            if (cartConf.quantity < product.quantity) {
                const response = await updateCartItemApi(
                    cartConf.id,
                    cartConf.quantity + 1
                );

                if (response.status === "ok") {
                    dispatch(
                        changeQuantityAction({
                            id: cartConf.id,
                            quantity: cartConf.quantity + 1,
                        })
                    );
                } else {
                    console.log(response.error);
                }
            }
            setLoading(false);
        }
    };

    return (
        <div className="relative group w-full flex flex-col gap-3 ">
            <Link to={"/product/" + product._id}>
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
            </Link>

            <div className="flex flex-col w-full gap-1.5 bg-yellow-500 rounded-b-3xl rounded-t-lg">
                <Link to={"/product/" + product._id}>
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
                </Link>

                {!cartConf ? (
                    <button
                        type="button"
                        className="bg-white hover:bg-yellow-600 text-black hover:text-black text-md px-4 py-2 rounded-full border border-solid border-black text-center w-full uppercase"
                        disabled={product.quantity === 0 || loading}
                        onClick={handleAddToCart}
                    >
                        {product.quantity === 0
                            ? "Out of stock"
                            : "Add to cart"}
                    </button>
                ) : (
                    <div className="flex items-stretch justify-between h-10 bg-white text-black hover:text-black text-md rounded-full border border-solid border-black text-center w-full uppercase">
                        <button
                            type="button"
                            className="aspect-[1] h-full bg-yellow-500 rounded-full"
                            onClick={handleDecreaseQuantity}
                            disabled={loading}
                        >
                            -
                        </button>
                        <input
                            type="text"
                            className="w-[6rem] text-center px-3"
                            value={cartConf.quantity}
                            readOnly={true}
                        />
                        <button
                            type="button"
                            className="aspect-[1] h-full bg-yellow-500 rounded-full"
                            onClick={handleIncreaseQuantity}
                            disabled={loading}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
