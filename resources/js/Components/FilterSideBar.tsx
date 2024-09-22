import { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

type Parameters = {
    categories: string[];
    priceRange: string[];
    brands: string[];
    ratings: string[];
    discounts: string[];
    colors: string[];
    sizes: string[];
    availability: string[];
};

const FilterSidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [parameters, setParameters] = useState<Parameters>({
        categories: [],
        priceRange: [],
        brands: [],
        ratings: [],
        discounts: [],
        colors: [],
        sizes: [],
        availability: [],
    });

    console.log(parameters);

    const categories = [
        "Electronics",
        "Fashion",
        "Home & Kitchen",
        "Beauty & Personal Care",
    ];
    const priceRanges = [
        "Under $25",
        "$25 to $50",
        "$50 to $100",
        "Above $100",
    ];
    const brands = ["Nike", "Apple", "Samsung", "Sony"];
    const ratings = ["5 Stars", "4 Stars & Up", "3 Stars & Up"];
    const discounts = ["10% off or more", "25% off or more", "50% off or more"];
    const colors = ["Red", "Blue", "Black", "White"];
    const sizes = ["Small", "Medium", "Large"];
    const availability = ["In Stock", "Out of Stock"];

    const handleCheckboxChange = (
        category: keyof Parameters,
        value: string
    ) => {
        setParameters((prev) => ({
            ...prev,
            [category]: prev[category].includes(value)
                ? prev[category].filter((item) => item !== value)
                : [...prev[category], value],
        }));
    };

    return (
        <aside
            className={`fixed top-0 md:sticky md:translate-x-0 bg-white dark:bg-gray-800 p-4 w-64 shadow-lg dark:text-gray-100 transition-transform duration-500 ${
                isOpen ? "translate-x-0" : "-translate-x-64"
            }`}
        >
            <SecondaryButton className="">Apply Filters</SecondaryButton>
            <PrimaryButton
                className={`absolute top-1 w-8 md:hidden aspect-square rounded-full ${
                    isOpen ? "right-0" : "-right-5"
                }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <i className="bx bx-filter" />
            </PrimaryButton>
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            <div className="mb-6">
                <h3 className="text-md font-bold mb-2">Category</h3>
                <ul>
                    {categories.map((category) => (
                        <li key={category}>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    value={category}
                                    onChange={() =>
                                        handleCheckboxChange(
                                            "categories",
                                            category
                                        )
                                    }
                                />
                                {category}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-md font-bold mb-2">Price Range</h3>
                <ul>
                    {priceRanges.map((range) => (
                        <li key={range}>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    value={range}
                                    onChange={() =>
                                        handleCheckboxChange(
                                            "priceRange",
                                            range
                                        )
                                    }
                                />
                                {range}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-md font-bold mb-2">Brand</h3>
                <ul>
                    {brands.map((brand) => (
                        <li key={brand}>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    value={brand}
                                    onChange={() =>
                                        handleCheckboxChange("brands", brand)
                                    }
                                />
                                {brand}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-md font-bold mb-2">Rating</h3>
                <ul>
                    {ratings.map((rating) => (
                        <li key={rating}>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    value={rating}
                                    onChange={() =>
                                        handleCheckboxChange("ratings", rating)
                                    }
                                />
                                {rating}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-md font-bold mb-2">Discount</h3>
                <ul>
                    {discounts.map((discount) => (
                        <li key={discount}>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    value={discount}
                                    onChange={() =>
                                        handleCheckboxChange(
                                            "discounts",
                                            discount
                                        )
                                    }
                                />
                                {discount}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-md font-bold mb-2">Color</h3>
                <ul>
                    {colors.map((color) => (
                        <li key={color}>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    value={color}
                                    onChange={() =>
                                        handleCheckboxChange("colors", color)
                                    }
                                />
                                {color}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-md font-bold mb-2">Size</h3>
                <ul>
                    {sizes.map((size) => (
                        <li key={size}>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    value={size}
                                    onChange={() =>
                                        handleCheckboxChange("sizes", size)
                                    }
                                />
                                {size}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-md font-bold mb-2">Availability</h3>
                <ul>
                    {availability.map((status) => (
                        <li key={status}>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    value={status}
                                    onChange={() =>
                                        handleCheckboxChange(
                                            "availability",
                                            status
                                        )
                                    }
                                />
                                {status}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-2 justify-end">
                <SecondaryButton>Cancel</SecondaryButton>
                <PrimaryButton>Apply Filter</PrimaryButton>
            </div>
        </aside>
    );
};

export default FilterSidebar;
