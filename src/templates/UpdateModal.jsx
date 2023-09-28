import { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import { FaPlus, FaTrash } from "react-icons/fa";

export default function UpdateModal(props) {

    const [name, setName] = useState(props.data.name)
    const [month, setMonth] = useState(props.data.month)
    const [year, setYear] = useState(props.data.year)


    const [credits, setCredits] = useState(props.data.credits)
    const [debts, setDebts] = useState(props.data.debts)

    function handleUpdate(){
        let objSend = {
            _id: props.data._id,
            name: name,
            month: month,
            year: year,
            credits: [...credits],
            debts: [...debts]
        }
        props.getData(objSend)
    }

    console.log('credit', credits)

    function deleteRow(index, type) {

        if (type === 'credit') {

            let updatedRows = credits

            let newRows = []
            updatedRows.forEach((row, _index) => {
                if (_index !== index) {
                    newRows.push(row)
                }
            })
            //console.log('new rows:', newRows)
            setCredits(newRows)
        }
        if (type === 'debt') {
            let updatedRows = debts

            let newRows = []
            updatedRows.forEach((row, _index) => {
                if (_index !== index) {
                    newRows.push(row)
                }
            })
            //console.log('new rows:', newRows)
            setDebts(newRows)
        }

    }

    function updateValue(type, typeField, e, index) {
        console.log('tipo campo:', type, "tipo field:", typeField)
        console.log('Valor de E:', e)
        if (typeField === 'credit') {

            let _updatedRows = [...credits]


            if (type === 'name') {

                _updatedRows[index] = { ..._updatedRows[index], name: e.target.value }

            }
            if (type === 'value') {

                _updatedRows[index] = { ..._updatedRows[index], value: e.target.value }

            }
            console.log('updated rows:', _updatedRows)
            setCredits(_updatedRows)
        }
        if (typeField === 'debt') {
            let _updatedRows = [...debts]


            if (type === 'name') {

                _updatedRows[index] = { ..._updatedRows[index], name: e.target.value }


            }
            if (type === 'value') {

                _updatedRows[index] = { ..._updatedRows[index], value: e.target.value }

            }
            setDebts(_updatedRows)
        }


    }

    return (

        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex h-full w-full items-center justify-center  text-center">

                    <div className="w-3/5 flex flex-col h-4/5 relative  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                        <div className="content-area flex flex-col w-full h-full mt-2 p-2">
                            <div className="flex items-center">
                                <div className="bg-orange-200 p-1 rounded-full flex items-center justify-center">
                                    <AiFillWarning className="text-orange-600 text-3xl" />
                                </div>
                                <h1 className="ms-3">Editando informaçõe de  {name}</h1>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex flex-col border-b border-b-black">
                                    <label htmlFor="name" className="text-sm">Nome</label>
                                    <input type="text" value={name} id="nome" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="flex flex-col border-b border-b-black">
                                    <label htmlFor="month" className="text-sm">Mês</label>
                                    <input type="number" id="month" value={month} onChange={(e) => setMonth(e.target.value)} />
                                </div>
                                <div className="flex flex-col border-b border-b-black">
                                    <label htmlFor="year" className="text-sm">Ano</label>
                                    <input type="number" value={year} id="year" onChange={(e) => setYear(e.target.value)} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-2 overflow-auto h-5/6">
                                <div id="creditsArea" className="h-5/6 overflow-auto  mt-2 p-1 border border-black rounded-lg">
                                    <h1>Creditos</h1>
                                    {credits.map((credit, index) => (

                                        <div className="grid grid-cols-6 gap-x-2" key={index}>
                                            <div className="col-span-2 flex  bg-blue-200 flex-col justify-center p-1 rounded-sm bg-blue-200 box-border">
                                                <label htmlFor="" className="text-xs">Nome</label>
                                                <input type="text" className="box-border" value={credit.name} onChange={(e) => updateValue('name', 'credit', e, index)} />
                                            </div>
                                            <div className="col-span-2 flex  flex-col justify-center p-1 rounded-sm bg-blue-200">
                                                <label htmlFor="" className="text-xs box-border">Valor</label>
                                                <input type="text" className=" box-border" onChange={(e) => updateValue('value', 'credit', e, index)} value={credit.value} />
                                            </div>
                                            <div className="col-span-2 flex items-center">
                                                <FaPlus className="m-1 p-1 text-3xl bg-orange-600 rounded-md text-yellow-300" onClick={() => setCredits([...credits, { name: "", value: 0 }])} />
                                                <FaTrash className="m-1 p-1 text-3xl bg-rose-600 rounded-md text-white" onClick={() => deleteRow(index, 'credit')} />
                                            </div>

                                        </div>
                                    ))}
                                </div>
                                <div id="debtsArea" className="mt-2 h-5/6 overflow-auto p-1 border border-black rounded-lg">
                                    <h1>Debitos</h1>
                                    {debts.map((debt, index) => (

                                        <div className="grid grid-cols-6 gap-x-2 " key={index}>
                                            <div className="col-span-2 flex  bg-blue-200 flex-col justify-center p-1 rounded-sm bg-blue-200 box-border">
                                                <label htmlFor="" className="text-xs">Nome</label>
                                                <input type="text" className="box-border" value={debt.name} onChange={(e) => updateValue('name', 'debt', e, index)} />
                                            </div>
                                            <div className="col-span-2 flex  flex-col justify-center p-1 rounded-sm bg-blue-200">
                                                <label htmlFor="" className="text-xs box-border">Valor</label>
                                                <input type="text" className=" box-border" onChange={(e) => updateValue('value', 'debt', e, index)} value={debt.value} />
                                            </div>
                                            <div className="col-span-2 flex items-center">
                                                <FaPlus className="m-1 p-1 text-3xl bg-orange-600 rounded-md text-yellow-300" onClick={() => setDebts([...debts, { name: "", value: 0 }])} />
                                                <FaTrash className="m-1 p-1 text-3xl bg-rose-600 rounded-md text-white" onClick={() => deleteRow(index, 'debt')} />
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="">
                                <button type="button" className="bg-orange-500 p-1 rounded-md me-1" onClick={() => handleUpdate()} >Atualizar</button>
                                <button type="button" className=" ">Cancelar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}