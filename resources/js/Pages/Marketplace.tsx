import FilterSidebar from "@/Components/FilterSideBar";
import Card from "@/Components/Products/Card";
import Layout from "@/Layouts/Layout";
import { Products } from "@/types";
import { Head, Link } from "@inertiajs/react";

const Marketplace = ({ products }: { products: Products }) => {
    const { data, links } = products;
    console.log(data);
    return (
        <Layout>
            <Head title="Marketplace" />
            <section className="relative flex items-start">
                <FilterSidebar />
                <div className="grow py-10 md:py-4 px-4">
                    <div className="marketListings items-start">
                        {data.map((product, index) => (
                            <Card key={index} product={product} />
                        ))}
                    </div>
                    <div className="flex items-center gap-3 justify-center flex-wrap mt-3 p-2">
                        {links.map(({ active, url, label }, index) => (
                            <Link
                                key={index}
                                href={url as string}
                                className={`px-4 py-1 rounded-md font-semibold border shadow-md transition-all duration-500 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-800 hover:dark:bg-gray-100 hover:dark:text-gray-900 hover:dark:border-gray-800 ${
                                    active
                                        ? "bg-gray-700 text-gray-100 dark:bg-gray-100 dark:text-gray-900"
                                        : "bg-white dark:bg-gray-800"
                                }`}
                            >
                                <div
                                    dangerouslySetInnerHTML={{ __html: label }}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Marketplace;
