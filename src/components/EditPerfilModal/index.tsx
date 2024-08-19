import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/redux/hooks/useAppSelector";

type Props = {
    modal: boolean,
    toggleModal: VoidFunction
}

export default function EditPerfilModal({modal, toggleModal}: Props) {
    const { userInfo } = useAppSelector(state => state.user);
    const modalRef = useRef<HTMLDivElement>(null);
    const [bioText, setBioText] = useState('');
    const [bioReadOnly, setBioReadOnly] = useState(true);

    useEffect(() => {
        if (modal && modalRef.current) {
            modalRef.current.focus();
        };
    }, [modal]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === modalRef.current) {
            toggleModal();
        }
    };

    function toggleBioReadOnly() {
        if(bioReadOnly) {
            setBioReadOnly(false);
        } else {
            setBioText('');
            setBioReadOnly(true);
        }
    };
    
    return (
        <div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            className="fixed w-full h-full left-0 top-0 bg-black/75 flex items-center justify-center"
            onClick={handleBackdropClick}
        >
            <div
                className="min-w-96 max-h-[95vh] relative bg-gray-100 rounded-md shadow-lg overflow-y-auto"
            >
                <div className="flex p-2">
                    <h3 className="flex-1 text-center text-lg font-semibold">Edit Profile</h3>
                    <button onClick={toggleModal} className="w-8 h-8 border border-gray-400 rounded-full">X</button>
                </div>

                <div className="border-b-[1px] border-gray-300/80"></div>

                <div className="flex flex-col px-2">
                    <div className="flex p-1 items-center">
                        <h3 className="flex-1 text-lg font-semibold">Profile picture</h3>
                        <button onClick={()=>{}} className="px-3 py-2 rounded-md hover:bg-gray-200/50">Edit</button>
                    </div>
                    <div className="w-full h-full max-w-40 max-h-40 self-center">
                        <img src={userInfo.avatar || '/images/avatar.png'} alt="" className="rounded-full" />
                    </div>
                </div>

                <div className="flex flex-col p-2">
                    <div className="flex p-1 items-center">
                        <h3 className="flex-1 text-lg font-semibold">Profile Cover</h3>
                        <button onClick={()=>{}} className="px-3 py-2 rounded-md hover:bg-gray-200/50">Edit</button>
                    </div>
                    <div className="w-full h-auto max-w-80 max-h-auto self-center">
                        <img src={userInfo.cover || '/images/capa.webp'} alt="" className="max-h-full rounded-xl" />
                    </div>
                </div>

                <div className="h-full px-2">
                    <div className="flex p-1 items-center">
                        <h3 className="flex-1 text-lg font-semibold">Bio</h3>
                        <button onClick={toggleBioReadOnly} className="px-3 py-2 rounded-md hover:bg-gray-200/50">Edit</button>
                    </div>
                    <div className="w-full mx-auto flex flex-col gap-3 max-w-80 max-h-40">
                        <textarea
                            name="bioText"
                            readOnly={bioReadOnly}
                            rows={5}
                            placeholder="Describe yourself..."
                            value={bioText}
                            onChange={e => setBioText(e.target.value)}
                            className="w-full p-2 bg-gray-300/50 rounded-md outline-none resize-none" 
                        />

                        {!bioReadOnly &&
                            <div className="flex gap-3 justify-end">
                                <button onClick={toggleBioReadOnly} className="px-3 py-2 bg-gray-300 rounded-md">Cancel</button>
                                <button onClick={()=>{}} className="px-3 py-2 text-white bg-blue-500 rounded-md">Save</button>
                            </div>
                        }
                    </div>
                </div>

                <div className="flex flex-col p-2">
                    <div className="flex p-1 items-center">
                        <h3 className="flex-1 text-lg font-semibold">Summary</h3>
                        <button onClick={()=>{}} className="px-3 py-2 rounded-md hover:bg-gray-200/50">Edit</button>
                    </div>
                    <div className="w-full h-full max-w-64 max-h-40 self-center">
                        Sumary (to do).
                    </div>
                </div>
            </div>
        </div>
    );
};