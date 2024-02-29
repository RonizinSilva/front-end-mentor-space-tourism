//contexto pra tratar variaveis globais

import { createContext, useState } from "react"
import { destinations } from "./data"

export const Context = createContext()

export const Storage = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [destination, setDestination] = useState(destinations[0])
    function verifyDestination(number){
        setLoading(true)
        if(number){
            const newDestination = destinations.filter(item => item.id === number)
            setDestination(newDestination[0])
        }
        return setLoading(false)
    }
    return (
        <Context.Provider value={{destination, setDestination, verifyDestination, loading, setLoading}}>
            {children}
        </Context.Provider>
    )
    
}


