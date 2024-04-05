import { APP_ROUTES } from "@/constants/app-routers";

/*
* @params asPath //string
* @returns //boolean
*/

export function checkIsPublickRoute(asPath: string) {
    const appPublicRoutes = Object.values(APP_ROUTES.public);

    return appPublicRoutes.includes(asPath);
}