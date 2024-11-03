import { accio } from "@/api/api";
import { APP_ROUTES } from "@/constants/app-routers";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { setTokenInfo, setUserInfo } from "@/redux/reducers/userReducer";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { persistor } from "@/redux/store";
import { getCookie } from "cookies-next";

export function PrivateRoute({ children }: {children: ReactNode}) {
    const dispatch = useDispatch();
    const { push } = useRouter();
    const { tokenInfo } = useAppSelector(state => state.user);

    const access_token = tokenInfo.access_token;
    const refresh_token = getCookie('refresh_token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!access_token) {
                    push(APP_ROUTES.public.login);
                    return;
                }

                const response = await accio.get("/user", {
                    headers: {
                        Authorization: access_token
                    }
                });

                if (response.status === 200) {
                    dispatch(setUserInfo(response.data.attributes));
                }
            } catch (error: any) {
                if (error.response && error.response.status === 401 && (refresh_token !== undefined && refresh_token !== '')) {
                    try {
                        const response = await accio.get("/refresh-token", {
                            headers: {
                                Authorization: refresh_token
                            }
                        });

                        if (response.status === 200) {
                            const { refresh_token, refresh_exp, access_token, access_exp } = response.data
                            const refreshExpInSeconds = Math.floor((refresh_exp * 1000 - Date.now()) / 1000);
                
                            document.cookie = `refresh_token=${refresh_token}; Max-Age=${refreshExpInSeconds}; path=/;`;
                            dispatch(setTokenInfo({ access_token, access_exp }));
                        }
                    } catch (refreshError) {
                        console.error('Erro ao tentar atualizar o token:', refreshError);
                    }
                }

                persistor.purge();
                document.cookie = 'refresh_token=; Max-Age=0; path=/;';
                localStorage.removeItem('user');
                push(APP_ROUTES.public.login);
            }
        };

        fetchData();
        
    }, [access_token, push, tokenInfo, dispatch])

    return (
        <>
            {!access_token && null}
            {access_token && children}
        </>
    );
};