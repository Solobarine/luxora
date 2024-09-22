import Category from "./Category";
import { Category as CategoryInterface } from "@/types";

const CategoriesSection = ({
    categories,
}: {
    categories: CategoryInterface[];
}) => (
    <section className="py-20 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category, index) => (
                <Category
                    key={index}
                    image_url={category.image_url}
                    name={category.name}
                />
            ))}
        </div>
    </section>
);

export default CategoriesSection;
