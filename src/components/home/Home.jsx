import ButtonMain from "./ButtonMain"

const Home = () => {
    
    return (
        <div className="flex items-center justify-between w-full h-full mt-[250px] pl-[165px] pr-[77px] ">
            <div className="flex flex-col md:w-[450px] max-[450px] gap-6">
                <h2 className="heading-5">SO, YOU WANT TO TRAVEL TO</h2>
                <h1 className="heading-1">SPACE</h1>
                <p className="w-full body leading-8">Let’s face it; if you want to go to space, you might as well genuinely
                    go to outer space and not hover kind of on the edge of it. Well sit back, 
                    and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <ButtonMain/>
        </div>
    )
}

export default Home