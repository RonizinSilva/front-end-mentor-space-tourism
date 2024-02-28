const ButtonMain = () => {
    return (
        // botao em circulo perfeito
       <div
        className="flex items-center justify-center bg-transparent
         hover:bg-white hover:bg-opacity-10 
         md:w-[450px] md:h-[450px] max-[450px] rounded-full">
         <button
         className="bg-white rounded-full h-[274px] w-[274px] flex items-center justify-center
           text-black heading-4"
        >
            EXPLORE
        </button>
       </div>
    )
}

export default ButtonMain