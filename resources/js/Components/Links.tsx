import { Link as LinkInterface } from "@/types";
import { Link } from "@inertiajs/react";

const Links = ({ links }: { links: LinkInterface[] | [] }) => {
    return (
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
                    <div dangerouslySetInnerHTML={{ __html: label }} />
                </Link>
            ))}
        </div>
    );
};

export default Links;
