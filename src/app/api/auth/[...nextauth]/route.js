import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const authOption = {
    providers: [
        CredentialProvider({
            async authorize(userInfo){
                const newUserInfo = {
                    email: userInfo.email,
                    password: userInfo.password,
                }
                const login = await loginService(newUserInfo);
                console.log("loginCre",login)   
                return login;
            }
        })
    ],
    callbacks: {
        async jwt ({token,user}) {
            return{...token, ...user};
        },
        async session({session, token}) {
            session.user = token;
            return session;
        },
    }
}
const handler = nextAuth(authOption);
export { handler as GET, handler as POST};