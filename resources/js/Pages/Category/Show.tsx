import Links from "@/Components/Links";
import Card from "@/Components/Products/Card";
import Layout from "@/Layouts/Layout";
import { Category as CategoryInterface, Products } from "@/types";

const Show = ({
    category,
    products,
}: {
    category: CategoryInterface;
    products: Products;
}) => {
    console.log(category, products);
    const { data, links } = products;
    return (
        <Layout>
            <div className="px-4 md:px-10 py-4 dark:bg-gray-800">
                <h2 className="text-xl bg-white dark:bg-gray-900 p-4 rounded-md font-semibold capitalize">
                    {category.name}
                </h2>

                <div className="mt-3 todays items-center justify-center gap-3 flex-wrap">
                    {data.map((product, index) => (
                        <Card key={index} product={product} />
                    ))}
                </div>
                <Links links={links} />
            </div>
        </Layout>
    );
};

export default Show;
