import { useContext } from "react"
import { navLinksDestination } from "../../data"
import { Context } from "../../Context"

//Esse componente precisa passar os dados do onCLick, pra que possam ser usados no componente pai

const NavDestinations = () => {
    const {verifyDestination} = useContext(Context);
    return (
        <nav className="">
            <ul className="flex gap-12">
                {navLinksDestination.map((item) => (
                <li 
                key={item.name} 
                className="flex gap-[11px] items-start justify-center border-transparent border-b-[3px]
                hover:border-b-white active:border-b-white pb-[12px] cursor-pointer"
                onClick={() => verifyDestination(item.number)}
                >
                    <p className="flex gap-[11px] decoration-transparent text-white  font-nav">
                        {/* <strong className="font-bold">{item.number}</strong> */}
                        {item.name}
                    </p>
                </li>
                ))}
                
            </ul>
        </nav>
    )
}

export default NavDestinations