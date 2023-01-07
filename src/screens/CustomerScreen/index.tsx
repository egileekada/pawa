import { TableContainer, Table, Thead, Tr, Td, Tbody } from '@chakra-ui/react';
import React from 'react'
import SearchBar from '../../components/SearchBar';
import SortSelector from '../../components/SortSelector'
import CustomerTable from '../../components/CustomerTable';
import { useGetDataCallback } from '../../action/useAction';
import { cashFormat } from '../../utils/cashFormat';
import DateSelector from '../../components/DateSelector';

export default function Index() {

    const [data, setData] = React.useState("") 
    const [users, setUsers] = React.useState("")
    const { handleGetData } = useGetDataCallback();

    const GetUserInformation =async()=>{
        const request = await handleGetData("/transaction/user/count", {})  
        setUsers(request?.data?.data?.stat)
    }

    React.useEffect(() => {
        GetUserInformation()
    }, [])
    

    return (
        <div className=' w-full font-Inter-Medium text-white  ' >
            <p className=' text-[20px] ' >Customers ({cashFormat(users).slice(1, -3)})</p>
            <div className=' mt-8 flex items-center ' >
                {/* <div className=' w-fit mr-4 ' > 
                    <SortSelector name="transaction" placeholder="Wallet balance" initial="High - Low" option={["High - Low", "Low - High"]} return={setData} />
                </div> */}
                <div className=' w-fit mr-4 ' > 
                    <DateSelector name="user" placeholder="Start Date" />
                </div>
                <div className=' w-fit mr-4 ' > 
                    <DateSelector name="user" placeholder="End Date" />
                </div> 
                {/* <div className=' w-fit mr-4 ' > 
                    <SortSelector placeholder="Registered Date" initial="Oct 9, 22" option={["Oct 9, 22", "Oct 9, 23", "Oct 9, 24"]} return={setData} />
                </div> */}
                <div className=' w-fit mr-4 ' > 
                    <SortSelector name="user" placeholder="Verification" initial="None" option={["None", "All", "BVN", "PHONE"]} return={setData} />
                </div>
                <div className=' w-fit mr-4 ' > 
                    <SortSelector  name="user" placeholder="Status" initial="All" option={["All", "Active", "Inactive"]} return={setData} />
                </div>
                <div className=' w-fit '  >
                    <SearchBar user={true} name='Search by name, phone number or email' />
                </div>
            </div> 
            <CustomerTable />
        </div>
    )
}  