'use client'

import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { persistor } from "@/redux/store";
import Link from "next/link";

export function UserPainel() {
    const { userInfo } = useAppSelector(state => state.user);

    function handleLogout()  {
        persistor.purge();
        document.cookie = 'refresh_token=; Max-Age=0; path=/;';
        localStorage.removeItem('user');
        location.reload();
    }

    return (
        <div className="max-h-[99%] p-2 bg-gray-100 border border-gray-300 rounded-xl shadow-md shadow-gray-300">
            <Link href={'/profile'} className="flex items-center gap-2">
                <div className="w-20 h-20 p-1 border-2 border-blue-500/75 rounded-lg">
                    <img 
                        src={userInfo.avatar ? userInfo.avatar : 'images/avatar.png'} 
                        alt="avatar" 
                        className="object-cover object-top w-full h-full rounded-full" 
                    />
                </div>
                <span className="text-xl font-medium">
                    {userInfo.name}
                </span>
            </Link>

            <div className="mt-5">
                <span className="text-lg text-center font-medium">Tools & Others</span>
                <hr className="my-2" />
                <ul>
                    <li>
                        <Link href={'/next-home'}>Home Next</Link>
                    </li>
                    <li>
                        <Link href={'/profile/friends'}>Amigos</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Sair</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}