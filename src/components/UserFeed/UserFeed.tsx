"use client"

import { useAppSelector } from "@/redux/hooks/useAppSelector";

export function UserFeed() {
    const { tokenInfo } = useAppSelector(state => state.user);

    return (
        <div className="h-[99%] p-2 text-center bg-gray-100 border border-gray-300 rounded-xl shadow-md shadow-gray-300">
            <span className="text-lg">User News Feed</span>
            <br />
            <p>Token: {tokenInfo.access_token}</p>
            <br />
            <p>Expiração do Token: {tokenInfo.access_exp}</p>
        </div>
    );
}