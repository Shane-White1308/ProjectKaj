import ReviewCard from "./ReviewCard";

const Reviews = ({ reviews, summary }) => {
    return (
        <>
            <section className="p-10 lg:p-20">
                <div className="flex items-center mb-2">
                    {Array.from(Array(summary.avgRating).keys()).map((i) => (
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

                    {summary.avgRating < 5 &&
                        Array.from(Array(5 - summary.avgRating).keys()).map(
                            (i) => (
                                <svg
                                    key={summary.avgRating + i}
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
                        {summary.avgRating} out of 5
                    </p>
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {summary.totalReviews} global ratings
                </p>

                {Array.from(Array(5).keys()).map((i) => (
                    <div key={i} className="flex items-center mt-8">
                        <span className="text-sm font-medium text-gray-300">
                            {i + 1} star
                        </span>
                        <div className="lg:w-1/4 w-1/2 h-5 mx-4 bg-gray-700 rounded">
                            <div
                                className="h-5 bg-yellow-300 rounded"
                                style={{
                                    width:
                                        parseInt(
                                            ((summary[i + 1 + "starReviews"] ||
                                                0) *
                                                100) /
                                                summary.totalReviews
                                        ) + "%",
                                }}
                            ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-400">
                            {parseInt(
                                ((summary[i + 1 + "starReviews"] || 0) * 100) /
                                    summary.totalReviews
                            )}
                            %
                        </span>
                    </div>
                ))}
            </section>

            {reviews?.length > 0 ? (
                <section className="p-6 lg:p-14">
                    <div className="flex flex-wrap">
                        {reviews.map((review) => (
                            <div
                                key={review._id}
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
    );
};

export default Reviews;
