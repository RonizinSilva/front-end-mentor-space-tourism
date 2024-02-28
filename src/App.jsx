import Content from "./components/Content"
import Header from "./components/Header"



function App() {
  return (
    //fundo com imagem
    <div className="md:bg-home-destop  sm:bg-home-tablet bg-home-mobile bg-cover h-full w-screen text-white body pb-11">
      <Header/>
      <div className="w-full h-full mt-[250px]">
        <Content content={"home"}/>
      </div>
    </div>
  )
}

export default App
