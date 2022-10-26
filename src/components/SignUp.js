import { useRef, useState, useEffect, useContext } from 'react'

import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'
import axios from '../api/axios'

import '../styles/SignIn.css'
import LoginContext from '../store/login'

const USER_REGEX = /.{5,23}$/
const PWD_REGEX = /.{6,23}$/
const REGISTER_URL = '/register'

const SignUp = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const { checkCredentials } = useContext(LoginContext)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(user))
  }, [user])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd))
    setValidMatch(pwd === matchPwd)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user)
    const v2 = PWD_REGEX.test(pwd)
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry')
      return
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      console.log(response?.data)
      console.log(response?.accessToken)
      console.log(JSON.stringify(response))
      setSuccess(true)
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser('')
      setPwd('')
      setMatchPwd('')
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken')
      } else {
        setErrMsg('Registration Failed')
      }
      errRef.current.focus()
    }
  }

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section className="App">
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Inscrivez-vous</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Nom et prénom:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !user ? 'hide' : 'invalid'}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? 'false' : 'true'}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? 'instructions' : 'offscreen'
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              5 à 24 caractères.
              <br />
            </p>

            <label htmlFor="password">
              Mot de passe:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? 'hide' : 'invalid'}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? 'false' : 'true'}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              6 à 24 caractères.
              <br />
            </p>

            <label htmlFor="confirm_pwd">
              Confirmez le mot de passe:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? 'hide' : 'invalid'}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? 'false' : 'true'}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? 'instructions' : 'offscreen'
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Doit correspondre au premier champ de saisie du mot de passe.
            </p>

            <Link to="/login/test">
              <button
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >
                Sign In
              </button>
            </Link>
          </form>
          <p>
            Already have an account?
            <br />
            <span className="line">
              <Link to="/sign-in">
                <a href="#">Sign In</a>
              </Link>
            </span>
          </p>
        </section>
      )}
    </>
  )
}

export default SignUp
