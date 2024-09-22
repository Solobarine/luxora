import Category from "@/Components/Welcome/Category";
import Layout from "@/Layouts/Layout";
import { Category as CategoryInterface, PageProps } from "@/types";

const Index = ({
    categories,
}: PageProps & { categories: CategoryInterface[] | [] }) => {
    console.log(categories);
    return (
        <Layout>
            <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                {categories.map(({ name, image_url }, index) => (
                    <Category key={index} name={name} image_url={image_url} />
                ))}
            </div>
        </Layout>
    );
};

export default Index;
