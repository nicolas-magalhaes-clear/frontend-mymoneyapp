import { CardLoadInfo } from "../../templates/CardLoadInfo";
import Input from "../../templates/Input";
import { FaMoneyBillAlt, FaCreditCard, FaTrash, FaPlus, FaCopy } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";





export default function Incluir(props) {

    console.log('props::', props)
    let creditsRows = props.creditsRows
    
    console.log('credits rows::', creditsRows)

    function addCreditsRows() {
        console.log("adicionando nova linha");
        const newRowData = { creditName: "", creditValue: 0 };
    
        // Use props.setCreditsRows para atualizar o estado no componente pai
        props.setCreditsRows([...props.creditsRows, newRowData]);
      }

    return (
        <div className="w-full ">
            <div className="grid grid-cols-3 gap-x-4 w-full">
                <Input label="Nome" type="text" name="name" placeholder="Insira um nome" />
                <Input label="Mês" type="text" name="month" placeholder="Insira o Mês" />
                <Input label="Ano" type="text" name="year" placeholder="Insira o Ano" />
            </div>
            <div className="mt-1">
                <h1>Resumo</h1>
                <hr className="border-solid border-stone-400" />
                <div className="grid grid-cols-3 gap-x-4">
                    <CardLoadInfo className="bg-lime-500" value="" subtitle="Valor total de cŕeditos" iconSelected={<AiOutlineBank className={`text-8xl text-lime-700`} />} />
                    <CardLoadInfo value="" subtitle="Total de débitos" className="bg-rose-600" iconSelected={<FaCreditCard className={`text-8xl text-rose-700`} />} />
                    <CardLoadInfo value="" subtitle="Valor consolidado" className="bg-cyan-600" iconSelected={<FaMoneyBillAlt className={`text-8xl text-cyan-700`} />} />
                </div>
                <div className="w-full mt-1 grid grid-cols-2">
                    <div id="allDebts" className="w-full flex flex-col">
                        <h3 className="w-full">Créditos</h3>
                        {props.creditsRows.map(credit =>{
                            console.log('credit::', credit)
                        } )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}