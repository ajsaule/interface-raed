import { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Cadrage from './components/Cadrage'
import Competances from './components/Competances'
import Action from './components/Action'
import Personalite from './components/Personalite'
import Motivation from './components/Motivation'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import LoginContext from './store/login'

import './index.css'

function App() {
  const { isAuthenticated } = useContext(LoginContext)
  var navigate = useNavigate()

  useEffect(() => {
    navigate('/sign-in')  
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </>
          ) : (
            <>
              <Route path="/cadrage" element={<Cadrage />} />
              <Route path="/personalite" element={<Personalite />} />
              <Route path="/motivation" element={<Motivation />} />
              <Route path="/competances" element={<Competances />} />
              <Route path="/action" element={<Action />} />
            </>
          )}
        </Routes>
      </div>
    </>
  )
}

export default App
