import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {Signup} from 'Components/App.jsx'
import {Signup_fetch} from './Componentes/Form_fetch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signup_fetch />
  </StrictMode>,
)


