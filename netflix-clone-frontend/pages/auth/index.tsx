import { SessionProvider } from "next-auth/react";
import AuthPage from "./AuthPage";

const Auth = () => {
    return ( 
        <SessionProvider>
            <AuthPage />
        </SessionProvider>
     );
}
 
export default Auth;