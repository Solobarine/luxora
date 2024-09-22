import { HTMLAttributes } from "react";

export default function ApplicationLogo(
    props: HTMLAttributes<HTMLImageElement>
) {
    return <img src="/logo.avif" {...props} />;
}
