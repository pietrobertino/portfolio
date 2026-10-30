import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as bootstrap from 'bootstrap'
import '@fontsource/space-grotesk'
import '@fontsource/inter'
import { MotionConfig } from 'framer-motion';

createRoot(document.getElementById('root')).render(

  <MotionConfig reducedMotion="user">
    <App />
  </MotionConfig>,
)
