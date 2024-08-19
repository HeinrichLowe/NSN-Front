import Link from "next/link";

export default function Photos() {
    return (
        <div className="my-3 px-3 flex flex-col bg-gray-100 border border-gray-300 rounded-xl shadow-md shadow-gray-400">
            <Link href={'/profile/photos'} className="py-2 text-2xl font-bold hover:underline">
                Photos
            </Link>

            <div className="py-2">
                conteúdo
            </div>
        </div>
    );
};