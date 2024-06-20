import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Main, Footer } from "src/components/index"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </>
  )
}

export default App
