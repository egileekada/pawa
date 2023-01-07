import { Input } from '@chakra-ui/react'
import React from 'react'
import Close from "../../../../../assets/images/Close.svg"

export default function Index(props: any) {

    React.useEffect(() => {
        props.size("md")
    }, [])
    
    return (
        <div className=' w-full bg-[#252626] border text-[13px] text-[#fff]  border-b-0 border-[#444] font-Inter-Medium ' >
            <div className=' w-full h-[62px] border-b border-[#444] flex justify-between px-6 items-center ' >
                <p className=' text-[15px] text-[#C0C0C0] ' >Redeem NairaPin</p>
                <button onClick={()=> props.close()} >
                    <img src={Close} alt="close" />
                </button>
            </div> 
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex px-6 justify-between items-center ' >
                <p className=' ' >Enter NairaPin</p>
                <div className=' w-[270px] ' > 
                    <Input type="text" placeholder='Pin' fontSize="13px" height="45px" borderRadius="none" borderColor="#444" />
                </div>
            </div>
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-end px-6  items-center ' >
                <button className=' h-[45px] px-4 bg-[#98AD17] tetxt-[#fff] ' >
                    Continue
                </button>
            </div>
        </div>
    )
}
