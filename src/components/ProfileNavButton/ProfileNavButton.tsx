import Link from "next/link";

type ProfileNavButtonType = {
    value: string;
    href: string;
}

export default function ProfileNavButton({ value, href }: ProfileNavButtonType) {
    return (
        <Link href={href} className="py-2 px-3 font-semibold hover:bg-gray-200 hover:rounded-md">{value}</Link>
    );
};