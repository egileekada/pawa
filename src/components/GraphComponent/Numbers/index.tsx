import { Checkbox, Select } from '@chakra-ui/react';
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import CheckboxComponent from '../../CheckboxComponent';
import SortSelector from '../../SortSelector';

export default function Index() { 

    const data = [
        {
            date: 'Oct 5th 2022', 
            trasactions: 55000, 
            user : 34550
        },
        {
            date: 'Oct 6th 2022', 
            trasactions: 45000,  
            user : 4550
        },
        {
            date: 'Oct 7th 2022', 
            trasactions: 20000,  
            user : 550
        },
        {
            date: 'Oct 8th 2022', 
            trasactions: 80000,  
            user : 150
        },
        {
            date: 'Oct 9th 2022', 
            trasactions: 65000,  
            user : 350
        },
    ]; 

    const [filter, setFilter] = React.useState({
        transaction: true,
        profit: true,
        cashback: true,
        loss: true
    })

    function CustomTooltip({ payload , label, active }: any) {
        if (active) {
            return (
                <div className=" w-[180px] border border-[#444] text-[12px] p-[10px] font-Inter-SemiBold bg-[#2C2C2C] ">
                <p className="">{`${label}`}</p> 
                <p className={filter.transaction ? ' text-[#EBA149] ': "hidden"} >Trasactions : <span className=' text-[#C0C0C0] mt-4 ' >₦{payload[0]?.value}</span></p> 
                <p className={filter.cashback ? ' text-[#E187D0] ': "hidden"} >Users: <span className=' text-[#C0C0C0] ' >{payload[1]?.value}</span></p> 
                {/* <p className="intro">{getIntroOfPage(label)}</p> */} 
                </div>
            );
        }
    
        return null;
    } 

    return (
        <div className=' w-fit bg-[#252626] mt-12 border font-Inter-Medium border-[#444] p-[24px] ' > 
            <div className=' flex items-center font-Inter-Medium outline-none  justify-between ' > 
                <p className='  text-[20px] text-white ' >Numbers</p> 
                <Select width="170px" borderRadius="0px" borderColor="#444" fontSize="sm" >
                    <option>Last week</option>
                </Select>
            </div>
            <div className=' my-8 flex items-center text-[11px] text-[#C0C0C0] ' >
                <div className=' flex items-center mr-6 ' >
                    <CheckboxComponent filter={filter} setFilter={setFilter} name="transaction" active={filter.transaction} color="#EBA149" />
                    <p className=' ml-2 ' >Transactions</p>
                </div> 
                <div className=' flex items-center mr-6 ' >
                    <CheckboxComponent filter={filter} setFilter={setFilter} name="cashback" active={filter.cashback} color="#E187D0" />
                    <p className=' ml-2 ' >Users</p>
                </div> 
            </div>
            <LineChart width={730} height={440} data={data} className=" text-[11px]  font-Inter-Medium "  margin={{ top: 5, bottom: 5 }}>
                {filter.transaction && (
                    <Line type="monotone" dataKey="trasactions" stroke="#EBA149" />
                )} 
                {filter.cashback && (
                    <Line type="monotone" dataKey="user" stroke="#E187D0" />
                )} 
                <CartesianGrid stroke="#444444" strokeWidth="1px"  />
                <XAxis dataKey="date"  />
                <YAxis />
                <Tooltip content={<CustomTooltip />}/>
            </LineChart>
        </div>
    )
} 