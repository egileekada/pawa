import React from 'react'
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from 'recharts'
import { useGetDataCallback } from '../../action/useAction';
import GraphComponent from '../../components/GraphComponent/Cash Flow';
import Numbers from '../../components/GraphComponent/Numbers';
import { IUser, UserContext } from '../../context/userContext';
import { cashFormat } from '../../utils/cashFormat';

export default function Index() {

    const [walletBalance, setWalletBalance] = React.useState("") 
    const [transaction, setTransaction] = React.useState("")
    const [noOfTransaction, setNoOfTransaction] = React.useState("")
    const [users, setUsers] = React.useState("")
    const [profit, setProfit] = React.useState("")
    const { handleGetData } = useGetDataCallback(); 

    const GetWalletInformation =async()=>{
        const request = await handleGetData("/transaction/wallet/balance", {}) 
        setWalletBalance(request?.data?.data?.stat)
    }

    const GetTransactionInformation =async()=>{
        const request = await handleGetData("/transaction/volume", {})  
        setTransaction(request?.data?.data?.stat)
    }

    const GetNoOfTransactionInformation =async()=>{
        const request = await handleGetData("/transaction/count", {})  
        setNoOfTransaction(request?.data?.data?.stat)
    }

    const GetProfitInformation =async()=>{
        const request = await handleGetData("/transaction/settlement", {})  
        setProfit(request?.data?.data?.stat)
    }

    const GetUserInformation =async()=>{
        const request = await handleGetData("/transaction/user/count", {})  
        setUsers(request?.data?.data?.stat)
    }

    React.useMemo(() => { 
        GetWalletInformation() 
        GetTransactionInformation()
        GetNoOfTransactionInformation()
        GetProfitInformation()
        GetUserInformation() 
    }, [])

    return (
        <div className=' w-full font-Inter-Medium pb-20 text-white  ' >
            <p className=' text-[20px] ' >Dashboard</p>
            <div className=' bg-[#252626] h-[83px] mt-7 w-full border border-[#444444] grid grid-cols-5  ' >
                <div className='w-full h-full flex flex-col justify-center border-r border-[#444444] pl-5 ' >
                    <p className=' text-[11px] text-[#C0C0C0] ' >Total Wallet balance</p>
                    <p className=' mt-[2px] text-[20px] ' >{cashFormat(walletBalance)}</p>
                </div>
                <div className='w-full h-full flex flex-col justify-center border-r border-[#444444] pl-5 ' >
                    <p className=' text-[11px] text-[#C0C0C0] ' >Transaction volume</p>
                    <p className=' mt-[2px] text-[20px] ' >{cashFormat(transaction)}</p>
                </div>
                <div className='w-full h-full flex flex-col justify-center border-r border-[#444444] pl-5 ' >
                    <p className=' text-[11px] text-[#C0C0C0] ' >No. of Transactions</p>
                    <p className=' mt-[2px] text-[20px] ' >{cashFormat(noOfTransaction).slice(1, -3)}</p>
                </div>
                <div className='w-full h-full flex flex-col justify-center border-r border-[#444444] pl-5 ' >
                    <p className=' text-[11px] text-[#C0C0C0] ' >Profit</p>
                    <p className=' mt-[2px] text-[20px] ' >{cashFormat(profit)}</p>
                </div>
                <div className='w-full h-full flex flex-col justify-center pl-5 ' >
                    <p className=' text-[11px] text-[#C0C0C0] ' >Cashbacks</p>
                    <p className=' mt-[2px] text-[20px] ' >{cashFormat(0)}</p>
                </div>
            </div>
            <div className=' bg-[#252626] h-[83px] w-full border border-[#444444] grid grid-cols-4 mt-5  ' >
                <div className='w-full h-full flex flex-col justify-center border-r border-[#444444] pl-5 ' >
                    <p className=' text-[11px] text-[#C0C0C0] ' >Total User</p>
                    <p className=' mt-[2px] text-[20px] ' >{cashFormat(users).slice(1, -3)}</p>
                </div>
                <div className='w-full h-full flex flex-col justify-center border-r border-[#444444] pl-5 ' >
                    <p className=' text-[11px] text-[#C0C0C0] ' >Verified users (Phone)</p>
                    <p className=' mt-[2px] text-[20px] ' >438</p>
                </div>
                <div className='w-full h-full flex flex-col justify-center border-r border-[#444444] pl-5 ' >
                    <p className=' text-[11px] text-[#C0C0C0] ' >Verified users (Bvn)</p>
                    <p className=' mt-[2px] text-[20px] ' >158</p>
                </div>
                <div className='w-full h-full flex flex-col justify-center pl-5 ' >
                    <p className=' text-[11px] text-[#C0C0C0] ' >Active customers</p>
                    <p className=' mt-[2px] text-[20px] ' >-</p>
                </div> 
            </div>
            <GraphComponent />
            <Numbers />
        </div>
    )
} 