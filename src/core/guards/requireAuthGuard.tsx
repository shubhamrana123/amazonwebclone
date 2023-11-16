import { Navigate } from "react-router-dom";

export const RequireAuthGuard = ({children}:any)=>{
    const userInfo = ''
    if(!userInfo){
        return <Navigate to="/login"/>
    }
    return children
}