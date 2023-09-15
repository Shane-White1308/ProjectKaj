import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = ({ product, images, reviewSummary }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(
        product.quantity === 0 ? 0 : 1
    );
    const [pinCode, setPinCode] = useState("");

    const responsive = {
        any: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
        },
    };

    const handleDecreaseQuantity = () => {
        if (selectedQuantity > 0) setSelectedQuantity((q) => q - 1);
    };

    const handleIncreaseQuantity = () => {
        if (selectedQuantity < product.quantity)
            setSelectedQuantity((q) => q + 1);
    };

    const handleCheckDelivery = () => {};

    const handleBuyNow = () => {};

    const handleAddToCart = () => {};

    return (
        product._id && (
            <>
                <section className="text-gray-600 body-font">
                    <div className="container p-10 lg:p-20 mx-auto">
                        <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 gap-20 align-top">
                            <Carousel
                                responsive={responsive}
                                ssr={false}
                                infinite={false}
                                autoPlay={false}
                                deviceType="any"
                                arrows={true}
                            >
                                {images.map((image) => (
                                    <img
                                        key={image._id}
                                        alt={product.name}
                                        className="w-full aspect-square object-cover object-center rounded"
                                        src={image.url}
                                    />
                                ))}
                            </Carousel>

                            <div className="w-full">
                                {product.offer !== 0 && (
                                    <p className="text-sm p-1 mb-2 font-bold text-gray-200 border bg-yellow-600 rounded w-fit">
                                        {product.offer}% OFF
                                    </p>
                                )}

                                <h1 className="text-gray-50 text-4xl title-font font-medium mb-1">
                                    {product.name}
                                </h1>

                                <p className="text-lg text-gray-200 mt-3">
                                    {product.offer !== 0 ? (
                                        <>
                                            <span className="line-through opacity-50">
                                                Rs. {product.price}
                                            </span>
                                            <span className="text-red-400">
                                                {" "}
                                                Rs.{" "}
                                                {product.price -
                                                    (product.price *
                                                        product.offer) /
                                                        100}
                                            </span>
                                            <span className="text-red-400 text-sm">
                                                {" "}
                                                {product.offer}% OFF
                                            </span>
                                        </>
                                    ) : (
                                        <span>Rs. {product.price}</span>
                                    )}

                                    <span> | {product.size}</span>
                                </p>

                                <hr className="opacity-20 my-5" />

                                <p className="text-xl text-gray-200">
                                    {product.summary}
                                </p>

                                {reviewSummary && (
                                    <div className="flex my-4 items-center gap-2">
                                        <span className="flex items-center">
                                            {Array.from(
                                                Array(
                                                    reviewSummary.avgRating
                                                ).keys()
                                            ).map((i) => (
                                                <svg
                                                    key={i}
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 text-yellow-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                            ))}

                                            {reviewSummary.avgRating < 5 &&
                                                Array.from(
                                                    Array(
                                                        5 -
                                                            reviewSummary.avgRating
                                                    ).keys()
                                                ).map((i) => (
                                                    <svg
                                                        key={
                                                            reviewSummary.avgRating +
                                                            i
                                                        }
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        className="w-4 h-4 text-yellow-500"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                ))}
                                        </span>
                                        <span className="text-gray-400">
                                            {reviewSummary.totalReviews} Reviews
                                        </span>
                                    </div>
                                )}

                                <p className="leading-relaxed text-gray-300 mb-8">
                                    {product.description}
                                </p>

                                <div>
                                    <p className="mb-2 text-gray-300 text-sm">
                                        Quantity
                                    </p>
                                    <div className="border border-gray-500 flex items-stretch justify-start w-fit h-8">
                                        <button
                                            type="button"
                                            className="aspect-[1] bg-yellow-500"
                                            onClick={handleDecreaseQuantity}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            className="w-[6rem] text-center px-3"
                                            value={selectedQuantity}
                                            readOnly={true}
                                        />
                                        <button
                                            type="button"
                                            className="aspect-[1] bg-yellow-500"
                                            onClick={handleIncreaseQuantity}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <p className="mb-2 text-gray-300 text-sm">
                                        Deliver to
                                    </p>
                                    <div className="flex items-stretch justify-start h-8 gap-2">
                                        <input
                                            type="number"
                                            className="rounded border border-gray-500 px-2"
                                            placeholder="Enter you pincode"
                                            value={pinCode}
                                            onChange={(e) =>
                                                setPinCode(e.target.value)
                                            }
                                        />
                                        <button
                                            type="button"
                                            className="bg-yellow-500 px-2 rounded text-white font-bold"
                                            onClick={handleCheckDelivery}
                                        >
                                            Check
                                        </button>
                                    </div>
                                </div>

                                <hr className="opacity-20 my-8" />

                                <div className="flex justify-start gap-4">
                                    <button
                                        className="flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                                        onClick={handleBuyNow}
                                        disabled={selectedQuantity === 0}
                                    >
                                        {product.quantity === 0
                                            ? "Out of stock"
                                            : "Buy now"}
                                    </button>
                                    <button
                                        className="flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                                        onClick={handleAddToCart}
                                        disabled={selectedQuantity === 0}
                                    >
                                        {product.quantity === 0
                                            ? "Out of stock"
                                            : "Add to Cart"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    );
};

export default Hero;
