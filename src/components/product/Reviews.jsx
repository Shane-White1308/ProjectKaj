import ReviewCard from "./ReviewCard";

const Reviews = ({ review }) => {
    return (
        review && (
            <>
                <section className="p-10 lg:p-20">
                    <div className="flex items-center mb-2">
                        {Array.from(Array(review.rating).keys()).map((i) => (
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

                        {review.rating < 5 &&
                            Array.from(Array(5 - review.rating).keys()).map(
                                (i) => (
                                    <svg
                                        key={review.rating + i}
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
                                )
                            )}
                        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                            {review.rating} out of 5
                        </p>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {review.reviewCount} global ratings
                    </p>

                    <div className="flex items-center mt-8">
                        <span className="text-sm font-medium text-gray-300">
                            5 star
                        </span>
                        <div className="lg:w-1/4 w-1/2 h-5 mx-4 bg-gray-700 rounded">
                            <div
                                className="h-5 bg-yellow-300 rounded"
                                style={{
                                    width:
                                        parseInt(
                                            (review.star5_count * 100) /
                                                review.reviewCount
                                        ) + "%",
                                }}
                            ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-400">
                            {parseInt(
                                (review.star5_count * 100) / review.reviewCount
                            )}
                            %
                        </span>
                    </div>

                    <div className="flex items-center mt-8">
                        <span className="text-sm font-medium text-gray-300">
                            4 star
                        </span>
                        <div className="lg:w-1/4 w-1/2 h-5 mx-4 bg-gray-700 rounded">
                            <div
                                className="h-5 bg-yellow-300 rounded"
                                style={{
                                    width:
                                        parseInt(
                                            (review.star4_count * 100) /
                                                review.reviewCount
                                        ) + "%",
                                }}
                            ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-400">
                            {parseInt(
                                (review.star4_count * 100) / review.reviewCount
                            )}
                            %
                        </span>
                    </div>

                    <div className="flex items-center mt-8">
                        <span className="text-sm font-medium text-gray-300">
                            3 star
                        </span>
                        <div className="lg:w-1/4 w-1/2 h-5 mx-4 bg-gray-700 rounded">
                            <div
                                className="h-5 bg-yellow-300 rounded"
                                style={{
                                    width:
                                        parseInt(
                                            (review.star3_count * 100) /
                                                review.reviewCount
                                        ) + "%",
                                }}
                            ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-400">
                            {parseInt(
                                (review.star3_count * 100) / review.reviewCount
                            )}
                            %
                        </span>
                    </div>

                    <div className="flex items-center mt-8">
                        <span className="text-sm font-medium text-gray-300">
                            2 star
                        </span>
                        <div className="lg:w-1/4 w-1/2 h-5 mx-4 bg-gray-700 rounded">
                            <div
                                className="h-5 bg-yellow-300 rounded"
                                style={{
                                    width:
                                        parseInt(
                                            (review.star2_count * 100) /
                                                review.reviewCount
                                        ) + "%",
                                }}
                            ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-400">
                            {parseInt(
                                (review.star2_count * 100) / review.reviewCount
                            )}
                            %
                        </span>
                    </div>

                    <div className="flex items-center mt-8">
                        <span className="text-sm font-medium text-gray-300">
                            1 star
                        </span>
                        <div className="lg:w-1/4 w-1/2 h-5 mx-4 bg-gray-700 rounded">
                            <div
                                className="h-5 bg-yellow-300 rounded"
                                style={{
                                    width:
                                        parseInt(
                                            (review.star1_count * 100) /
                                                review.reviewCount
                                        ) + "%",
                                }}
                            ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-400">
                            {parseInt(
                                (review.star1_count * 100) / review.reviewCount
                            )}
                            %
                        </span>
                    </div>
                </section>

                {review.reviews?.length > 0 ? (
                    <section className="p-6 lg:p-14">
                        <div className="flex flex-wrap">
                            {review.reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="w-full lg:w-1/2 p-4 lg:p-6"
                                >
                                    <ReviewCard review={review} />
                                </div>
                            ))}
                        </div>
                    </section>
                ) : (
                    <></>
                )}
            </>
        )
    );
};

export default Reviews;
