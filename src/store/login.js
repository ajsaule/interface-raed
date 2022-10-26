import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginContext = createContext({
  isAuthenticated: false,
  checkCredentials: () => {},
})

export const LoginProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [demo] = useState({ user: 'demo1', pass: 'demo123' })

  var navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/cadrage')
  }, [isAuthenticated])

  function checkCredentials(creds) {
    if (creds.user === demo.user && creds.pass === demo.pass) {
      setIsAuthenticated(true)
    }
  }

  return (
    <LoginContext.Provider
      value={{
        isAuthenticated,
        checkCredentials,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContext
