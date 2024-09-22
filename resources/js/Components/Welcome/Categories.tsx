import { Category as CategoryInterface } from "@/types";
import Category from "./Category";

const Categories = ({ categories }: { categories: CategoryInterface[] }) => {
    return (
        <div className="py-6 flex items-center justify-between gap-2 flex-wrap">
            {categories.map((category, index) => (
                <Category
                    key={index}
                    name={category.name}
                    image_url={category.image_url}
                />
            ))}
            <Category name="More" image_url="" />
        </div>
    );
};

export default Categories;
