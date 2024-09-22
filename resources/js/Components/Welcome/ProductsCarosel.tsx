import { useState } from "react";
import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        category: "men",
        price: 59.99,
        image: "https://via.placeholder.com/400x300",
        title: "Men's Casual Shirt",
    },
    {
        id: 2,
        category: "men",
        price: 89.99,
        image: "https://via.placeholder.com/400x300",
        title: "Men's Leather Jacket",
    },
    {
        id: 3,
        category: "women",
        price: 45.99,
        image: "https://via.placeholder.com/400x300",
        title: "Women's Summer Dress",
    },
    {
        id: 4,
        category: "women",
        price: 75.99,
        image: "https://via.placeholder.com/400x300",
        title: "Women's Blazer",
    },
    {
        id: 5,
        category: "new",
        price: 120.0,
        image: "https://via.placeholder.com/400x300",
        title: "Smart Watch",
    },
    {
        id: 6,
        category: "new",
        price: 299.99,
        image: "https://via.placeholder.com/400x300",
        title: "Wireless Earbuds",
    },
    {
        id: 7,
        category: "best",
        price: 29.99,
        image: "https://via.placeholder.com/400x300",
        title: "Retro Sunglasses",
    },
    {
        id: 8,
        category: "best",
        price: 99.99,
        image: "https://via.placeholder.com/400x300",
        title: "Vintage Record Player",
    },
    {
        id: 9,
        category: "women",
        price: 149.99,
        image: "https://via.placeholder.com/400x300",
        title: "Designer Handbag",
    },
    {
        id: 10,
        category: "men",
        price: 49.99,
        image: "https://via.placeholder.com/400x300",
        title: "Men's Running Shoes",
    },
];

const ProductCarousel = () => {
    const [activeCategory, setActiveCategory] = useState("new");

    const filteredProducts = products.filter(
        (product) => product.category === activeCategory
    );

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto">
                <div className="flex justify-center space-x-4 mb-8">
                    {["new", "best", "men", "women"].map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 font-semibold rounded-lg ${
                                activeCategory === category
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-200 text-gray-800"
                            }`}
                        >
                            {category.toUpperCase()}{" "}
                        </motion.button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-xl">
                                    {product.title}
                                </h3>
                                <p className="text-gray-700 mt-2">
                                    ${product.price}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCarousel;
