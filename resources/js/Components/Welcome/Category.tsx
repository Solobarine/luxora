import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

const Category = ({ image_url, name }: { image_url: string; name: string }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer min-h-64"
    >
        <img
            src={image_url}
            alt={name}
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300"></div>
        <Link
            href={`/categories/${name}`}
            className="absolute bottom-4 left-4 text-white font-semibold text-xl"
        >
            {name}
        </Link>
    </motion.div>
);

export default Category;
