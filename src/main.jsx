import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ResultContext from './context/result.jsx'

createRoot(document.getElementById('root')).render(

    <ResultContext>
    <App />
    </ResultContext>

)
