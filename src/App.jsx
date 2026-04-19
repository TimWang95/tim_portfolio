import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Main, Footer } from "src/components/index";
import Works from 'src/components/main/works/works';

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/works" element={<Works/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </>
  )
}

export default App
