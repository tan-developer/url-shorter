import React, { Suspense } from 'react'
import { BrowserRouter   , Routes,} from 'react-router-dom'
import LinearGardientLogo from './components/LinearGardientLogo'

const App : React.FC = () =>  {

  return (
    <React.Fragment>
      <BrowserRouter>
        <>
          <LinearGardientLogo />
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
