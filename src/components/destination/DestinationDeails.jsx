import NavDestinations from "./NavDestinations"
import { useContext } from "react"
import { Context } from "../../Context"

const DestinantionDetails = () => {
    const {destination} = useContext(Context)
   
    
    return(
        <div className="flex items-center justify-between gap-[157px] w-full h-full p-16"> 
            <img src={destination.images.png} alt={destination.name} className="mt-8 ml-16" />
            <div className="flex flex-col itens-start max-w-[445px]">
                <NavDestinations  />
                <h1 className="mt-[37px] heading-2">{destination.name}</h1>
                <p>{destination.description}</p>
                <div className="h-[1px] w-full bg-gray-400"/>
               <div className="flex items-center justify-start gap-[79px]">
                    <div>
                        <p>AVG. DISTANCE</p>
                        <h2>{destination.distance}</h2>
                    </div>
                    <div>
                        <p>EST. TRAVEL TIME</p>
                        <h2>{destination.travel}</h2>
                    </div>  
               </div>
            </div>
        </div>
    )
}

export default DestinantionDetails
        