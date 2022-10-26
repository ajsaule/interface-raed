import Navbar from './components/Navbar'
import Cadrage from './components/Cadrage'
import Competances from './components/Competances'
import Action from './components/Action'
import Personalite from './components/Personalite'
import Motivation from './components/Motivation'
import { Route, Routes } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/cadrage" element={<Cadrage />} />
          <Route path="/personalite" element={<Personalite />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/competances" element={<Competances />} />
          <Route path="/action" element={<Action />} />
        </Routes>
      </div>
    </>
  )
}

export default App
