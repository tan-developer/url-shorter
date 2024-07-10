import React, { Suspense } from 'react'
import { BrowserRouter   , Route, Routes,} from 'react-router-dom'
import PrivateRoute, { ProtectedRouteProps } from './routes/PrivateRoute'
import AppPath from './constant/AppPath'
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import FooterRegister from './containers/footer/register-footer'
import{ Toaster } from 'react-hot-toast';

import Header from './containers/header/header'
import Home from './containers/Home/Home'
import Login from './containers/Login/Login'

const App : React.FC = () =>  {

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: true,
    authenticationPath: '/login',
  };
  return (
    <React.Fragment>
      <Toaster />
      <BrowserRouter>
        <>
          <Header />
          <Suspense fallback={'Loading...'}>
            <Routes>
              <Route path={AppPath.HOME} element={<Home/>}/>
              <Route path={AppPath.LOGIN} element={<Login/>}/>
              {/* <Route path={AppPath.LOGIN} element={<PrivateRoute  {...defaultProtectedRouteProps} outlet={<Login/>}/>}/> */}
            </Routes>
          </Suspense>
          <FooterRegister />
        </>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
