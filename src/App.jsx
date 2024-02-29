import Header from "./components/Header"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/home/Home"
import Destination from "./components/destination/Destination"



function App() {
  return (
    //fundo com imagem
    <div className="md:bg-home-destop  sm:bg-home-tablet bg-home-mobile bg-cover h-full w-screen text-white body pb-11">
      <Header/>
       <BrowserRouter>
       <main className="w-full h-full">
        <Routes>  
          <Route path="/" element={<Home/>}/> 
          <Route path="/destination" element={<Destination/>}/>   
        </Routes>
        </main>
       </BrowserRouter>
       </div>
  )
}

export default App
