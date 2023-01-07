import { Input, Switch, useToast } from '@chakra-ui/react'
import React from 'react' 
import Close from "../../../../assets/images/Close.svg"
import { useUpdateUserInfoCallback } from '../../../../action/useAction' 

export default function Index(props: any) { 

    const [loading, setLoading] = React.useState(false)
    const [amount, setAmount] = React.useState("")
    const toast = useToast()
    const { handleUpdateUserInfo } = useUpdateUserInfoCallback() 

    React.useEffect(() => {
        props.size("md")
    }, [props.size]) 

    const clickHandler =async(item: string, index: string)=>{ 
        setLoading(true)
        let dataPayload : any
        if(props.name ==="Credit User Wallet"){  
            dataPayload = {credit: item}
        } else {
            dataPayload = {debit: item}
        } 

        const request: any = await handleUpdateUserInfo(JSON.stringify(dataPayload), index)
        
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
        setLoading(false) 
        props.close()
    }

    return (
        <div className=' w-full bg-[#252626] border text-[13px] text-[#fff]  border-b-0 border-[#444] font-Inter-Medium ' >
            <div className=' w-full h-[62px] border-b border-[#444] flex justify-between px-6 items-center ' >
                <p className=' text-[15px] text-[#C0C0C0] ' >{props.name}</p>
                <button onClick={()=> props.close()} >
                    <img src={Close} alt="close" />
                </button>
            </div> 
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex px-6 justify-between items-center ' >
                <p className=' ' >Enter amount</p>
                <div className=' w-[270px] ' > 
                    <Input onChange={(e)=> setAmount(e.target.value)} type="number" placeholder={props.name ==="Credit User Wallet" ? "₦0": "- ₦0"} fontSize="13px" height="45px" borderRadius="none" borderColor="#444" />
                </div>
            </div> 
            <div className=' w-full h-[65px] border-b outline-none border-[#444] flex justify-end px-6  items-center ' >
                <button onClick={()=> clickHandler(amount ,localStorage.getItem("userId")+"")} disabled={loading} className=' h-[45px] w-[150px] px-4 bg-[#98AD17] tetxt-[#fff] ' >
                    {loading ? 
                        "Loading...":
                        "Save Changes"
                    }
                </button>
            </div>
        </div>
    )
} 