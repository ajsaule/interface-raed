import { useContext } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import LoginContext from '../store/login'

export default function Navbar() {
  const { isAuthenticated } = useContext(LoginContext)

  return (
    <nav className="nav">
      <ul>
        {isAuthenticated && (
          <>
            <CustomLink to="/cadrage">Cadrage</CustomLink>
            <CustomLink to="/personalite">Personalite</CustomLink>
            <CustomLink to="/motivation">Motivation</CustomLink>
            <CustomLink to="/competances">Competances</CustomLink>
            <CustomLink to="/action">About</CustomLink>
          </>
        )}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
