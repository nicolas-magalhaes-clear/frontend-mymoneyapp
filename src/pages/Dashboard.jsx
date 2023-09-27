import { CardLoadInfo } from "../templates/CardLoadInfo";
import { FaMoneyBillAlt, FaCreditCard } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";

import {useSelector, useDispatch} from 'react-redux'
import { fetchData, loadCredits, loadDebts } from "../store/actions/billingCycleSlice";
import { useEffect } from "react";
import { useState } from "react";

export default function Dashboard() {

    const dispatch = useDispatch()
    const allData = useSelector((state) => state.billingCycle.data)
    const loadingStatus= useSelector((state)=> state.billingCycle.loading)

    console.log('alldata start:', allData)
    useEffect(()=>{
        dispatch(fetchData());
        console.log('load status1:', loadingStatus)
    }, [dispatch])

    useEffect(()=>{
        if(allData !== null){
            console.log('valor diferente de nulo')
            console.log('valor de alldata completo', allData)

            let credits = 0
            let debts = 0
            allData.forEach(data=> {
                console.log('Entrou em for each', data)
                data.credits.forEach(currentCredit => {
                    console.log(`adicionando o valor de ${currentCredit.value} ao valor ${credits} `)
                    credits+= parseInt(currentCredit.value)
                })
                data.debts.forEach(currentDebt => {
                    console.log(`adicionando o valor de ${currentDebts.value} ao valor ${debts} `)
                    debts+= parseInt(currentDebt.value)
                })
            })
            setCurrentCredits(credits)
            setCurrentDebts(debts)
            let consolidatedDebts =  parseInt(credits+(-debts))
            setCurrentConsolidatedDebts(consolidatedDebts)
        }
    }, [allData])
    

    
      
      
    
    


    const [currentCredits, setCurrentCredits] = useState(0)
    const [currentDebts, setCurrentDebts] = useState(0)
    const [currentConsolidatedDebts, setCurrentConsolidatedDebts] = useState(0)
    
    return (
        <>
            <h1 className="text-white text-3xl">Dashboard</h1>
            <div className="grid grid-cols-3 mt-2 gap-x-2">
                <CardLoadInfo value={currentCredits} subtitle="Total de créditos" className="bg-lime-600" iconSelected={<AiOutlineBank className={`text-8xl text-lime-700`} />} />
                <CardLoadInfo value={currentDebts} subtitle="Total de débitos" className="bg-rose-600" iconSelected={<FaCreditCard className={`text-8xl text-rose-700`} />} />
                <CardLoadInfo value={currentConsolidatedDebts} subtitle="Valor consolidado" className="bg-cyan-600" iconSelected={<FaMoneyBillAlt className={`text-8xl text-cyan-700`} />} />
            </div>
           

        </>
    )
}