// Components
import GradientsHeader from './components/GradientsHeader'
import Footer from './components/Footer'
import GradientsApp from './components/GradientsApp'
import { GradientContextProvider } from './context/gradientContext'

const App = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <GradientContextProvider>
        <GradientsHeader />
        <GradientsApp />
        <Footer />
      </GradientContextProvider>
    </div>
  )
}

export default App
