import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Main } from "src/components/index"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
