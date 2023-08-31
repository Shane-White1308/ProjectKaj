const ReviewCard = ({review}) => {
    return <>
        <div>
            <p className="font-medium text-lg text-white">{review.userName}</p>

            <div className="flex items-center my-4">
                {Array.from(Array(review.rating).keys()).map((i) =>
                    <svg key={i} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                )}

                {review.rating < 5 && Array.from(Array(5 - review.rating).keys()).map((i) =>
                    <svg key={review.rating + i} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                )}
            </div>


            <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">{review.heading}</h3>

            <p className="text-sm text-gray-500 dark:text-gray-400">{review.description}</p>
        </div>
    </>
}

export default ReviewCard;