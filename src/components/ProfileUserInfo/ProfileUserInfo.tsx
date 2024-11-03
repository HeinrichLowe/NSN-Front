"use client"

import { useState } from "react";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import Link from "next/link";
import EditPerfilModal from "../EditPerfilModal";

export default function ProfileUserInfo() {
    const { userInfo } = useAppSelector(state => state.user);
    const [modal, setModal] = useState(false);

    function toggleModal() {
        if(!modal) {
            setModal(true);
        } else {
            setModal(false);
        }
    };

    return (
        <div className="flex gap-3 px-10 items-center">
            <div className="w-40 h-40 p-1 border-4 border-blue-500/75 rounded-full hover:cursor-pointer hover:brightness-110 transition duration-300">
                <img 
                    src={userInfo.avatar ? userInfo.avatar : 'images/avatar.png'} 
                    alt="avatar" 
                    className="object-cover object-top w-full h-full rounded-full" 
                />
            </div>

            <div className="flex-1">
                <h3 className="text-3xl font-bold">{userInfo.full_name}</h3>
                <Link 
                    href={'/profile/friends'} 
                    className="ml-1 text-gray-950/85 font-semibold hover:underline"
                >
                    {'N/A'} amigos
                </Link>
            </div>

            <div className="self-end mb-3">
                <button 
                    onClick={toggleModal} // Abrir modal ou ir para uma página para editar o perfil.
                    className="px-4 py-2 text-gray-100 font-semibold bg-blue-500 rounded-md"
                >
                    Editar Perfil
                </button>
                {modal && 
                    <EditPerfilModal modal={modal} toggleModal={toggleModal} />
                }
            </div>
        </div>
    );
};