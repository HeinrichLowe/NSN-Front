import { OthersInformations } from "@/components/OthersInformations/OthersInformations";
import { UserFeed } from "@/components/UserFeed/UserFeed";
import { UserPainel } from "@/components/UserPainel/UserPainel";
import { Header } from "@/components/Header";

export default function Page() {
    return (
        <div className="container h-full mx-auto px-2 pt-2 flex flex-col break-all">
            <Header />
            
            <main className="flex-1 flex gap-5 justify-center md:justify-between overflow-hidden">
                <div className="hidden overflow-y-auto lg:min-w-[280px] lg:max-w-[400px] lg:flex-[1] lg:block">
                    <UserPainel />
                </div>

                <div className="max-w-[700px] flex-[2] overflow-y-auto">
                    <UserFeed />
                </div>

                <div className="hidden overflow-y-auto md:min-w-[280px] md:max-w-[400px] md:flex-[1] md:block">
                    <OthersInformations />
                </div>
            </main>
        </div>
    );
}