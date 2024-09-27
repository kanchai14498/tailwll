import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Formcomponent from './formcom'
import Example from './Example'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    

    <Formcomponent/>
    <Example/>
  </StrictMode>,
)
