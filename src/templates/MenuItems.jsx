import { Link } from "react-router-dom";


export default function MenuItems(props){

    console.log('Props path:::', props.path)
    return(
        <li className="w-full">
            <Link to={props.path} className="flex justify-center items-center p-2">
                {props.icon}
                {props.label}
            </Link>
        </li>
    )
}