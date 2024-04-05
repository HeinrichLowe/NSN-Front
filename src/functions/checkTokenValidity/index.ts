import { accio } from "@/api/api";
import { UserState, setUserInfo } from "@/redux/reducers/userReducer";
import { persistor } from "@/redux/store";

export async function checkTokenValidity(tokenInfo: UserState['tokenInfo']) {
    const { token, exp } = tokenInfo;
    const expiresAt = new Date(exp).getTime();
    const currentTimestamp = Date.now();
  
    if (token && expiresAt && currentTimestamp < expiresAt) {
        // Token válido
        return;
    }
  
    if (token && currentTimestamp >= expiresAt) {
        try {
            const response = await accio.post('/refresh-token', { token });
            const { newToken, newExpiresAt } = response.data;

            setUserInfo({ token: newToken, exp: newExpiresAt });
        } catch (error) {
            console.log(error);
            persistor.purge();
            localStorage.removeItem('user');
            location.reload();
        }
    }
};