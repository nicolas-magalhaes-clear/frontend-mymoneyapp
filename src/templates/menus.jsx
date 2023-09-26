import MenuItems from "./MenuItems"
import { MdDashboard } from "react-icons/md";

import MenuTree from "./MenuTree";
import { AiOutlineUserAdd } from "react-icons/ai";




const Menus = (props) =>{

    return(
        <div className="flex flex-col w-full items-center mt-6 text-white">
            <ul className="flex w-full flex-col rounded-md hover:bg-slate-300 hover:text-stone-800">
                <MenuItems path="/dashboard" label="Dashboard" className='rounded' icon={<MdDashboard/>}/>
            </ul>
            <MenuTree icon={<AiOutlineUserAdd/>}  label="Cadastro">
                <MenuItems path='/cadastro/ciclopagamentos' label="Ciclos de pagamentos"/>
            </MenuTree>
        </div>
    )
}
export default Menus