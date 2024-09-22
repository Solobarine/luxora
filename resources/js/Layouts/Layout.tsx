import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Head, usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    const {
        props: { auth },
    } = usePage();
    return (
        <main className="min-h-screen text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900">
            <Header auth={auth} />
            <section className="min-h-screen">
                <Head title="Categories" />
                {children}
            </section>
            <Footer />
        </main>
    );
};

export default Layout;
