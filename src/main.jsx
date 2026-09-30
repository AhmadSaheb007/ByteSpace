import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignupPage from './SignupPage.jsx'
import SignInPage from './SignInPage.jsx'

const currentPath = window.location.pathname.replace(/\/+$/, '')
const CurrentPage = currentPath === '/signup'
  ? SignupPage
  : currentPath === '/signin'
    ? SignInPage
    : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrentPage />
  </StrictMode>,
)
