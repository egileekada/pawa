import React from 'react'

export default function Index() {
    return (
        <div className=' w-full bg-[#252626] text-[13px] border border-[#444444] ' > 
            <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='' >Amount</p>  
                <p className=' text-[#fff] ml-auto' >₦0</p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' > 
                    <p className=' text-[#fff]' >₦200.00</p> 
                </div>
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' > 
                    <button className= " text-[#98AD17] ">Change</button>
                </div>
            </div>  
        </div>
    )
} 