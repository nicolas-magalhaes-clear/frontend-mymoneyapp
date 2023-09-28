import { useState } from "react"
import Incluir from "./Incluir"
import Listar from './Listar'
import Excluir from "./Excluir"
import Alterar from './Alterar'
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../../store/actions/billingCycleSlice"
import { useEffect } from "react"
import Input from "../../templates/Input"


import { FaBars, FaPlus, FaPen, FaTrash, FaCopy } from 'react-icons/fa'

export default function CicloPagamentos() {

    const dispatch = useDispatch()
    const allData = useSelector((state) => state.billingCycle.data)

    useEffect(() => {
        dispatch(fetchData());
        console.log('alldata:', allData)
    }, [dispatch])

    useEffect(() => {
        if (allData !== null) {
            console.log('Diferente de null!!')

        }
    }, [allData])

    const [creditsRows, setCreditsRows] = useState([{ creditName: "", creditValue: 0 }])
    
    const [loadedItem, setLoadedItem] = useState(<Incluir creditsRows={creditsRows} showCredits={showCredits} />)
    const [activeItem, setActiveItem] = useState('Incluir')


    function showCredits (){
        
       return creditsRows.map((credit, index) => (
            <div className="grid grid-cols-3 gap-x-2" key={index}>
                <Input type="text" placeholder="Nome do crédito" value={credit.creditName} name="credit" className="" />
                <Input type="number" placeholder="Valor do crédito" value={credit.creditValue} name="credit" className=""
                    onChange={() => { }} />
                <div className="flex items-center">

                    <FaPlus className="bg-blue-400 p-2 me-1 text-3xl text-white rounded-sm"
                        onClick={() => setCreditsRows([...creditsRows, {creditName: "", creditValue: 0}])} />
                    <FaCopy className="bg-orange-500 p-2 me-1 text-3xl text-white rounded-sm" />
                    <FaTrash className="bg-rose-600 p-2 text-3xl text-white rounded-sm" />
                </div>
            </div>
        ))
    }

    function changePage(LoadedPage, loadedLink) {
        setLoadedItem(LoadedPage);
        setActiveItem(loadedLink);
    }

    function verifyPage(currentPage) {
        if (activeItem === currentPage) {
            return "bg-cyan-300"
        }
        else {
            return "bg-white"
        }
    }

    return (
        <div className="w-full h-full flex flex-col flex-1">
            <div className="flex flex-1 bg-blue-500 rounded-t-md overflow-hidden" style={{ height: '10%' }}>
                <ul className="flex items-center cursor-pointer">
                    <li onClick={() => changePage(<Incluir creditsRows={creditsRows} showCredits={showCredits} />, 'Incluir')} className={`h-full flex items-center px-2 ${verifyPage('Incluir')} hover:bg-cyan-300 duration-75`}>
                        <FaPlus />
                        Incluir
                    </li>
                    <li onClick={() => changePage(<Listar allData={allData} />, 'Listar')} className={`h-full flex items-center px-2 ${verifyPage('Listar')} hover:bg-cyan-300 duration-75`}>
                        <FaBars />
                        Listar
                    </li>
                    <li onClick={() => changePage(<Alterar />, 'Alterar')} className={`h-full flex items-center px-2 ${verifyPage('Alterar')} hover:bg-cyan-300 duration-75`}>
                        <FaPen />
                        Alterar
                    </li>
                    <li onClick={() => changePage(<Excluir />, 'Excluir')} className={`h-full flex items-center px-2 ${verifyPage('Excluir')} hover:bg-cyan-300 duration-75`}>
                        <FaTrash />
                        Excluir
                    </li>

                </ul>


            </div>
            <div className="flex bg-slate-200 p-2" style={{ height: '90%' }}>
                {loadedItem}
               
            </div>
        </div>
    )
}