import { AiOutlineBank } from "react-icons/ai"

export function CardLoadInfo(props){

    const bgColor = props.className
    const iconSelected = props.iconSelected
    return(
        <div className={`${bgColor} flex w-full p-4 rounded-lg  `}>
            <div className="flex w-1/2 flex-col"> 
                <h1 className="text-white text-3xl ps-4 pt-2">R$:{props.value}</h1>
                <h4 className="text-white ps-4 pt-5">Total de {props.type}</h4>
            </div>
            <div className="flex w-1/2 justify-end">
                {iconSelected}
                
            </div>
        </div>
    )
}