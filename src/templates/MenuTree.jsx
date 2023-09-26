import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function MenuTree(props) {
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(function(){
        console.log('open menu now', openMenu)
    }, [openMenu])

    return (
        <li className={`treeview w-full mt-2 rounded-md border`}>
            <a href="#" className="flex w-full bg-blue-800 items-center justify-between p-2" onClick={() => setOpenMenu(!openMenu)}>
                <div className="flex items-center justify-center w-4/5">
                    {props.icon}
                    {props.label}
                </div>
                {!openMenu ? <FaAngleUp className="w-1/5" /> : <FaAngleDown className="w-1/5" />}
            </a>
            <ul className={`justify-center bg-white text-blue-700 duration-300  hover:bg-slate-400 hover:text-black ${!openMenu ? 'hidden' : "flex"}`}>{props.children}</ul>
        </li>
    );
}
