"use client"

import { accio } from "@/api/api";
import { setTokenInfo } from "@/redux/reducers/userReducer";
import { formToJSON } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
    modal: boolean;
    toggleModal: VoidFunction;
}

export default function SignUpForm({modal, toggleModal}: Props) {
    const modalRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const dispatch = useDispatch();
    const [usernameEmail, setUsernameEmail] = useState('text');
    const [form, setForm] = useState({
        full_name: '',
        username: '' as string | undefined,
        email: '' as string | undefined,
        password: '',
        birth_date: ''
    });

    useEffect(() => {
        if(modal && modalRef.current) {
            modalRef.current.focus();
        }
    }, [modal]);

    function closeModal(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target === modalRef.current) {
            toggleModal();
        }
    };

    function toggleUsernameEmail() {
        if (usernameEmail === 'text') {
            setUsernameEmail('email');
            setForm(prevForm => ({ ...prevForm, username: '' }));
        } else {
            setUsernameEmail('text');
            setForm(prevForm => ({ ...prevForm, email: '' }));
        };
    };

    async function handleSignUpForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const formData = { ...form };
            if (usernameEmail === 'text') {
                delete formData.email;
            } else {
                delete formData.username;
            }

            const jsonForm = JSON.stringify(formData);
            const response = await accio.post('/signup', jsonForm);

            if (response.status === 201) {
                const { refresh_token, refresh_exp, access_token, access_exp } = response.data
                const refreshExpInSeconds = Math.floor((refresh_exp * 1000 - Date.now()) / 1000);

                document.cookie = `refresh_token=${refresh_token}; Max-Age=${refreshExpInSeconds}; path=/;`;
                dispatch(setTokenInfo({ access_token, access_exp }));

                router.push('/home')
            }
        } catch (err) {};
    };

    return (
        <div 
            tabIndex={-1}
            role="dialog"
            aria-modal={true}
            ref={modalRef}
            onClick={closeModal}
            className="fixed inset-0 flex justify-center items-center bg-black/50"
        >
            <div className="min-w-96 max-h-[95vh] bg-gray-100 rounded-md overflow-y-auto">
                <h2 className="my-2 text-2xl text-center font-bold">Sign Up</h2>

                <div className="my-2 border-b-[1px] border-gray-300"></div>

                <form onSubmit={handleSignUpForm} method="POST" className="p-4">
                    <input 
                        type="text" 
                        name="userName"
                        placeholder="Enter your name."
                        value={form.full_name}
                        onChange={e => setForm(prevForm => ({ ...prevForm, full_name: e.target.value }))}
                        className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500" 
                    />

                    <div className="my-3 flex flex-col">
                        <input 
                            type={usernameEmail}
                            name="usernameOrEmail"
                            placeholder={usernameEmail === 'text' ? 'Enter a username.' : 'Enter a email.'}
                            value={usernameEmail === 'text' ? form.username : form.email}
                            onChange={e => setForm(prevForm =>(usernameEmail === 'text' ? { ...prevForm, username: e.target.value } : { ...prevForm, email: e.target.value }))}
                            className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500"
                        />
                        <button 
                            onClick={e => { e.preventDefault(), toggleUsernameEmail() }}
                            className="self-end px-3 py-2 text-blue-500 hover:underline"
                        >
                            {usernameEmail === 'text' ? 'Use email instead' : 'Use username instead'}
                        </button>
                    </div>

                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter a password."
                        value={form.password}
                        onChange={e => setForm(prevForm => ({ ...prevForm, password: e.target.value }))}
                        className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500"
                    />

                    <div className="mt-3 flex flex-col items-center">
                        <h6 className="text-gray-500">Date of birth</h6>
                        <input 
                            type="date"
                            name="birthday"
                            value={form.birth_date}
                            onChange={e => setForm(prevForm => ({ ...prevForm, birth_date: e.target.value }))}
                            className="p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mt-5 flex justify-center">
                        <button className="px-16 py-2 text-white bg-blue-500 rounded-md">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};