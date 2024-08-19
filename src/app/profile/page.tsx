"use client"

import { useAppSelector } from "@/redux/hooks/useAppSelector";
import Link from "next/link";

export default function Page() {
    const { userInfo } = useAppSelector(state => state.user);

    return (
        <div className="flex gap-3">
            <div className="flex-[4]">
                <div className="my-3 py-2 px-3 flex flex-col bg-gray-100 border border-gray-300 rounded-xl shadow-md shadow-gray-400">
                    <Link href={'/profile'} className="text-center pb-2 text-2xl font-bold hover:underline">About Summary</Link>
                    
                    <div className="font-semibold">
                        Live in <span className="font-extrabold">N/A</span>
                    </div>
                    <div className="font-semibold">
                        From <span className="font-extrabold">N/A</span>
                    </div>
                    <div className="font-semibold">
                        Joined <span className="font-extrabold">N/A</span>
                    </div>
                </div>
            </div>

            <div className="flex-[5]">
                <div className="mt-3 py-2 px-3 flex flex-col bg-gray-100 border border-gray-300 rounded-xl shadow-md shadow-gray-400">
                    <h6 className="w-full text-center text-xl font-semibold">New Post</h6>

                    <div className="my-2 flex gap-2 items-center">
                        <Link href={'/profile'} className="w-10 h-10">
                            <img 
                                src={userInfo.avatar} 
                                alt="" 
                                className="object-cover rounded-full hover:brightness-110 transition duration-300"
                            />
                        </Link>
                        <div
                            onClick={()=>{}} // Abrir um modal para criar um novo post.
                            className="w-full py-2 px-3 text-black/50 font-semibold bg-gray-300/75 border border-gray-300 rounded-full hover:bg-gray-300/50 hover:cursor-pointer"
                        >
                            What are you thinking?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}