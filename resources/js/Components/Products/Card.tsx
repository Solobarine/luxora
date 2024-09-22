import { PageProps, Product } from "@/types";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";

const Card = ({ product }: { product: Product }) => {
    const {
        props: { auth },
    } = usePage<PageProps>();
    const { id, images, name, brand, price, attributes, wishlisted } = product;

    const wishlistForm = useForm({
        product_id: id,
    });

    const {
        data,
        errors,
        post,
        delete: destroy,
        processing,
        recentlySuccessful,
    } = wishlistForm;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 min-h-64">
            {/* Product Image */}
            <div className="relative">
                <img
                    src={images && images[0].image_url}
                    alt="Product"
                    className="w-full h-64 object-cover"
                />
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    New Arrival
                </span>
                {auth.user &&
                    (wishlisted ? (
                        <button
                            className="absolute bottom-2 right-2 w-7 aspect-square rounded-full bg-white"
                            onClick={() =>
                                destroy(route("wishlist.remove_item", id), {
                                    preserveScroll: true,
                                })
                            }
                        >
                            <i className="bx bxs-heart text-lg text-red-500" />
                        </button>
                    ) : (
                        <button
                            className="absolute bottom-2 right-2 w-7 aspect-square rounded-full bg-white"
                            onClick={() =>
                                post(route("wishlist"), {
                                    preserveScroll: true,
                                })
                            }
                        >
                            <i className="bx bx-heart text-lg text-red-500" />
                        </button>
                    ))}
            </div>
            {/* Product Details */}
            <div className="p-4">
                <Link
                    href={`/products/${id}`}
                    className="text-lg font-semibold text-gray-800 dark:text-gray-200"
                >
                    {name}
                </Link>
                <p className="text-sm uppercase mt-1">{brand}</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        ${price}
                    </span>
                    <PrimaryButton
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        onClick={() => router.get(`/products/${id}`)}
                    >
                        View Product
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Card;
