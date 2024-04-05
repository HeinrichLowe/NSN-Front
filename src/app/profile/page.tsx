import { Header } from "@/components/Header";

export default function Page() {
    return (
        <div className="container h-full mx-auto px-2 pt-2 flex flex-col break-all">
            <Header />
            
            <main className="flex-1 flex gap-5 justify-center md:justify-between overflow-hidden">
                ...
            </main>
        </div>
    );
}