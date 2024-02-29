import DestinantionDetails from "./DestinationDeails"

const Destination = () => {
    return(
        <div className="py-[76px] px-[111.5px]">
           <div className="flex items-center gap-7">
                <h2 className="heading-5 font-bold opacity-25">
                    01
                </h2>
                <p className="heading-5">
                    PICK YOUR DESTINATION
                </p>
           </div>
           <DestinantionDetails/>
        </div>
    )
}

export default Destination