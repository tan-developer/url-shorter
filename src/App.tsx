import React, { Suspense } from 'react'
import { BrowserRouter   , Route, Routes,} from 'react-router-dom'
import PrivateRoute, { ProtectedRouteProps } from './routes/PrivateRoute'
import Home from './containers/Home/Home'
import AppPath from './constant/AppPath'
import Header from './containers/header/header'
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import FooterRegister from './containers/footer/register-footer'


const App : React.FC = () =>  {

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: true,
    authenticationPath: '/login',
  };
  return (
    <React.Fragment>
      <BrowserRouter>
        <>
          <Header />
          <Suspense fallback={'Loading...'}>
            <Routes>
              <Route path={AppPath.HOME} element={<Home/>}/>
              {/* <Route path={AppPath.HOME}element={<PrivateRoute  {...defaultProtectedRouteProps} outlet={<Home/>}/>}/> */}
            </Routes>
          </Suspense>
          <FooterRegister />
        </>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
