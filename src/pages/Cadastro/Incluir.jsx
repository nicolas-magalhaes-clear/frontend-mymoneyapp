import { CardLoadInfo } from "../../templates/CardLoadInfo";
import Input from "../../templates/Input";
import { FaMoneyBillAlt, FaCreditCard } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { useEffect, useState } from "react";

import { FaPlus, FaTrash, FaCopy } from 'react-icons/fa'
import axios from "axios";



export default function Incluir(props) {

    const [creditsRows, setCreditsRows] = useState([{ creditName: "", creditValue: 0 }])
    const [debtsRows, setDebtsRows] = useState([{ debtName: "", debtValue: 0 }])

    const [totalCredits, setTotalCredits] = useState(0)
    const [totalDebts, setTotalDebts] = useState(0)
    const [totalValue, setTotalValue] = useState(0)

    const [formName, setFormName] = useState("");
    const [formMonth, setFormMonth] = useState(0);
    const [formYear, setFormYear] = useState(0)

    function removeElement(index) {

        if (index != 0) {
            let aux = creditsRows.splice(index, 1)
            setCreditsRows(aux);
        }

    }

    function copyElement(index, data) {

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

            const updatedRows = [...creditsRows];
            updatedRows[index].creditValue = e.target.value;
            if (updatedRows[index].creditValue === '') {

                updatedRows[index].creditValue = 0
            }
            updatedRows[index].creditValue = parseInt(updatedRows[index].creditValue)
            setCreditsRows(updatedRows);
        }
        if (type === 'debt') {
            const updatedRows = [...debtsRows];
            updatedRows[index].debtValue = e.target.value;
            if (updatedRows[index].debtValue === '') {
                updatedRows[index].debtValue = 0
            }

            updatedRows[index].debtValue = parseInt(updatedRows[index].debtValue)
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


            if (_debtsValue == NaN) {
                _debtsValue = 0
            }
            if (_debtsValue !== "" && _debtsValue != 0 && _debtsValue !== null && _debtsValue != NaN) {
                _totalDebts += _debtsValue
            }

        })
        setTotalCredits(_totalCredits);
        setTotalDebts(_totalDebts);

        let _diff = _totalCredits - _totalDebts
        setTotalValue(_diff)


    }, [creditsRows, debtsRows])


    function includeNew() {
        let form = document.querySelector('#form-include');

        let formdata = new FormData(form)

        let dataToBeSend = {

            name: "",
            month: "",
            year: ""
        }



        const infoArea = document.querySelector('#info-area')

        let _inputName = infoArea.querySelector('input[name=name]').value
        let _inputMonth = infoArea.querySelector('input[name=month]').value
        let _inputYear = infoArea.querySelector('input[name=year]').value

        dataToBeSend.name = _inputName
        dataToBeSend.month = _inputMonth
        dataToBeSend.year = _inputYear

        const divCredit = document.querySelectorAll('.creditObject')

        let _credits = []
        divCredit.forEach(element => {
            console.log('element:', element)
            let inputName = element.querySelector('input[name=name]').value
            let inputValue = element.querySelector('input[name=value]').value
            _credits.push({ name: inputName, value: inputValue })

        })

        const _debts = []
        const divDebts = document.querySelectorAll('.debtObject')
        divDebts.forEach(element => {
            console.log('element:', element)
            let inputName = element.querySelector('input[name=name]').value
            let inputValue = element.querySelector('input[name=value]').value
            _debts.push({ name: inputName, value: inputValue })

        })

        dataToBeSend.credits = _credits
        dataToBeSend.debts = _debts

        console.log('data to be send kkk', dataToBeSend)



        axios.post('http://localhost:3003/api', dataToBeSend).then(resp => {
            
            
        }).catch(error => {
            alert(`Ocorreu um erro: ${error.response.data}`)
            console.log('error ok ', error.response)
        })
    }

    function changeName(e, index, data, fieldType) {
        if (fieldType === 'name') {
            setFormName(e.target.value)
        }
        if (fieldType === 'month') {
            setFormMonth(e.target.value)
        }
        if (fieldType === 'year') {
            setFormYear(e.target.value)
        }

    }

    return (
        <form id="form-include" className="w-full grid grid-rows-6 ">
            <div className="grid grid-cols-3 row-span-1 gap-x-4 w-full" id="info-area">
                <Input index={0} data={null} fieldType="name" onChange={changeName} label="Nome" type="text" name="name" placeholder="Insira um nome" />
                <Input index={0} data={null} fieldType="month" onChange={changeName} label="Mês" type="number" name="month" placeholder="Insira o Mês" />
                <Input index={0} data={null} fieldType="year" onChange={changeName} label="Ano" type="number" name="year" placeholder="Insira o Ano" />
            </div>
            <div className="mt-1 row-span-5 h-full">
                <h1>Resumo</h1>
                <hr className="border-solid border-stone-400" />
                <div className="grid grid-cols-3 gap-x-4">
                    <CardLoadInfo className="bg-lime-500" value={totalCredits} subtitle="Valor total de cŕeditos" iconSelected={<AiOutlineBank className={`text-8xl text-lime-700`} />} />
                    <CardLoadInfo value={totalDebts} subtitle="Total de débitos" className="bg-rose-600" iconSelected={<FaCreditCard className={`text-8xl text-rose-700`} />} />
                    <CardLoadInfo value={totalValue} subtitle="Valor consolidado" className="bg-cyan-600" iconSelected={<FaMoneyBillAlt className={`text-8xl text-cyan-700`} />} />
                </div>
                <div className="w-full mt-1 grid grid-cols-2" style={{ height: '40%' }}>

                    <div id="allCredits" className="w-full flex flex-col overflow-auto h-auto">
                        <h3 className="w-full">Créditos</h3>
                        {

                            creditsRows.map((credit, index) => (

                                <div className="grid grid-cols-3 gap-x-2 creditObject" key={index}>
                                    <Input type="text" value={credit.creditName} index={index} data={credit} fieldType="credit" onChange={changeText} placeholder="Nome do crédito" name={`name`} className="" />
                                    <Input type="number" value={credit.creditValue} index={index} data={credit} fieldType="credit" onChange={changeNumber} placeholder="Valor do crédito" name={`value`} className=""
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

                                <div className="grid grid-cols-3 gap-x-2 debtObject" key={index}>
                                    <Input type="text" value={debt.debtName} index={index} data={debt} fieldType="debt" onChange={changeText} placeholder="Nome do crédito" name={`name`} className="" />
                                    <Input type="number" value={debt.debtValue} index={index} data={debt} fieldType="debt" onChange={changeNumber} placeholder="Valor do crédito" name={`value`} className=""
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
                <div className="w-full  flex items-center justify-start">
                    <button onClick={() => includeNew()} className="appearance-none bg-blue-500 p-2 rounded-md hover:bg-red-500 hover:text-white" type="button">Incluir</button>
                </div>
            </div>
        </form>
    )
}