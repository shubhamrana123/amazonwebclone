import {FC} from "react"
import LoginScreen from "../../container/screens/auth/LoginScreen";
import Dashboard from "../../container/screens/dashboard/Dashboard";
import SignupScreen from "../../container/screens/auth/SignupScreen";

interface Routes {
    path:string,
    key:string,
    component:FC;
    navigtionPath?:string
}
export const authLayoutRoutes :Array<Routes> = [
    {
        path:'/',
        key:'login-Routes',
        component:LoginScreen
        
    },
    {
        path:'/signup',
        key:'signup-Routes',
        component:SignupScreen
    }
]
export const headerFooterRoutes :Array<Routes> =[
    {
        path:'/',
        key:'dashboard',
        component:Dashboard
    }
]
