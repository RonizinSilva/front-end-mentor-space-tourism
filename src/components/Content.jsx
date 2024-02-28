//vai verificar qual href do menu foi clicado e passar o valor pra carregar seu respectivo componente

import { useState } from "react"
import Home from "./home/Home"

const Content = ({content}) => {
    return (
        <div className="w-full h-full px-[165px]">
            {content === "home" && <Home/>}
        </div>
        
        
    )
}

export default Content