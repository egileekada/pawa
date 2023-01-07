import { Select } from '@chakra-ui/react'
import React from 'react'
import Close from "../../../../../assets/images/Close.svg"

export default function Index(props: any) { 

    React.useEffect(() => {
        props.size("xl")
    }, [])
    
    return (
        <div className=' w-full bg-[#252626] border text-[13px] text-[#fff]  border-b-0 border-[#444] font-Inter-Medium ' >
            <div className=' w-full h-[62px] border-b border-[#444] flex justify-between px-6 items-center ' >
                <p className=' text-[15px] text-[#C0C0C0] ' >Manage NairaPin</p>
                <button onClick={()=> props.close()} >
                    <img src={Close} alt="close" />
                </button>
            </div>
            <div className=' w-full max-h-[80vh] overflow-y-auto ' > 
                <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-between px-6  items-center ' >
                    <div className=' flex items-center ' >
                        <p className=' ' >Category</p>
                        <div className=' border-l border-[#444] ml-4 pl-4 ' >
                            <p className=' ' >₦299.00</p>
                        </div>
                    </div>
                    <div className=' ' >  
                        <button className=' text-[#98AD17] ' >Copy PIN</button>
                    </div>
                </div>  
                <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-between px-6  items-center ' >
                    <div className=' flex items-center ' >
                        <p className=' ' >Category</p>
                        <div className=' border-l border-[#444] ml-4 pl-4 ' >
                            <p className=' ' >₦299.00</p>
                        </div>
                    </div>
                    <div className=' ' >  
                        <button className=' text-[#98AD17] ' >Copy PIN</button>
                    </div>
                </div>
                <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-between px-6  items-center ' >
                    <div className=' flex items-center ' >
                        <p className=' ' >Category</p>
                        <div className=' border-l border-[#444] ml-4 pl-4 ' >
                            <p className=' ' >₦299.00</p>
                        </div>
                    </div>
                    <div className=' ' >  
                        <button className=' text-[#98AD17] ' >Copy PIN</button>
                    </div>
                </div>
            </div> 
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-end px-6  items-center ' >
                <button className=' h-[45px] px-4 bg-[#98AD17] tetxt-[#fff] ' >
                    Copy All
                </button>
            </div>
        </div>
    )
} 