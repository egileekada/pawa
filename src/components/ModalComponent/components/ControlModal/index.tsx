import { Switch, useToast } from '@chakra-ui/react'
import React from 'react' 
import Close from "../../../../assets/images/Close.svg"
import { useUpdateSettingsCallback } from '../../../../action/useAction';
import { IUser, UserContext } from '../../../../context/userContext';

export default function Index(props: any) { 

    const [checked, setChecked] = React.useState(false) 
    const userContext: IUser = React.useContext(UserContext);
    const [loading, setLoading] = React.useState(false) 
    const { handleUpdateSettings } = useUpdateSettingsCallback();
    const toast = useToast()  
    const dataPayload = {} as any

    React.useEffect(() => {
        props.size("md")
        setChecked(props.data)
    }, [props]) 

    
    const clickHandler =async()=> { 
        
        setLoading(true)   
        dataPayload[props.index] = checked 
        const request: any = await handleUpdateSettings(JSON.stringify(dataPayload)) 
         
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
                title: "Error Occured while Updating Settings",
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
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-between px-6  items-center ' >
                <p className=' ' >
                    {props.title === "All Control" ?
                        "Control":"Go Live"
                    } 
                </p> 
                <Switch isChecked={checked} onChange={(e)=> setChecked(e.target.checked)} />
            </div>  
            <div className=' w-full py-3 border-b outline-none border-[#444] flex flex-col px-6  ' >
                <p className=' ' >Message</p>  
                <div className=' border border-[#444] p-[8px] mt-1 ' >
                    <p>Transactions are under maintainance, please check back soon</p>
                </div>
            </div> 
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-end px-6  items-center ' >
                <button disabled={loading ? true : false} onClick={()=> clickHandler()} className=' h-[45px] px-4 bg-[#98AD17] tetxt-[#fff] ' >
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