import { useState, useEffect } from "react";
import closeIcon from "../../assets/icons/close.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = ({ setOpen }) => {
    const cartItems = useSelector((state) => state.cart.items);

    const [productPrice, setProductPrice] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);

    useEffect(() => {
        setLoading(true);

        let calculated = true;
        let temp = 0;

        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];

            if (!productPrice.hasOwnProperty(item.product)) {
                calculated = false;
                break;
            } else {
                temp += productPrice[item.product] * item.quantity;
            }
        }

        if (calculated) {
            setTotalPrice(temp);
            setLoading(false);
        }
    }, [cartItems, productPrice]);

    useEffect(() => {
        setShow(true);
    }, []);

    const addProductPrice = (productId, price) => {
        setProductPrice((prev) => ({ ...prev, [productId]: price }));
    };

    const _ = ["translate-x-full", "translate-x-0", "hidden", "block"];

    return (
        <div className="z-[1002]">
            <div
                className={`fixed top-0 left-0 ${
                    show ? "block" : "hidden"
                } bg-black bg-opacity-60 w-full h-screen z-[1002]`}
            />

            <div
                className={`fixed inset-y-0 right-0 ${
                    show ? "translate-x-0" : "translate-x-full"
                } w-full flex flex-col overflow-hidden bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 z-[1002]`}
            >
                <div className="flex-1 overflow-y-auto">
                    <div className="flex items-start justify-between sticky top-0 bg-white p-6">
                        <h2 className="text-lg font-medium text-gray-900">
                            Cart
                        </h2>

                        <div className="ml-3 flex h-7 items-center">
                            <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                            >
                                <img
                                    src={closeIcon}
                                    alt="Close panel"
                                    className="h-6 w-6"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="mt-4 px-6">
                        <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200">
                                {cartItems.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        setProductPrice={addProductPrice}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>
                            {!loading
                                ? "Rs " + totalPrice.toLocaleString()
                                : "Calculating..."}
                        </p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/checkout"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
