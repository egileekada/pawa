import React from 'react'
import BackSpace from "../../assets/images/backspace.svg"
import SortSelector from '../../components/SortSelector'
import CustomerTable from '../../components/CustomerTable' 
import SearchBar from '../../components/SearchBar'
import TransactionTable from '../../components/TransactionTable'
import { useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../../context/userContext'
import TransactionScreen from '../TransactionScreen' 
import ModalComponent from '../../components/ModalComponent'
import { useToast } from '@chakra-ui/react'
import { useUpdateUserInfoCallback } from '../../action/useAction'

export default function Index() { 

    const userContext: IUser = React.useContext(UserContext); 
    const [open, setOpen] = React.useState(false) 
    const [userData, setUserData] = React.useState({} as any) 
    const [loading, setLoading] = React.useState(false)
    const [check, setCheck] = React.useState(false) 
    const [modalName, setModalName] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(true) 
    const navigate = useNavigate()
    const toast = useToast()
    const { handleUpdateUserInfo } = useUpdateUserInfoCallback() 

    const GetUserInfoByID =async()=>{ 
        const t1 = setTimeout(() => {
            userContext.setFilterTransaction({
                user: localStorage.getItem("userId")
            })
            userContext.setFilterUser({
                _id: localStorage.getItem("userId")
            })
            clearTimeout(t1);
        }, 1000); 
        const t2 = setTimeout(() => {
            setIsLoading(false);  
            clearTimeout(t1);
        }, 2000); 
    }   
    
    React.useEffect(()=> { 
        GetUserInfoByID()
    },[check]) 

    React.useEffect(()=> { 
        if(!open){
            setCheck((prev)=> !prev)
        }
    },[open]) 

    const clickHandler =async()=> {
        await userContext.setFilterTransaction({} as any)
        await userContext.setFilterUser({} as any)
        navigate(-1)
    } 
    
    const openModal =(item: any)=> {
        setModalName(item)
        setOpen(true)
    }



    const onUpdateHandler =async(name: any, item: boolean)=>{ 
        // setLoading(true)
        let dataPayload : any
        if(name === "suspend"){  
            dataPayload = {suspend: item}
        } else {
            dataPayload = {deactivate: item}
        } 

        const request: any = await handleUpdateUserInfo(JSON.stringify(dataPayload), userData[0]._id)
        
        if (request.status === 200) {   
            toast({
                title: request?.data?.message,
                position: "bottom",
                status: "success",
                isClosable: true,
            })
        } else {
            toast({
                title: request?.data?.message,
                position: "bottom",
                status: "error",
                isClosable: true,
            })
        }  
        setCheck((prev)=> !prev)
        setLoading(false)  
    } 

    return (
        <div className=' w-full font-Inter-Medium text-white  ' >
            <div className=' flex items-center text-[13px] ' > 
                <button onClick={()=> clickHandler()} > 
                    <img src={BackSpace} alt="BackSpace" />
                </button>
                <p className=' text-[20px] ml-3 ' >Customers Details</p>
                <button onClick={()=> openModal("Credit User Wallet")} className=' px-3 outline-none h-[45px] bg-[#98AD17] ml-auto ' >
                    Credit Wallet
                </button>
                <button onClick={()=> openModal("Debit User Wallet")} className=' px-3 outline-none h-[45px] bg-[#98AD17] ml-4 ' >
                    Debit Wallet
                </button>
                <button onClick={()=> onUpdateHandler("suspend", !userData[0]?.suspend)} className={userData[0]?.suspend ? ' px-3 outline-none h-[45px] bg-[#ff0000] ml-4 ' : ' px-3 outline-none h-[45px] bg-[#98AD17] ml-4 '} >
                    {userData[0]?.suspend ? "Retain User" : "Suspend User"}
                </button> 
                <button onClick={()=> onUpdateHandler("deactivate", !userData[0]?.deactivate)} className={userData[0]?.deactivate ? ' px-3 outline-none h-[45px] bg-[#ff0000] ml-4 ' : ' px-3 outline-none h-[45px] bg-[#98AD17] ml-4 ' } >
                    {userData[0]?.deactivate ? "Activate User" : "Deactivate User"} 
                </button>
                <div className=' ml-4 w-[45px] h-[45px] bg-blue-600 ' >

                </div>
            </div>
            {!isLoading && (
                <> 
                    <CustomerTable data={setUserData} detail={true} />  
                    <div className=' w-full mt-8' > 
                        <TransactionScreen detail={true} />
                    </div>
                </>
            )}
            {isLoading && 
                <div className=' w-full flex justify-center font-Inter-Medium pt-4 mt-3 pb-6 ' >
                    Loading...
                </div>
            } 
            <ModalComponent name={modalName} open={open} close={setOpen} />
        </div>
    )
} 