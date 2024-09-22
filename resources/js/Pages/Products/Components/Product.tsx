import { Dispatch, SetStateAction, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { Attribute, Product as ProductInterface } from "@/types";
import { groupAttributes } from "@/utils/product";
import { router } from "@inertiajs/react";

const Product = ({
    itemId,
    product,
    setProduct,
}: {
    itemId: number;
    product: ProductInterface;
    setProduct: Dispatch<SetStateAction<ProductInterface | null>>;
}) => {
    const [selectedAttr, setSelectedAttr] = useState<Attribute[]>([]);
    const { images, name, brand, attributes, price } = product;

    console.log(selectedAttr);
    const options = groupAttributes(attributes as Attribute[]);

    const selectItem = (data: Attribute) => {
        const newArray = selectedAttr.filter((attr) => attr.name !== data.name);
        setSelectedAttr(newArray ? [...newArray, data] : [data]);
    };
    return (
        <>
            <div
                id="overlay"
                className="fixed inset-0 bg-gray-800/40 backdrop-blur-sm"
                onClick={() => setProduct(null)}
            />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform w-[98%] p-4 md:p-6 max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <button
                    className="absolute top-2 right-2 text-3xl font-bold hover:text-red-500 transition-colors duration-300"
                    onClick={() => setProduct(null)}
                >
                    &times;
                </button>

                {/* Product Section */}
                <div className="flex flex-col sm:flex-row mt-8">
                    {/* Main Image */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="bg-gray-300 h-16 w-16 sm:h-64 sm:w-64 aspect-square rounded-lg overflow-hidden">
                            <img
                                src={images && images[0].image_url}
                                alt={name}
                                className="object-cover h-full aspect-square"
                            />
                        </div>

                        <div className="hidden sm:flex flex-wrap gap-2 sm:flex-col sm:gap-4">
                            {images?.slice(1).map((image, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-300 h-16 w-16 rounded-lg cursor-pointer overflow-hidden"
                                >
                                    <img
                                        src={image.image_url}
                                        alt=""
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full sm:pl-9 mt-6 sm:mt-0">
                        <h1 className="text-lg font-bold">{name}</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400 my-2 capitalize">
                            {brand}
                        </p>
                        <p className="text-3xl text-gray-800 dark:text-gray-100">
                            ${price}
                        </p>

                        {/* Color and Size Selection */}
                        <div className="mt-4">
                            {Object.keys(options).map((key, index) =>
                                key === "Tags" ? null : key === "Colors" ? (
                                    <div key={index} className="my-4">
                                        <label className="block text-sm font-medium">
                                            {key}
                                        </label>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {options[key].map(
                                                (option, index) => (
                                                    <span
                                                        key={index}
                                                        className={`block w-8 h-8 rounded-full cursor-pointer border-4 ${
                                                            selectedAttr.find(
                                                                (attr) =>
                                                                    attr.id ===
                                                                    option.id
                                                            )
                                                                ? "border-green-600"
                                                                : "border-transparent"
                                                        }`}
                                                        style={{
                                                            backgroundColor:
                                                                option.value,
                                                        }}
                                                        onClick={() =>
                                                            selectItem(option)
                                                        }
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div key={index} className="my-4">
                                        <label className="block text-sm font-medium">
                                            {key}
                                        </label>
                                        <div className="flex gap-2 flex-wrap">
                                            {options[key].map(
                                                (option, index) => (
                                                    <span
                                                        key={index}
                                                        className={`px-4 py-1 border-2 rounded-md cursor-pointer  hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                                                            selectedAttr.find(
                                                                (attr) =>
                                                                    attr.id ===
                                                                    option.id
                                                            )
                                                                ? "border-green-600"
                                                                : "border-gray-300 dark:border-gray-500"
                                                        }`}
                                                        onClick={() =>
                                                            selectItem(option)
                                                        }
                                                    >
                                                        {option.value}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6">
                            <PrimaryButton
                                onClick={() => {
                                    const data = {
                                        attribute_ids: selectedAttr.map(
                                            (attr) => ({ id: attr.id })
                                        ),
                                    };
                                    router.patch(
                                        route("cart.update_item", itemId),
                                        data,
                                        {
                                            onSuccess: () => setProduct(null),
                                        }
                                    );
                                }}
                            >
                                Apply
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
