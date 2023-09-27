import { FaPen, FaTrash } from "react-icons/fa"
import CustomModal from './../../templates/Modal'
import { useState } from "react"
import axios from "axios"


export default function Listar(props) {

    const allData = props.allData

    function callModal(data) {
        setModalActive(true)
        setCurrentData(data)
    }
    function concludeDelete(id){
        axios.delete(`http://localhost:3003/api/${id}`, {headers: id}).then(resp => {
            console.log('response:', resp)
            setModalActive(false)
        })
    }

    const [modalActive, setModalActive] = useState(false)
    const [currentData, setCurrentData] = useState(null)
    const [deleteChoide, setDeleteChoice] = useState(false)
    return (
        <>
            <table className="w-full flex flex-col">
                <thead className="text-sm w-full bg-blue-200">
                    <tr className=" grid grid-cols-12 w-full -between">
                        <th className="col-span-6">Nome</th>
                        <th className="col-span-2">Mês</th>
                        <th className="col-span-2">Ano</th>
                        <th className="col-span-2">Ações</th>
                    </tr>
                </thead>
                <tbody className="text-sm w-full pt-2">
                    {allData.map((data, index) => (

                        <tr key={index} className="w-full grid grid-cols-12 text-center border-b-2 border-b-blue-300 items-center" data-row={JSON.stringify(data)}>
                            <td className="col-span-6">{data.name}</td>
                            <td className="col-span-2">{data.month}</td>
                            <td className="col-span-2">{data.year}</td>
                            <td className="text-white  text-3xl col-span-2 flex justify-center">
                                <button className="appearance-none bg-orange-500 me-1 rounded-sm"><FaPen className="p-1" /></button>
                                <button className="appearance-none bg-rose-500 ms-1 rounded-sm"><FaTrash className="p-1" onClick={(e) => callModal(data)} /></button>
                            </td>
                        </tr>

                    ))}

                </tbody>
                
            </table>
            {!  modalActive ? null : (<CustomModal data={currentData} concludeDelete={concludeDelete}/>) }
        </>
    )
}