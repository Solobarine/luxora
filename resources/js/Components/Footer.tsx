import { Link } from "@inertiajs/react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="p-8 text-white bg-gray-900">
            <div className="flex items-start justify-between flex-wrap pb-6 md:flex-row">
                <div className="grid gap-10 grow">
                    <div>
                        <span className="flex items-center gap-2">
                            <img src="/favicon-32x32.png" alt="Logo" />
                            <p>Luxora</p>
                        </span>
                        <small>"Let's Shop Beyond Boundaries"</small>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href="#" className="text-white/60 text-2xl">
                            <i className="bx bxl-facebook-square" />
                        </Link>
                        <Link href="#" className="text-white/60 text-2xl">
                            <i className="bx bxl-linkedin-square" />
                        </Link>
                        <Link href="#" className="text-white/60 text-2xl">
                            <i className="bx bxl-youtube" />
                        </Link>
                        <Link href="#" className="text-white/60 text-2xl">
                            <i className="bx bxl-instagram-square" />
                        </Link>
                        <Link href="#" className="text-white/60 text-2xl">
                            <i className="bx bxl-twitch" />
                        </Link>
                    </div>
                </div>
                <div className="grow flex flex-col md:flex-row items-start justify-between gap-4">
                    <ul>
                        SHOP
                        <li>
                            <Link href="#">All Categories</Link>
                        </li>
                        <li>
                            <Link href="#">Limited Editions</Link>
                        </li>
                        <li>
                            <Link href="#">Discounts</Link>
                        </li>
                    </ul>
                    <ul>
                        COMPANY
                        <li>
                            <Link href="#">About Us</Link>
                        </li>
                        <li>
                            <Link href="#">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="#">Affiliates</Link>
                        </li>
                    </ul>
                    <ul>
                        SUPPORT
                        <li>
                            <Link href="#">FAQs</Link>
                        </li>
                        <li>
                            <Link href="#">Cookie Policy</Link>
                        </li>
                        <li>
                            <Link href="#">Terms and Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-4" />
            <p className="text-center">&copy; 2005 - {year}. Luxora.com</p>
        </footer>
    );
}

export default Footer;
