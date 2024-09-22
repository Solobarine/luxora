import { Category as CategoryInterface } from "@/types";
import { Link } from "@inertiajs/react";

const Category = ({ category }: { category: CategoryInterface }) => {
    return (
        <Link
            href={
                category.name === "More"
                    ? "/categories"
                    : `/categories/${category.name}`
            }
            className="w-fit"
        >
            <img
                src={category.image_url}
                alt={category.name}
                className="w-14 aspect-square object-cover bg-gray-300 rounded-full"
            />
            <p className="font-semibold text-sm text-center">{category.name}</p>
        </Link>
    );
};

export default Category;
