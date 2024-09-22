import { Link } from "@inertiajs/react";
import { useState } from "react";
import MenuLink from "./MenuLink";

const links = [
    { name: "Marketplace", boxIcon: "bx-store-alt", href: "/dashboard" },
    { name: "Categories", boxIcon: "bx-grid-alt", href: "#" },
    { name: "Discounts", boxIcon: "bxs-offer", href: "#" },
    { name: "Cart", boxIcon: "bx-cart-alt", href: "#" },
    { name: "Orders", boxIcon: "bx-package", href: "#" },
    { name: "Wishlist", boxIcon: "bx-heart", href: "#" },
    { name: "Settings", boxIcon: "bx-cog", href: "#" },
];

const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`relative bg-white dark:bg-gray-800 min-h-screen ${
                open ? "w-56" : "w-14"
            } text-gray-900 dark:text-gray-100 p-2 transition-all duration-500 overflow-x-hidden`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="text-2xl w-10 absolute right-1 top-1 rounded-full aspect-square bg-purple-600 dark:bg-purple-900"
            >
                {open ? "<" : ">"}
            </button>
            <div className="grid gap-3 text-base mt-10">
                {links.map((link, index) => (
                    <MenuLink key={index} open={open} link={link} />
                ))}
            </div>
        </div>
    );
};

export default Menu;
