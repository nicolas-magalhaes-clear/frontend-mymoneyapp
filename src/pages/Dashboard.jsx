import { CardLoadInfo } from "../templates/CardLoadInfo";

import { AiOutlineBank } from "react-icons/ai";


export default function Dashboard(){
    return(
        <>
        <h1 className="text-white text-3xl">Dashboard</h1>
        <div className="grid grid-cols-3 m-1  gap-x-2">
            <CardLoadInfo value="1000" type="créditos" className="bg-lime-600" iconSelected={<AiOutlineBank className={`text-8xl text-lime-700`}/>}/>
            <CardLoadInfo value="1000" type="Debitos" className="bg-rose-600" iconSelected={<AiOutlineBank className={`text-8xl text-rose-700`}/>}/>
            <CardLoadInfo value="1000" type="créditos" className="bg-cyan-600" iconSelected={<AiOutlineBank className={`text-8xl text-cyan-700`}/>}/>
        </div>
        </>
    )
}