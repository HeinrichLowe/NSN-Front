import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="my-3 flex bg-gray-100 border border-gray-300 rounded-xl shadow-md shadow-gray-400">
                <div className="flex-[2] pt-2 px-2 border-r-2">
                    <Link href={'/profile/about'} className="px-2 text-2xl font-bold hover:underline">
                        About
                    </Link>
                    <div className="w-full h-full py-2 flex flex-col text-lg font-medium">
                        <Link href={'/profile/about'} className="p-2 hover:bg-gray-300 rounded-md">Overview</Link>
                        <Link href={'/profile/about'} className="p-2 hover:bg-gray-300 rounded-md">Work and education</Link>
                        <Link href={'/profile/about'} className="p-2 hover:bg-gray-300 rounded-md">Places where he lived</Link>
                        <Link href={'/profile/about'} className="p-2 hover:bg-gray-300 rounded-md">Basic and contact information</Link>
                        <Link href={'/profile/about'} className="p-2 hover:bg-gray-300 rounded-md">Family and relationship</Link>
                        <Link href={'/profile/about'} className="p-2 hover:bg-gray-300 rounded-md">Detail about you</Link>
                    </div>
                </div>

                <div className="flex-[5] p-2">
                    conteúdo
                </div>
            </div>

            <div className="my-3 flex flex-col bg-gray-100 border border-gray-300 rounded-xl shadow-md shadow-gray-400">
                <Link href={'/profile/friends'} className="p-2 text-2xl font-bold hover:underline">
                    Friends
                </Link>

                <div className="p-2">
                    conteúdo
                </div>
            </div>

            <div className="my-3 flex flex-col bg-gray-100 border border-gray-300 rounded-xl shadow-md shadow-gray-400">
                <Link href={'/profile/photos'} className="p-2 text-2xl font-bold hover:underline">
                    Photos
                </Link>

                <div className="p-2">
                    conteúdo
                </div>
            </div>
        </>
    );
};