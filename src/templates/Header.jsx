import { useSelector, useDispatch } from "react-redux"
import { setUserInfo } from "../store/actions/authSlice"
import { useState } from "react"

const Header = () => {

    
    const userInfo = useSelector((state) => state.authSlice.data)
    const userName = userInfo.name
    const dispatch = useDispatch()
    function logout(){
        setUserInfo(null)
    }
    function displayMenu(){
        
    }
    function logout(){
        dispatch(setUserInfo(null))
    }

    const [menuStatus, setMenuStatus] = useState(false)
    console.log('menu status:', menuStatus)
    return(
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="w-full h-full bg-stone-800 border-b-2 border-b-slate-200">
            
            
=======
=======
>>>>>>> 897af526084b91c17ea686b28e409cc7ee568de7
        <div className="relative w-full h-full flex justify-end pe-2 bg-stone-800 border-b-2 border-b-slate-200">
            <h5  onClick={()=> setMenuStatus(!menuStatus)} className={`cursor-pointer text-white `}>{userName}</h5>
            <div  className={`${!menuStatus ? 'hidden' : 'flex'} absolute top-8 bottom-0 right-0  flex-col bg-white`}>
                <div className="userInfo flex flex-col bg-white">
                <p className="text-center">{userInfo.name}</p>
                <p className="text-center">{userInfo.email}</p>
                </div>
                <button className="bg-blue-300" onClick={()=>logout()}>Logout</button>
            </div>
<<<<<<< HEAD
>>>>>>> 897af526084b91c17ea686b28e409cc7ee568de7
=======
>>>>>>> 897af526084b91c17ea686b28e409cc7ee568de7
        </div>
    )
}

export default Header