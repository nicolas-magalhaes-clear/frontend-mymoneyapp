import { useState } from "react"
import Incluir from "./Incluir"
import Listar from './Listar'
import Excluir from "./Excluir"
import Alterar from './Alterar'
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../../store/actions/billingCycleSlice"
import { useEffect } from "react"


import { FaBars, FaPlus, FaPen, FaTrash  } from 'react-icons/fa'

export default function CicloPagamentos(){

    const dispatch = useDispatch()
    const allData = useSelector((state) => state.billingCycle.data)

    useEffect(()=>{
        dispatch(fetchData());
        console.log('alldata:', allData)
    }, [dispatch])

    useEffect(()=>{
        if(allData !== null){
            console.log('Diferente de null!!')
        
        }
    }, [allData])

    const [loadedItem, setLoadedItem] = useState(Incluir)
    const [activeItem, setActiveItem] = useState('Incluir')

    function changePage(LoadedPage, loadedLink){
        setLoadedItem(LoadedPage);
        setActiveItem(loadedLink);
    }

    function verifyPage(currentPage){
        if(activeItem === currentPage ){
            return "bg-cyan-300"
        }
        else{
            return "bg-white"
        }
    }

    return(
        <div className="w-full h-full">
            <div className="flex flex-1 bg-blue-500 rounded-t-md overflow-hidden" style={{height: '10%'}}>
                <ul className="flex items-center cursor-pointer">
                    <li onClick={() => changePage(<Incluir />, 'Incluir')} className={`h-full flex items-center px-2 ${verifyPage('Incluir')} hover:bg-cyan-300 duration-75`}>
                        <FaPlus/>
                        Incluir
                    </li>
                    <li onClick={() => changePage(<Listar allData={allData}/>, 'Listar')} className={`h-full flex items-center px-2 ${verifyPage('Listar')} hover:bg-cyan-300 duration-75`}>
                        <FaBars/>
                        Listar
                    </li>
                    <li onClick={() => changePage(<Alterar/>, 'Alterar')} className={`h-full flex items-center px-2 ${verifyPage('Alterar')} hover:bg-cyan-300 duration-75`}>
                        <FaPen/>
                        Alterar
                    </li>
                    <li onClick={() => changePage(<Excluir/>, 'Excluir')} className={`h-full flex items-center px-2 ${verifyPage('Excluir')} hover:bg-cyan-300 duration-75`}>
                        <FaTrash/>
                        Excluir
                    </li>

                </ul>


            </div>
            <div className="flex bg-slate-200 p-2" style={{height: '90%'}}>
                {loadedItem}
                {console.log('data all data data: ', allData)}
            </div>
        </div>
    )
}