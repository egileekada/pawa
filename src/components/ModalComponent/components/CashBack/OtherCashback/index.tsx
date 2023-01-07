import { Input, useToast } from '@chakra-ui/react'
import React from 'react'
import { useUpdateSettingsCallback } from '../../../../../action/useAction';
import Close from "../../../../../assets/images/Close.svg"
import { Airtime_CashBack } from '../../../../../config/DataBank.ts';
import { IUser, UserContext } from '../../../../../context/userContext';

export default function OtherCashback(props: any) { 

    const [editData, setEditData] = React.useState([] as any)
    const [loading, setLoading] = React.useState(false)
    const userContext: IUser = React.useContext(UserContext); 
    const { handleUpdateSettings } = useUpdateSettingsCallback();
    const dataPayload = {} as any
    const toast = useToast()

    React.useEffect(() => {
        props.size("sm")
    }, [])  

    const changeHandler =(event: any, index: any, item: any)=> { 
        const newArray = [...editData]
        let objIndex
        objIndex = newArray.findIndex((obj => obj.id === index)); 
        
        if(objIndex === -1){ 
            newArray.push({
                id: index,
                name: item,
                data: event
            })
        } else {   
            newArray[objIndex].id = index 
            newArray[objIndex].name = item 
            newArray[objIndex].data = event  
        }  
        setEditData(newArray)
    }   
     
    const clickHandler =async()=> {   

        setLoading(true)
        await editData.map((item: any) => {
            if(item.data) { 
                dataPayload[item.name] = Number(item.data)
            }
        })  

        console.log(dataPayload);
        
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
            {props.input.map((item: any, index: any)=> {
                return( 
                    <div key={index} className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-between px-6  items-center ' >
                        <p className=' ' >{item.name}</p>
                        <div className=' relative ' >  
                            <Input type="number" placeholder={props.data[index]} onChange={(e)=> changeHandler(e.target.value, index, item.payload)} width="84px" fontSize="13px" height="45px" borderRadius="none" borderColor="#444" />
                        </div>
                    </div>
                )
            })}
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-end px-6  items-center ' >
                <button disabled={editData.length < 1 || loading ? true : false} onClick={()=> clickHandler()} className=' h-[45px] px-4 bg-[#98AD17] tetxt-[#fff] ' >
                    {loading ?
                        "Loading...":
                        "Save Changes"
                    }
                </button>
            </div>
        </div>
    )
} 