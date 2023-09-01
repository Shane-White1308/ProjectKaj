import { useState, useEffect } from "react";
import productImage1 from "../../assets/productimages/product1.jpg";
import closeIcon from "../../assets/icons/close.png";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

const Cart = ({ setOpen }) => {
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let temp = [];

        for (let i = 0; i < 10; i++) {
            let product = {
                id: faker.database.mongodbObjectId(),
                name: faker.commerce.product(),
                price: faker.number.int({ min: 500, max: 2000 }),
                image: productImage1,
                quantity: faker.number.int({ min: 1, max: 7 }),
            };

            temp.push(product);
        }

        setProducts(temp);
    }, []);

    useEffect(() => {
        let total = 0;

        if (products.length > 0) {
            products.forEach((product) => {
                total += product.price;
            });

            setTotalPrice(total);
        }
    }, [products]);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleRemoveItem = () => {};

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
                                {products.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                        <Link
                                            to={"/product/" + product.id}
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
                                                    <Link
                                                        to={
                                                            "/product/" +
                                                            product.id
                                                        }
                                                    >
                                                        {product.name}
                                                    </Link>
                                                </h3>
                                                <p className="ml-4">
                                                    Rs.{" "}
                                                    {product.price.toLocaleString()}
                                                </p>
                                            </div>

                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500">
                                                    Qty {product.quantity}
                                                </p>

                                                <div className="flex">
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={
                                                            handleRemoveItem
                                                        }
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>Rs {totalPrice.toLocaleString()}</p>
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
