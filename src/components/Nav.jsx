import { useContext } from "react"
import { navLinks } from "../data"
import { Context } from "../Context"
import { Link } from "react-router-dom"


const Nav = () => {
    const {verifyNavOption} = useContext(Context)

    return (
        <nav className="bg-white bg-opacity-10 backdrop-blur-lg  px-[123px]">
            <ul className="flex gap-12 mr-[42px]">
                {navLinks.map((item) => (
                <li 
                key={item.name} 
                className="flex gap-[11px] items-start justify-center "
                >
                    <Link 
                        to={item.href} 
                        onClick={()=>verifyNavOption(item.number, item.subtitle)}  
                        className="flex gap-[11px] decoration-transparent text-white  font-nav border-transparent border-b-[3px]
                                hover:border-b-white  py-[39px] cursor-pointer"
                    >
                        <p className="font-bold">
                            {item.number}
                        </p>
                        {item.name}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav