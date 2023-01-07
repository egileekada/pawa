import { TableContainer, Table, Thead, Tr, Td, Tbody } from '@chakra-ui/react';
import React from 'react' 
import { useGetDataCallback } from '../../action/useAction';
import DateSelector from '../../components/DateSelector';
import SearchBar from '../../components/SearchBar';
import SortSelector from '../../components/SortSelector' 
import TransactionTable from '../../components/TransactionTable';
import { cashFormat } from '../../utils/cashFormat';

export default function Index(props: any) {

    const [transaction, setTransaction] = React.useState("")
    const [noOfTransaction, setNoOfTransaction] = React.useState("")
    const [data, setData] = React.useState("")
    const { handleGetData } = useGetDataCallback(); 

    const GetTransactionInformation =async()=>{
        const request = await handleGetData("/transaction/volume", {})  
        setTransaction(request?.data?.data?.stat)
    }

    const GetNoOfTransactionInformation =async()=>{
        const request = await handleGetData("/transaction/count", {})  
        setNoOfTransaction(request?.data?.data?.stat)
    }

    React.useEffect(() => {
        GetTransactionInformation()
        GetNoOfTransactionInformation()
    }, []) 

    return (
        <div className=' w-full font-Inter-Medium text-white  ' >
            <p className=' text-[20px] ' >Transactions {!props.detail && (<span>{cashFormat(noOfTransaction).slice(1, -3)}</span>)}</p>
            <div className=' my-8 flex items-center ' >
                <div className=' w-fit mr-4 ' > 
                    <DateSelector name="transaction" placeholder="Start Date" />
                </div>
                <div className=' w-fit mr-4 ' > 
                    <DateSelector name="transaction" placeholder="End Date" />
                </div> 
                <div className=' w-fit mr-4 ' > 
                    <SortSelector name="transaction" placeholder="Type" initial="ALL" option={["ALL", "WALLET", "DATA", "NAIRAPIN", "AIRTIME", "CABLE", "POWER", "TRANSFER"]} />
                </div>
                <div className=' w-fit mr-4 ' > 
                    <SortSelector name="transaction" placeholder="Status" initial="Successful" option={["Successful", "Rejected"]} />
                </div>
                <div className='  '  >
                    <SearchBar name='Search by transation ID' />
                </div>
            </div>
            {!props.detail && ( 
                <div className=' mt-12 mb-8 flex items-center ' >
                    <div className=' h-[20px] relative pr-4 flex font-Inter-Medium items-center border-r border-[#444] ' >
                        <p className=' text-[#808080] text-[15px]' >Transactions <span className=' text-white ml-2 ' >{cashFormat(noOfTransaction).slice(1, -3)}</span></p>
                    </div>
                    <div className=' h-[20px] relative pl-4  flex font-Inter-Medium items-center ' >
                        <p className=' text-[#808080] text-[15px]' >Transaction Amount <span className=' text-white ml-2 ' >{cashFormat(transaction)}</span></p>
                    </div>
                </div>
            )}            
            <TransactionTable detail={props.detail} />
        </div>
    )
}  