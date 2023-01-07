import React from 'react'
import logo from "../../assets/images/logo.svg"
import { useLocation, useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../../context/userContext';
import { cashFormat } from '../../utils/cashFormat';

export default function Index() {

    const location = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = React.useState(location.pathname);
    const userContext: IUser = React.useContext(UserContext);

    React.useEffect(() => { 
        setActive(location.pathname)
    }, [location.pathname])  

    const LogOut =()=> {
        navigate("/")
        localStorage.clear()
    }

    const clickHandler = (item: any) => {
        userContext.setFilterUser({})
        userContext.setFilterTransaction({})
        navigate(item)
    }

    return (
        <div className=' w-full h-[64px] flex justify-center px-12 bg-[#252626] border-b border-[#444444] ' >
            <div className=' xl:w-[1280px] font-Inter-Medium mx-auto text-[14px] flex  items-center h-[full] ' > 
                <img src={logo} alt="" /> 
                <div className=' flex items-center ml-8 text-[#C0C0C0] ' >
                    <button onClick={()=> clickHandler('/dashboard')} className={active === "/dashboard" ? ' text-[#98AD17] mx-4 ':' mx-4 '} >Dashboard</button>
                    <button onClick={()=> clickHandler('/dashboard/transactions')} className={active === "/dashboard/transactions" ? ' text-[#98AD17] mx-4 ':' mx-4 '} >Transactions</button>
                    <button onClick={()=> clickHandler('/dashboard/customer')} className={active === "/dashboard/customer" ? ' text-[#98AD17] mx-4 ':' mx-4 '} >Customers</button>
                    <button onClick={()=> clickHandler('/dashboard/settings')} className={active === "/dashboard/settings" ? ' text-[#98AD17] mx-4 ':' mx-4 '} >Settings</button>
                </div>
                <div className=' flex items-center ml-auto text-[#C0C0C0] ' >
                    <button onClick={LogOut} className=' border-r text-[#98AD17] px-4 border-[#444444] ' >Logout</button>
                    <div className=' border-r px-4 border-[#444444]  ' >Balalance: {cashFormat(userContext?.userInfo?.wallet)}</div>
                    <div className=' px-4 ' >{userContext?.userInfo?.firstName+" "+userContext?.userInfo?.lastName}</div>
                </div>
            </div>
        </div>
    )
} 