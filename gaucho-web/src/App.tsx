// import './App.css'
import { Navbar } from './Components/Navbar'
import { HomePage } from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import { Footer } from './Components/Footer'
// import { TermsAndConditions } from './Components/TermsAndConditions'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/Gaucho-Lab' element={<HomePage />}/>
    {/* <Route path="/terminosycondiciones" element={<TermsAndConditions />} /> */}
    </Routes>
    <Footer />
    </>
  )
}

export default App
