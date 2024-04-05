"use client"

import { usePathname } from "next/navigation";
import { checkIsPublickRoute } from "@/functions/checkIsPublickRoute";
import { PrivateRoute } from "@/components/PrivateRoute";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export function MiddleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isPublicPage = checkIsPublickRoute(pathname);

  return (
    <Provider store={store}>
      {isPublicPage && children}
      
      {!isPublicPage && (
        <PrivateRoute>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </PrivateRoute>
      )}
    </Provider>
  );
}