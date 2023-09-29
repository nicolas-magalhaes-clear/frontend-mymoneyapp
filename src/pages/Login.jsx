import axios from "axios"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setUserInfo } from "../store/actions/authSlice"
export default function Login(props){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [messageErrorLogin, setMessageErrorLogin] = useState("")

    const dispatch = useDispatch()

    function getLogin(){
        let submitBtn = document.querySelector('#submitlogin')
        
        axios.post('http://localhost:3003/api/login', {email, password}).then(resp => {
            console.log('Ok resp', resp)
            if(resp.status === 200){
                dispatch(setUserInfo(resp.data))
                props.setLogin(true)
            }
            else{
                btn.disabled = false
                submitBtn.classList.remove('bg-red-500')
                submitBtn.classList.remove('cursor-not-allowed')
                setMessageErrorLogin('Usuários ou senha inválidos')
            }
        }).catch(error=> {
            submitBtn.disabled = false
                submitBtn.classList.remove('bg-red-500')
                submitBtn.classList.remove('cursor-not-allowed')
                setMessageErrorLogin('Usuários ou senha inválidos')
        })
    }

    return(
        <div className="w-screen h-screen flex items-center justify-center bg-slate-400">
            <div className="flex flex-col overflow-hidden rounded-lg w-1/3 h-1/2">
                <div className="logoarea bg-gray-500 p-2 text-white flex items-center justify-center h-6 w">
                    <h3 className="text-center" >My Money App</h3>
                </div>
                <div className="loginForm bg-white p-2">
                    <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                        <h4 className="text-center">Bem vindo</h4>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs">Email</label>
                            <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="box-border bg-gray-600 text-white rounded-sm" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-xs">Senha</label>
                            <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="box-border bg-gray-600 text-white rounded-sm" />
                        </div>
                        <p>{messageErrorLogin}</p>
                        <button id="submitlogin" onClick={()=> {getLogin()}} className=" bg-blue-300 self-start rounded-md p-1 mt-1 font-bold">Acessar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}