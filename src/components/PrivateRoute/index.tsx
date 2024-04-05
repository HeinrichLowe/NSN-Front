import { accio } from "@/api/api";
import { APP_ROUTES } from "@/constants/app-routers";
import { checkTokenValidity } from "@/functions/checkTokenValidity";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { setUserInfo } from "@/redux/reducers/userReducer";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

export function PrivateRoute({ children }: {children: ReactNode}) {
    const dispatch = useDispatch();
    const { push } = useRouter();

    const { tokenInfo } = useAppSelector(state => state.user);
    const token = tokenInfo.token

    useEffect(() => {
        if (!token) {
            push(APP_ROUTES.public.login);
        }

        if (token) {
            const checkAndFetchUser = async () => {
                await checkTokenValidity(tokenInfo);

                const response = await accio.get("/user", {
                    headers: {
                        Authorization: token
                    }
                });

                if(response) {
                    dispatch(
                        setUserInfo(response.data)
                    );
                }
            }

            checkAndFetchUser();
        }
        
    }, [token, push, tokenInfo, dispatch])

    return (
        <>
            {!token && null}
            {token && children}
        </>
    );
};