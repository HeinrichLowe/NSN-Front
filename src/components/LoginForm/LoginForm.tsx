"use client"

import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { accio } from "@/api/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setTokenInfo } from "@/redux/reducers/userReducer";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import SignUpForm from "../SignUpForm";

export function LoginForm() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] =  useState<string>('');
    const [modal, setModal] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const { tokenInfo } = useAppSelector(state => state.user)

    function toggleShowModal() {
      if (!modal) {
        setModal(true);
      } else {
        setModal(false);
      };
    };

    async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
        try {
          const params = {username, password};
          const jsonParams = JSON.stringify(params);
          const response = await accio.post('/signin', jsonParams);

          if (response.status === 200) {
            const { refresh_token, refresh_exp, access_token, access_exp } = response.data
            const refreshExpInSeconds = Math.floor((refresh_exp * 1000 - Date.now()) / 1000);

            document.cookie = `refresh_token=${refresh_token}; Max-Age=${refreshExpInSeconds}; path=/;`;
            dispatch(setTokenInfo({ access_token, access_exp }));

            router.push('/home')
          }
        } catch (error: any) {}
      };

    function handleSignUpButton(e: MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      toggleShowModal();
    }

    useEffect(() => {
      if(tokenInfo.access_token && tokenInfo.access_token !== '') {
        router.push('/home');
      }
    }, [tokenInfo, router]);

    return (
        <div className="w-full max-w-[600px] p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-lg shadow-gray-300 lg:max-w-[425px]">
          <form onSubmit={handleFormSubmit} method="POST" className="w-full h-full flex flex-col gap-3">
            <h1 className="text-xl text-center font-medium">Entrar no NSN</h1>

            <input 
              type="text" 
              name="emailUsernameInput"
              placeholder="Email or Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="px-2 py-3 bg-transparent border-2 border-gray-300 rounded-lg outline-none focus:border-2 focus:border-blue-600" 
            />
            <input 
              type="password" 
              name="passwordInput"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="px-2 py-3 bg-transparent border-2 border-gray-300 rounded-lg outline-none focus:border-2 focus:border-blue-600"
            />

            <button className="py-3 text-lg font-bold text-white bg-blue-600 rounded-full">
              Sign In
            </button>

            <Link href={'/'} className="text-center text-sm text-blue-600">
              Forgot Password?
            </Link>
            
            <div className="w-full flex gap-5 justify-between items-center">
              <hr className="flex-grow border-b border-gray-200" />
              <span className="text-sm text-gray-400">or</span>
              <hr className="flex-grow border-b border-gray-200" />
            </div>

            <button onClick={handleSignUpButton} className="w-fit self-center px-5 py-3 text-lg text-white font-bold bg-green-500 rounded-full">
              Create New Account
            </button>
          </form>

          {modal &&
            <SignUpForm modal={modal} toggleModal={toggleShowModal} />
          }
        </div>
    );
}