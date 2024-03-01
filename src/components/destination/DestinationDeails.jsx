import NavDestinations from "./NavDestinations"
import { useContext } from "react"
import { Context } from "../../Context"

const DestinantionDetails = () => {
    const {destination} = useContext(Context)
   
    
    return(
        <div className="flex items-start justify-between gap-[157px] w-full h-full p-16"> 
            <img src={destination.images.png} alt={destination.name} className="mt-8 ml-16" />
            <div className="flex flex-col itens-start max-w-[445px]">
                <NavDestinations  />
                <h1 className="mt-[37px] heading-2">{destination.name}</h1>
                <p className="body leading-8 w-full mt-[14px]">{destination.description}</p>
                <div className="h-[1px] w-full bg-[#383B4B] mt-[54px]"/>
               <div className="flex items-center justify-start gap-[79px] mt-7">
                    <div>
                        <p className="subheading-2">AVG. DISTANCE</p>
                        <h2 className="subheading-1 mt-3">{destination.distance}</h2>
                    </div>
                    <div>
                        <p className="subheading-2">EST. TRAVEL TIME</p>
                        <h2 className="subheading-1 mt-3">{destination.travel}</h2>
                    </div>  
               </div>
            </div>
        </div>
    )
}

export default DestinantionDetails
        