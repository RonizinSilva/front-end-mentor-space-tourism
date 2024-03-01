import { useContext } from "react"
import { Context } from "../Context"

const TitlePage = () => {
    const {navOption} = useContext(Context)
    return(
        <div className="flex items-center gap-7">
            <h2 className="heading-5 font-bold opacity-25">
                {navOption.option}
            </h2>
            <p className="heading-5">
                {navOption.subtitle}
            </p>
        </div>
    )
}

export default TitlePage