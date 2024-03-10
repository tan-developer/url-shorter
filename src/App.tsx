import React, { Suspense } from 'react'
import { BrowserRouter   , Routes,} from 'react-router-dom'
import LinearGardientLogo from './components/LinearGardientLogo'
import LeftHeader from './components/LeftHeader'

const App : React.FC = () =>  {

  return (
    <React.Fragment>
      <BrowserRouter>
        <>
          <LinearGardientLogo />
          <LeftHeader />
          <Suspense fallback={'Loading...'}>
            <Routes>

            </Routes>
          </Suspense>
        </>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
