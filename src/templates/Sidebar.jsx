
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import { FaMoneyBill } from "react-icons/fa6";
import Menus from "./menus";

const Sidebar = (props) => {


    const [open, setOpen] = useState(true);

    return (
        <div className={`h-screen top-0 left-0 bg-stone-800 duration-300 ${open ? 'w-72' : 'w-20'} relative  border-r-2 border-stone-500 border-r-stone-500`}>
            <BsFillArrowLeftCircleFill className={`absolute -right-4 top-16 text-4xl text-slate-100  border border-blue-500 rounded-full duration-300 cursor-pointer ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)} />

            <div className="intern-area flex flex-col  w-full h-full">
                <div className="brand-area w-full mt-5 font-bold text-center break-keep overflow-hidden flex items-center justify-center flex-nowrap">
                    <FaMoneyBill className="me-2 text-white"/>
                    <h1 className=" text-2x1 text-white text-bold flex items-center justify-center break-keep flex-nowrap overflow-hidden duration-300 origin-left">{`${!open ? '' : 'My Money'}`}</h1>

                </div>
                <div className="menu-container p-2">
                <Menus/>
                </div>
                

            </div>



        </div>
    )


}
export default Sidebar;