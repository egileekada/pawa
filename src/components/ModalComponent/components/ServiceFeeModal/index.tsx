import { Input, useToast } from '@chakra-ui/react'
import React from 'react' 
import Close from "../../../../assets/images/Close.svg"
import { useUpdateSettingsCallback } from '../../../../action/useAction'
import { IUser, UserContext } from '../../../../context/userContext'

export default function Index(props: any) { 

    const userContext: IUser = React.useContext(UserContext);
    const [loading, setLoading] = React.useState(false)
    const [editData, setEditData] = React.useState("")
    const { handleUpdateSettings } = useUpdateSettingsCallback();
    const toast = useToast() 

    React.useEffect(() => {
        props.size("md")
    }, []) 

    // Send Money Service Fee 
    
    const clickHandler =async()=> { 
        let request: any
        setLoading(true)  

        if(props.title === "Send Money Service Fee") { 
            request = await handleUpdateSettings(JSON.stringify({
                "bankTransferCharge": Number(editData)
            }))
        }
         
        if (request.status === 200) {  
            userContext.setCashBackData(request.data.data) 
            toast({
                title: "Settings Updated Successfully",
                position: "bottom",
                status: "success",
                isClosable: true,
            })
        } else {
            toast({
                title: request.message,
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
                <p className=' text-[15px] text-[#C0C0C0] ' >{props.title}</p>
                <button onClick={()=> props.close()} >
                    <img src={Close} alt="close" />
                </button>
            </div> 
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex px-6 justify-between items-center ' >
                <p className=' ' >Enter Amount</p>
                <div className=' w-[270px] ' > 
                    <Input type="number" onChange={(e)=> setEditData(e.target.value)} placeholder='Amount' fontSize="13px" height="45px" borderRadius="none" borderColor="#444" />
                </div>
            </div>
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-end px-6  items-center ' >
                <button disabled={!editData || loading ? true : false} onClick={()=> clickHandler()} className=' h-[45px] px-4 bg-[#98AD17] tetxt-[#fff] ' >
                    {loading ?
                        "Loading...":
                        "Save Changes"
                    }
                    {/* Save Changes */}
                </button>
            </div>
        </div>
    )
} 