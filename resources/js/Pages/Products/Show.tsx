import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Layout from "@/Layouts/Layout";
import { Attribute, Category, Image, Product } from "@/types";
import { groupAttributes } from "@/utils/product";
import { Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";

const Show = ({
    product,
    category,
    images,
    attributes,
    wishlisted,
    in_cart,
}: {
    product: Product;
    category: Category;
    images: Image[];
    attributes: Attribute[];
    wishlisted: boolean;
    in_cart: boolean;
}) => {
    const { id, name, brand, description, price } = product;
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedAttr, setSelectedAttr] = useState<Attribute[]>([]);

    const options: { [key: string]: Attribute[] } = groupAttributes(attributes);
    const wishlistForm = useForm({ product_id: id });

    const { data, errors, setData } = useForm({
        attribute_ids: [] as { id: number }[],
        product_id: id,
        quantity: 1,
    });
    console.log(errors);
    return (
        <Layout>
            <div className="max-w-7xl mx-auto p-4 sm:p-8">
                {/* Product Section */}
                <div className="flex flex-col md:flex-row mt-8">
                    {/* Main Image */}
                    <div className="w-full md:w-2/3">
                        <div className="bg-gray-300 h-96 rounded-md mb-4 overflow-hidden">
                            <img
                                src={images[selectedImage].image_url}
                                alt=""
                                className="object-cover h-96 w-full"
                            />
                        </div>
                        <div className="flex space-x-2">
                            {images.map(
                                (image, index) =>
                                    index !== selectedImage && (
                                        <div
                                            key={index}
                                            className="bg-gray-300 h-24 w-24 rounded-lg cursor-pointer overflow-hidden"
                                            onClick={() =>
                                                setSelectedImage(index)
                                            }
                                        >
                                            <img
                                                src={image.image_url}
                                                alt=""
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    )
                            )}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/3 md:pl-8">
                        <a
                            href={`/categories/${category.name}`}
                            className="text-sm text-gray-500 hover:underline hover:text-gray-900"
                        >
                            Back to{" "}
                            <span className="capitalize">{category.name}</span>
                        </a>
                        <h1 className="text-3xl font-bold mt-4">{name}</h1>
                        <p className="text-sm my-2 capitalize">{brand}</p>
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                            <Link
                                href={`/products/${id}/reviews`}
                                className="text-sm text-gray-600"
                            >
                                3 Review(s)
                            </Link>
                            <a href="#" className="text-sm text-gray-600">
                                Add a Review
                            </a>
                        </div>

                        <p className="text-3xl mt-4">${price}</p>
                        <p className="text-sm mt-2">Availability: In stock</p>
                        <p className="text-sm">Product Code: #4657</p>
                        {options["Tags"] ? (
                            <p className="text-sm mb-4">
                                Tags:{" "}
                                <span>
                                    {options["Tags"].map((tag, index) =>
                                        index === 0
                                            ? `${tag.value},`
                                            : index ===
                                              options["Tags"].length - 1
                                            ? `,${tag.value}`
                                            : ` ${tag.value} `
                                    )}
                                </span>
                            </p>
                        ) : null}

                        <p className="text-sm">{description}</p>

                        {/* Color and Size Selection */}
                        <div className="mt-6">
                            {Object.keys(options).map((key, index) =>
                                key === "Tags" ? null : key === "Colors" ? (
                                    <div
                                        key={index}
                                        className="grid gap-1 my-4"
                                    >
                                        <label className="block text-sm">
                                            {key}
                                        </label>
                                        <div className="flex items-center gap-4 flex-wrap">
                                            {options[key].map(
                                                (option, index) => (
                                                    <span
                                                        key={index}
                                                        className={`block border-2 w-8 aspect-square rounded-full cursor-pointer ${
                                                            selectedAttr.find(
                                                                (attr) =>
                                                                    attr.value ===
                                                                    option.value
                                                            )
                                                                ? "border-green-600"
                                                                : "border-transparent"
                                                        }`}
                                                        onClick={() => {
                                                            const newArray =
                                                                selectedAttr.filter(
                                                                    (
                                                                        attribute
                                                                    ) =>
                                                                        attribute.name !==
                                                                        key
                                                                );
                                                            setSelectedAttr([
                                                                ...newArray,
                                                                option,
                                                            ]);
                                                        }}
                                                        style={{
                                                            backgroundColor:
                                                                option.value,
                                                        }}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div key={index} className="mb-4">
                                        <label className="block text-sm">
                                            {key}
                                        </label>
                                        <select
                                            className="border w-full p-2 mt-1 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                            onChange={(e) => {
                                                console.log(e.target.value);
                                                const selectedProperty =
                                                    options[key].find(
                                                        (option) =>
                                                            option.value ===
                                                            e.target.value
                                                    );
                                                const newArray =
                                                    selectedAttr.filter(
                                                        (attribute) =>
                                                            attribute.name !==
                                                            key
                                                    );
                                                setSelectedAttr([
                                                    ...newArray,
                                                    selectedProperty as Attribute,
                                                ]);
                                            }}
                                        >
                                            <option value="">
                                                Select {key}
                                            </option>
                                            {options[key].map(
                                                (option, index) => (
                                                    <option
                                                        key={index}
                                                        value={option.value}
                                                    >
                                                        {option.value}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                )
                            )}
                            <div className="mb-4">
                                <label className="block text-sm">Qty</label>
                                <input
                                    type="number"
                                    min={1}
                                    defaultValue={1}
                                    onChange={(e) =>
                                        setData(
                                            "quantity",
                                            parseInt(e.target.value)
                                        )
                                    }
                                    className="border w-20 p-2 mt-1 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
                            <div>
                                <PrimaryButton
                                    className="bg-black text-white py-2 px-4 rounded text-nowrap"
                                    onClick={() => {
                                        const modData = {
                                            ...data,
                                            attribute_ids: selectedAttr.map(
                                                (item) => ({
                                                    id: item.id,
                                                })
                                            ),
                                        };
                                        console.log(modData);
                                        router.post(route("cart"), modData, {
                                            preserveScroll: true,
                                        });
                                    }}
                                >
                                    Add to Cart
                                </PrimaryButton>
                                {in_cart && (
                                    <p className="text-sm mt-2">In Cart</p>
                                )}
                            </div>
                            {wishlisted ? (
                                <SecondaryButton
                                    className="border border-gray-300 text-black py-2 px-4 rounded text-nowrap"
                                    onClick={() =>
                                        wishlistForm.delete(
                                            route("wishlist.remove_item", id),
                                            {
                                                preserveScroll: true,
                                            }
                                        )
                                    }
                                >
                                    Remove from Wishlist
                                </SecondaryButton>
                            ) : (
                                <SecondaryButton
                                    className="border border-gray-300 text-black py-2 px-4 rounded text-nowrap"
                                    onClick={() =>
                                        wishlistForm.post(route("wishlist"), {
                                            preserveScroll: true,
                                        })
                                    }
                                >
                                    Add to Wishlist
                                </SecondaryButton>
                            )}
                        </div>

                        {/* Social Media Sharing */}
                        <div className="flex space-x-4 mt-6">
                            <button className="bg-gray-200 p-2 rounded">
                                Like
                            </button>
                            <button className="bg-gray-200 p-2 rounded">
                                Share
                            </button>
                            <button className="bg-gray-200 p-2 rounded">
                                Tweet
                            </button>
                            <button className="bg-gray-200 p-2 rounded">
                                Pin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Show;
