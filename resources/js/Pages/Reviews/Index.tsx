import Links from "@/Components/Links";
import CardOne from "@/Components/Reviews/CardOne";
import Stars from "@/Components/Reviews/Stars";
import Layout from "@/Layouts/Layout";
import { ReviewsPageInterface } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

const Index = ({
    reviews,
    product_id,
}: {
    reviews: ReviewsPageInterface;
    product_id: number;
}) => {
    const { data, links } = reviews;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        data: formData,
        setData,
        post,
        reset,
    } = useForm({
        rating: 0,
        comment: "",
    });

    const totalReviews = 345;
    const averageRating = 4.2;
    const ratingsBreakdown = {
        5: 200,
        4: 90,
        3: 30,
        2: 15,
        1: 10,
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/products/${product_id}/reviews`, {
            onSuccess: () => {
                reset();
                setIsModalOpen(false);
            },
        });
    };

    return (
        <Layout>
            <div className="py-4 px-4 sm:px-10 dark:bg-gray-800 min-h-screen">
                <div className="">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-7xl mx-auto grid gap-5">
                        <Link
                            href={`/products/${product_id}`}
                            className="text-sm text-blue-500 hover:text-blue-700 transition"
                        >
                            View Product
                        </Link>
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                                    Reviews Summary
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Based on {totalReviews} reviews
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Stars rating={averageRating} />
                                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 ml-4">
                                    {averageRating.toFixed(1)}
                                </p>
                            </div>
                        </div>

                        {/* Ratings Breakdown */}
                        <div className="space-y-4">
                            {[5, 4, 3, 2, 1].map((rating) => (
                                <div key={rating} className="flex items-center">
                                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 w-12 text-nowrap">
                                        {rating} Stars
                                    </span>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mx-4">
                                        <div
                                            className="bg-blue-500 h-4 rounded-full"
                                            style={{
                                                width: `${
                                                    (ratingsBreakdown[rating] /
                                                        totalReviews) *
                                                    100
                                                }%`,
                                            }}
                                        ></div>
                                    </div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400 text-nowrap">
                                        {ratingsBreakdown[rating]} reviews
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end mb-6">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Add Review
                            </button>
                        </div>
                    </div>
                </div>

                {data.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-6 mt-10">
                            {data.map((review, index) => (
                                <CardOne review={review} key={index} />
                            ))}
                        </div>
                        <div className="mt-8">
                            <Links links={links} />
                        </div>
                    </>
                ) : (
                    <div className="min-h-80 grid place-content-center">
                        <h2 className="text-3xl font-semibold">
                            No Reviews Yet
                        </h2>
                    </div>
                )}

                {/* Modal for creating/updating review */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
                            <h3 className="text-xl font-semibold mb-4">
                                Add or Update Review
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">
                                        Rating
                                    </label>
                                    <select
                                        className="w-full p-2 border rounded-lg"
                                        value={formData.rating}
                                        onChange={(e) =>
                                            setData(
                                                "rating",
                                                Number(e.target.value)
                                            )
                                        }
                                    >
                                        <option value={0}>Select Rating</option>
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <option key={value} value={value}>
                                                {value} Star{value > 1 && "s"}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">
                                        Comment
                                    </label>
                                    <textarea
                                        className="w-full p-2 border rounded-lg"
                                        value={formData.comment}
                                        onChange={(e) =>
                                            setData("comment", e.target.value)
                                        }
                                        rows={4}
                                    />
                                </div>
                                <div className="flex justify-end gap-4">
                                    <button
                                        type="button"
                                        className="text-gray-500 hover:text-gray-700"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Index;
