import { ReviewInterface } from "@/types";
import Stars from "./Stars";

const CardOne = ({ review }: { review: ReviewInterface }) => {
    console.log(review);
    const { user, comment, rating } = review;
    return (
        <div className="flex items-start gap-x-6 gap-y-6 flex-wrap p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            {/* Reviewer Information */}
            <div className="flex items-start gap-4 w-full lg:w-auto">
                <img
                    src="https://via.placeholder.com/50"
                    alt={user?.name}
                    className="rounded-full w-16 h-16 object-cover bg-gray-500"
                />
                <div>
                    <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {user?.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Total Spend:{" "}
                        <strong className="text-gray-900 dark:text-gray-100">
                            $400
                        </strong>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Total Reviews:{" "}
                        <strong className="text-gray-900 dark:text-gray-100">
                            14
                        </strong>
                    </p>
                </div>
            </div>

            {/* Review Content */}
            <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                    <Stars rating={rating} />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        24-10-2024
                    </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default CardOne;
