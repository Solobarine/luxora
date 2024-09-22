import { Link, usePage } from "@inertiajs/react";

const MenuLink = ({
    link,
    open,
    ...props
}: {
    link: { boxIcon: string; name: string; href: string };
    open: boolean;
}) => {
    const { url } = usePage();
    return (
        <Link
            href={link.href}
            {...props}
            className={`flex items-center gap-1 p-2 rounded-lg transition-colors duration-500 hover:text-white hover:bg-purple-600/50 hover:dark:bg-purple-900/50 hover:shadow-md ${
                url === link.href
                    ? "bg-purple-600/50 dark:bg-purple-900/50"
                    : "bg-transparent"
            }`}
        >
            <i className={`bx ${link.boxIcon} text-2xl`} />
            <p
                className={`${
                    open ? "opacity-100" : "opacity-0"
                } transition-all duration-500`}
            >
                {open && link.name}
            </p>
        </Link>
    );
};

export default MenuLink;
