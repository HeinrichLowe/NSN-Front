import Link from "next/link";

export function Header() {
    return (
        <header className="w-full mb-2 py-1 bg-gray-100 border border-gray-300 rounded-xl shadow-md shadow-gray-400">
            <div className="h-full flex justify-center items-center">
                <Link 
                    href={'/home'} 
                    className="px-5 py-2 flex justify-center items-center gap-1 rounded-full hover:bg-gray-200/75"
                >
                    <img src="/images/miniLogo.png" alt="" className="max-h-5" />
                    <h1 className="font-medium">NSN</h1>
                </Link>
            </div>
        </header>
    );
}