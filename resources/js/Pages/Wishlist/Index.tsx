import { WishlistInterface } from "@/types";
import Layout from "@/Layouts/Layout";
import { router } from "@inertiajs/react";

const Wishlist = ({ wishlist }: { wishlist: WishlistInterface }) => {
    console.log(wishlist);
    const { items } = wishlist;
    return (
        <Layout>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-800 p-8">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                    Your Wishlist
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={"#"}
                                alt={item.product?.name}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                    {item.product?.name}
                                </h2>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-gray-900 dark:text-gray-100 font-bold">
                                        ${item.product?.price}
                                    </span>
                                    <div className="flex items-center">
                                        <span className="text-yellow-400">
                                            {4.0} ★
                                        </span>
                                        <button
                                            className={`ml-4 p-2 rounded-full ${
                                                true
                                                    ? "bg-red-500"
                                                    : "bg-gray-300"
                                            }`}
                                            onClick={() =>
                                                router.delete(
                                                    route(
                                                        "wishlist.remove_item",
                                                        item.product_id
                                                    )
                                                )
                                            }
                                        >
                                            ❤️
                                        </button>
                                    </div>
                                </div>
                                <button className="w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Wishlist;
