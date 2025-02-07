// import './App.css'
import { Navbar } from './Components/Navbar'
import { HomePage } from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import { Footer } from './Components/Footer'
// import { TermsAndConditions } from './Components/TermsAndConditions'

const App = () => {

  return (
    <div className='flex-grow'>
    <Navbar />
    <Routes>
    <Route path='/Gaucho-Lab' element={<HomePage />}/>
    {/* <Route path="/Gaucho-Lab/terminosycondiciones" element={<TermsAndConditions />} /> */}
    </Routes>
    <Footer />
    </div>
  )
}

export default App
