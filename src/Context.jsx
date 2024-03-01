//contexto pra tratar variaveis globais

import { createContext, useEffect, useState } from "react"
import { destinations } from "./data"
import {useNavigate} from "react-router-dom"

export const Context = createContext()

export const Storage = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [destination, setDestination] = useState(destinations[0])
    const [navOption, setNavOption] = useState({})
    //'obtion':'01', 'subtitle':'PICK YOUR DESTINATION'

    function verifyNavOption( option, subtitle){
        setLoading(true)
        if(option && subtitle){
            setNavOption({'option': option, 'subtitle':  subtitle})

        }
        return setLoading(false)
    }

    function verifyDestination(number){
        setLoading(true)
        if(number){
            const newDestination = destinations.filter(item => item.id === number)
            setDestination(newDestination[0])
        }
        return setLoading(false)
    }

   
    return (
        <Context.Provider 
        value={{
            destination, 
            setDestination, 
            verifyDestination, 
            loading, 
            setLoading,
            navOption,
            verifyNavOption
        }}
        >
            {children}
        </Context.Provider>
    )
    
}


