import { BrowserRouter } from "react-router-dom"
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Copyright,
} from "./components"
// Functional component representing the main App
const App = () => {
  return (
    // Set up the BrowserRouter for handling client-side navigation
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
          <Copyright />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
