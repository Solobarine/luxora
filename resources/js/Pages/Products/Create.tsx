import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, User } from "@/types";
import React, { useState, useEffect } from "react";

type Category = {
    id: number;
    name: string;
};

type Attribute = {
    name: string;
    values: string[];
};

const ProductFormPage = ({ auth }: PageProps) => {
    const [productName, setProductName] = useState<string>("");
    const [brand, setBrand] = useState<string>("");
    const [category, setCategory] = useState<number | null>(null);
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [stockQuantity, setStockQuantity] = useState<number>(0);
    const [categories, setCategories] = useState<Category[]>([]);
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    // State for attributes
    const [attributes, setAttributes] = useState<Attribute[]>([]);
    const [newAttributeName, setNewAttributeName] = useState<string>("");
    const [newAttributeValue, setNewAttributeValue] = useState<string>("");

    const handleAddAttribute = () => {
        if (newAttributeName.trim() && newAttributeValue.trim()) {
            const existingAttribute = attributes.find(
                (attr) => attr.name === newAttributeName
            );
            if (existingAttribute) {
                existingAttribute.values.push(newAttributeValue);
            } else {
                setAttributes([
                    ...attributes,
                    { name: newAttributeName, values: [newAttributeValue] },
                ]);
            }
            //setNewAttributeName("");
            setNewAttributeValue("");
        }
    };

    // Fetch categories from API (Mock data for now)
    useEffect(() => {
        const fetchCategories = async () => {
            // Replace with actual API call
            const data: Category[] = [
                { id: 1, name: "Electronics" },
                { id: 2, name: "Books" },
                { id: 3, name: "Clothing" },
            ];
            setCategories(data);
        };

        fetchCategories();
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setImages(files);

        // Preview images
        const previews = files.map((file) => URL.createObjectURL(file));
        setImagePreviews(previews);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        const formData = new FormData();
        formData.append("name", productName);
        formData.append("brand", brand);
        formData.append("description", description);
        formData.append("price", price.toString());
        formData.append("stock_quantity", stockQuantity.toString());
        formData.append("brand", brand);

        attributes.forEach((attribute, index) => {
            attribute.values.forEach((value, i) => {
                formData.append(`options[${index}][name]`, attribute.name);
                formData.append(`options[${index}][values][${i}]`, value);
            });
        });

        images.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
        });
        const productData = {
            name: productName,
            brand,
            category_id: category,
            description,
            price,
            stock_quantity: stockQuantity,
            options: attributes,
            images,
        };

        console.log("Product Data: ", productData);
        // Post the product data to your backend or API
    };

    console.log(images);

    return (
        <Authenticated
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create New Product
                </h2>
            }
            user={auth.user as User}
        >
            <div className="max-w-4xl mx-auto p-6">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-2 items-start"
                >
                    {/* Product Name */}
                    <div className="grid space-y-1">
                        <label
                            htmlFor="productName"
                            className="block text-sm font-medium"
                        >
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="productName"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            required
                        />
                    </div>

                    {/* Brand */}
                    <div className="grid space-y-1">
                        <label
                            htmlFor="brand"
                            className="block text-sm font-medium"
                        >
                            Brand (Optional)
                        </label>
                        <input
                            type="text"
                            id="brand"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                        />
                    </div>

                    {/* Category */}
                    <div className="grid space-y-1">
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium"
                        >
                            Category
                        </label>
                        <select
                            id="category"
                            value={category || ""}
                            onChange={(e) =>
                                setCategory(Number(e.target.value))
                            }
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            required
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Description */}
                    <div className="grid space-y-1 sm:col-span-2">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div className="grid space-y-1">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium"
                        >
                            Price ($)
                        </label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            step="0.01"
                            required
                        />
                    </div>

                    {/* Stock Quantity */}
                    <div className="grid space-y-1">
                        <label
                            htmlFor="stockQuantity"
                            className="block text-sm font-medium"
                        >
                            Stock Quantity
                        </label>
                        <input
                            type="number"
                            id="stockQuantity"
                            value={stockQuantity}
                            onChange={(e) =>
                                setStockQuantity(Number(e.target.value))
                            }
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div className="grid space-y-1 sm:col-span-2">
                        <label
                            htmlFor="attributes"
                            className="block text-sm font-medium"
                        >
                            Attributes
                        </label>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Attribute Name"
                                value={newAttributeName}
                                onChange={(e) =>
                                    setNewAttributeName(e.target.value)
                                }
                                className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            />
                            <input
                                type="text"
                                placeholder="Attribute Value"
                                value={newAttributeValue}
                                onChange={(e) =>
                                    setNewAttributeValue(e.target.value)
                                }
                                className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            />
                            <button
                                type="button"
                                onClick={handleAddAttribute}
                                className="bg-indigo-600 text-white py-1 px-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add Attribute
                            </button>
                        </div>
                        <div className="mt-4">
                            {attributes.map((attr, index) => (
                                <div key={index} className="mb-2">
                                    <strong>{attr.name}:</strong>{" "}
                                    {attr.values.join(", ")}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid space-y-1">
                        <label
                            htmlFor="images"
                            className="block text-sm font-medium"
                        >
                            Upload Images
                        </label>
                        <input
                            type="file"
                            id="images"
                            onChange={handleImageChange}
                            multiple
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm p-2"
                            accept="image/*"
                        />
                        <div className="flex flex-wrap mt-4 space-x-4">
                            {imagePreviews.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Product Image ${index + 1}`}
                                    className="w-20 h-20 object-cover rounded-lg shadow-sm"
                                />
                            ))}
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 col-start-1"
                    >
                        Create Product
                    </button>
                </form>
            </div>
        </Authenticated>
    );
};

export default ProductFormPage;
