import { CardLoadInfo } from "../../templates/CardLoadInfo";
import Input from "../../templates/Input";
import { FaMoneyBillAlt, FaCreditCard } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { useEffect, useState } from "react";

import { FaPlus, FaTrash, FaCopy } from 'react-icons/fa'



export default function Incluir(props) {

    const [creditsRows, setCreditsRows] = useState([{ creditName: "", creditValue: 0 }])
    const [debtsRows, setDebtsRows] = useState([{ debtName: "", debtValue: 0 }])

    const [totalCredits, setTotalCredits] = useState(0)
    const [totalDebts, setTotalDebts] = useState(0)

    function removeElement(index) {
        if (index != 0) {
            let aux = creditsRows.splice(index, 1)
            setCreditsRows(aux);
        }

    }

    function copyElement(index, data) {
        console.log('data credit copy:', data)
        setCreditsRows([...creditsRows, { creditName: data.creditName, creditValue: data.creditValue }])
    }

    function changeText(e, index, data, type) {
        if (type === 'credit') {
            const updatedRows = [...creditsRows]; // Crie uma cópia da matriz de créditos
            updatedRows[index].creditName = e.target.value; // Atualize o valor desejado
            setCreditsRows(updatedRows); // Defina o estado com a nova matriz atualizada
        }
        if (type === 'debt') {
            const updatedRows = [...debtsRows]; // Crie uma cópia da matriz de créditos
            updatedRows[index].debtName = e.target.value; // Atualize o valor desejado
            setDebtsRows(updatedRows); // Defina o estado com a nova matriz atualizada
        }
    }
    function changeNumber(e, index, data, type) {
        if (type === 'credit') {
            
            const updatedRows = [...creditsRows]; // Crie uma cópia da matriz de créditos
            updatedRows[index].creditValue = e.target.value; // Atualize o valor desejado
            if(updatedRows[index].creditValue === ''){
                console.log('VALOR VAZIO')
                updatedRows[index].creditValue = 0
            }
            updatedRows[index].creditValue = parseInt(updatedRows[index].creditValue)
            setCreditsRows(updatedRows); // Defina o estado com a nova matriz atualizada
        }
        if (type === 'debt') {
            const updatedRows = [...debtsRows]; // Crie uma cópia da matriz de créditos
            updatedRows[index].debtValue = e.target.value; // Atualize o valor desejado
            setDebtsRows(updatedRows); // Defina o estado com a nova matriz atualizada
        }
    }

    
    
    useEffect(() => {
        
        let _totalCredits = 0
        let _totalDebts = 0
        
        creditsRows.map(credit => {
            
            let _creditsValue = parseInt(credit.creditValue)
            if (_creditsValue !== "" && _creditsValue != 0 && _creditsValue !== null) {
                
                _totalCredits += _creditsValue
            }
        })

        debtsRows.map(debt => {
            let _debtsValue = parseInt(debt.debtValue)
            if (_debtsValue !== "" && _debtsValue != 0 && _debtsValue !== null) {                
                _totalDebts += _debtsValue
            }
        })
        setTotalCredits(_totalCredits);
        setTotalDebts(_totalDebts);


    }, [creditsRows, debtsRows])


    console.log('credits row comp:', creditsRows)
    return (
        <div className="w-full grid grid-rows-6 ">
            <div className="grid grid-cols-3 row-span-1 gap-x-4 w-full">
                <Input label="Nome" type="text" name="name" placeholder="Insira um nome" />
                <Input label="Mês" type="text" name="month" placeholder="Insira o Mês" />
                <Input label="Ano" type="text" name="year" placeholder="Insira o Ano" />
            </div>
            <div className="mt-1 row-span-5 h-full">
                <h1>Resumo</h1>
                <hr className="border-solid border-stone-400" />
                <div className="grid grid-cols-3 gap-x-4">
                    <CardLoadInfo className="bg-lime-500" value={totalCredits} subtitle="Valor total de cŕeditos" iconSelected={<AiOutlineBank className={`text-8xl text-lime-700`} />} />
                    <CardLoadInfo value={totalDebts} subtitle="Total de débitos" className="bg-rose-600" iconSelected={<FaCreditCard className={`text-8xl text-rose-700`} />} />
                    <CardLoadInfo value="" subtitle="Valor consolidado" className="bg-cyan-600" iconSelected={<FaMoneyBillAlt className={`text-8xl text-cyan-700`} />} />
                </div>
                <div className="w-full mt-1 grid grid-cols-2" style={{ height: '40%' }}>

                    <div id="allCredits" className="w-full flex flex-col overflow-auto h-auto">
                        <h3 className="w-full">Créditos</h3>
                        {

                            creditsRows.map((credit, index) => (

                                <div className="grid grid-cols-3 gap-x-2" key={index}>
                                    <Input type="text" value={credit.creditName} index={index} data={credit} fieldType="credit" onChange={changeText} placeholder="Nome do crédito" name="credit" className="" />
                                    <Input type="number" value={credit.creditValue} index={index} data={credit} fieldType="credit" onChange={changeNumber} placeholder="Valor do crédito" name="credit" className=""
                                    />
                                    <div className="flex items-center">

                                        <FaPlus className="bg-blue-400 p-2 me-1 text-3xl text-white rounded-sm"
                                            onClick={() => setCreditsRows([...creditsRows, { creditName: "", creditValue: 0 }])} />
                                        <FaCopy onClick={() => copyElement(index, credit)} className="bg-orange-500 p-2 me-1 text-3xl text-white rounded-sm" />
                                        <FaTrash onClick={() => removeElement(index)} className="bg-rose-600 p-2 text-3xl text-white rounded-sm" />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div id="allDebts" className="w-full flex flex-col overflow-auto h-auto">
                        <h3 className="w-full">Debitos</h3>
                        {

                            debtsRows.map((debt, index) => (

                                <div className="grid grid-cols-3 gap-x-2" key={index}>
                                    <Input type="text" value={debt.debtName} index={index} data={debt} fieldType="debt" onChange={changeText} placeholder="Nome do crédito" name="debt" className="" />
                                    <Input type="number" value={debt.debtValue} index={index} data={debt} fieldType="debt" onChange={changeNumber} placeholder="Valor do crédito" name="debt" className=""
                                    />
                                    <div className="flex items-center">

                                        <FaPlus className="bg-blue-400 p-2 me-1 text-3xl text-white rounded-sm"
                                            onClick={() => setDebtsRows([...debtsRows, { debtName: "", debtValue: 0 }])} />
                                        <FaCopy onClick={() => copyElement(index, debt)} className="bg-orange-500 p-2 me-1 text-3xl text-white rounded-sm" />
                                        <FaTrash onClick={() => removeElement(index)} className="bg-rose-600 p-2 text-3xl text-white rounded-sm" />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}