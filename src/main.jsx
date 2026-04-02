import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './index.css'
import App from './App.jsx'

// register the scroll trigger plugin
gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
