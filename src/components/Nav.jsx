import { navLinks } from "../data"


const Nav = () => {
    return (
        <nav className="bg-white bg-opacity-10 backdrop-blur-lg  px-[123px]">
            <ul className="flex gap-12 mr-[42px]">
                {navLinks.map((item) => (
                <li 
                key={item.name} 
                className="flex gap-[11px] items-start justify-center border-transparent border-b-[3px]
                hover:border-b-white active:border-b-white py-[39px] cursor-pointer"
                >
                    <a href={item.href} className="flex gap-[11px] decoration-transparent text-white  font-nav">
                        <p className="font-bold">{item.number}</p>
                        {item.name}
                    </a>
                </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav