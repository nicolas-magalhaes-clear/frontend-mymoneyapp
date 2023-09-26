

export default function MenuItems(props){

    
    return(
        <li className="w-full">
            <a href={props.path} className="flex justify-center items-center p-2">
                {props.icon}
                {props.label}
            </a>
        </li>
    )
}