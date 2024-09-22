import { Link, Head } from "@inertiajs/react";
import { Category, PageProps, Product } from "@/types";
import Footer from "@/Components/Footer";
import WhyChooseUs from "@/Components/Welcome/WhyChooseUs";
import Hero from "@/Components/Welcome/Hero";
import CategoriesSection from "@/Components/Welcome/CategoriesSection";
import ProductCarousel from "@/Components/Welcome/ProductsCarosel";
import TestimonialsSection from "@/Components/Welcome/Testimonials";
import FeatureSection from "@/Components/Welcome/Features";
import ProductShowcaseSection from "@/Components/Welcome/3DViewer";

export default function Welcome({
    auth,
    categories,
}: PageProps<{
    laravelVersion: string;
    phpVersion: string;
    products: Product[] | [];
    categories: Category[] | [];
}>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
                <div className="relative min-h-screen">
                    <div className="relative app">
                        <header className="sticky top-0 z-20 bg-gray-200/60 dark:bg-gray-900/60 backdrop-blur-sm flex items-center justify-between px-10 py-2 gap-4">
                            <img src="/favicon-32x32.png" alt="Logo" />
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search product Here"
                                className="grow max-w-2xl border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            />
                            <nav className="flex justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6 min-h-screen max-w-[98vw] px-4 sm:px-20">
                            <Hero />
                            <WhyChooseUs />
                            <CategoriesSection categories={categories} />
                            <ProductCarousel />
                            <FeatureSection />
                            <TestimonialsSection />
                            <ProductShowcaseSection />
                        </main>

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
