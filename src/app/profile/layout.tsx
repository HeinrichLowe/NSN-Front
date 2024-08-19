import { Header } from "@/components/Header";
import ProfileNavButton from "@/components/ProfileNavButton/ProfileNavButton";
import ProfileUserInfo from "@/components/ProfileUserInfo/ProfileUserInfo";
import { ReactNode } from "react";

export default function ProfileLayout({ children }: { children: ReactNode }) {
    return (
        <div className="container h-full mx-auto px-2 pt-2 flex flex-col break-all">
            <Header/>
            <div className="bg-gray-100 border border-gray-300 rounded-xl shadow-md shadow-gray-400">
                <div className="w-full">
                    <div className="flex items-center max-w-full max-h-[350px] overflow-hidden rounded-md 2xl:max-h-[460px]">
                        <img 
                            src="/images/capa.webp" 
                            alt="" 
                            className="object-cover w-full h-full object-center"
                        />
                    </div>

                    <div className="-mt-8">
                        <ProfileUserInfo />
                    </div>
                </div>

                <div className="mt-3 px-10">
                    <div className="w-full border-b-2 border-b-gray-400 rounded-full"></div>
                </div>

                <nav className="my-1 px-10 flex items-center">
                    <div className="flex-1 flex">
                        <ProfileNavButton href="/profile" value="Summary" />
                        <ProfileNavButton href="/profile/about" value="About" />
                        <ProfileNavButton href="/profile/friends" value="Friends" />
                        <ProfileNavButton href="/profile/photos" value="Photos" />
                    </div>

                    <div>
                        <button className="px-2 bg-gray-300/50 border border-gray-500/50 rounded-md">...</button>
                    </div>
                </nav>
            </div>
            <main>
                { children }
            </main>
        </div>
    );
};