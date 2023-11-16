import React from 'react'
import {Routes,Route,Outlet} from "react-router-dom"
import {Navigate} from "react-router-dom"
import { authLayoutRoutes, headerFooterRoutes } from './core/routes'
import NotFoundScreen from './container/screens/not-foundScreen/NotFoundScreen'
const InnerApp = () => {
    const userInfo = ''
  return (
<>
<Routes>
    {!userInfo?(
        <>
          {authLayoutRoutes?.map((route:any)=>(
              <Route path={route.path} element={route?.navigatePath?(<Navigate to={route.navigatePath}/>):(<route.component/>)}/>
    
))}
 <Route path='/*' element={<NotFoundScreen/>}/>
        </>

    ):(
        <>
        {headerFooterRoutes.map((route:any)=>(
            <Route path={route.path} element={route?.navigatePath?(<Navigate to={route.navigatePath}/>):(<route.component/>)}/>
        ))}
        </>
    )}
  

</Routes>
</>
  )
}

export default InnerApp