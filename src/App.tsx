import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer'
import { FirstContent } from './Components/Body/FirstContent'
import { SecondContainer } from './Components/Body/SecondContainer'
import { ThirdContainer } from './Components/Body/ThirdContainer'
import { FourthContainer } from './Components/Body/FourthContainer'
function App() {
  return <div id="app-container">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
    <div id="scrollable"><main id="main-content" tabIndex={-1}>
      <FirstContent /><SecondContainer /><ThirdContainer /><FourthContainer />
    </main></div>
    <Footer />
  </div>
}
export default App
