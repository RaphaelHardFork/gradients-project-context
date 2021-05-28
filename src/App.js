// Components
import GradientsHeader from './components/GradientsHeader'
import Footer from './components/Footer'
import GradientsApp from './components/GradientsApp'
import { GradientContextProvider } from './context/gradientContext'

import { Switch, Route } from 'react-router-dom'
import { FullScreen } from './pages/FullScreen'

const App = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <GradientContextProvider>
        <Switch>
          <Route exact path="/">
            <GradientsHeader />
            <GradientsApp />
          </Route>
          <Route exact path="/fullscreen/:id">
            <FullScreen />
          </Route>
        </Switch>
        <Footer />
      </GradientContextProvider>
    </div>
  )
}

export default App
