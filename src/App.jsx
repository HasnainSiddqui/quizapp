import { useState } from 'react'
import { QuizCards } from './component/quizCards'
import ResultContext from './context/result.jsx'
import { ResultPage } from './page/showResult.jsx'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'

import './App.css'


function App() {
  

  return (
    <BrowserRouter>
   
  <Routes>
   
<Route path='/' element={ <QuizCards />} />
<Route path='/resultpage' element={< ResultPage />} />

    </Routes>
    
</BrowserRouter>
    
  )
}

export default App
