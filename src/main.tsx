import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.tsx'
import { loadCarlaSans } from './carla-font.ts'

AOS.init({
  duration: 700,
  easing: 'ease-out-quad',
  once: true,
  offset: 60,
})

// Load Carla Sans via FontFace API — bypasses Tailwind CSS linter normalization
loadCarlaSans()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
