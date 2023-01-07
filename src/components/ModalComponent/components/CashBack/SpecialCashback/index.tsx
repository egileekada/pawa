import { Input, Select, useToast } from '@chakra-ui/react'
import React from 'react'
import { useUpdateSettingsCallback } from '../../../../../action/useAction';
import Close from "../../../../../assets/images/Close.svg"
import { IUser, UserContext } from '../../../../../context/userContext';

export default function Index(props: any) {

    const userContext: IUser = React.useContext(UserContext);
    const [loading, setLoading] = React.useState(false)
    const [editData, setEditData] = React.useState("" as any)
    const { handleUpdateSettings } = useUpdateSettingsCallback();
    const toast = useToast() 

    React.useEffect(() => {
        props.size("xl")
    }, [])
    
    const clickHandler =async()=> { 
    
            setLoading(true)  
            const request: any = await handleUpdateSettings(JSON.stringify(editData))
             
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
                <p className=' text-[15px] text-[#C0C0C0] ' >Special Cashback settings</p>
                <button onClick={()=> props.close()} >
                    <img src={Close} alt="close" />
                </button>
            </div>
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-between px-6  items-center ' >
                <p className=' ' >Category</p>
                <div className=' ' > 
                    <Select onChange={(e)=> setEditData({...editData, cashbackCategory : e.target.value})} width="215px" fontSize="13px" height="45px" borderRadius="none" borderColor="#444"  > 
                        <option className='text-black' >{userContext.cashBackData.cashbackCategory}</option>
                        {userContext.cashBackData.cashbackCategory !== "ALL" && 
                            <option className='text-black' >ALL</option>
                        }
                        {userContext.cashBackData.cashbackCategory !== "AIRTIME" && 
                            <option className='text-black' >AIRTIME</option>
                        }
                        {userContext.cashBackData.cashbackCategory !== "DATA" && 
                            <option className='text-black' >DATA</option>
                        }
                        {userContext.cashBackData.cashbackCategory !== "CABLE" && 
                            <option className='text-black' >CABLE</option>
                        }
                        {userContext.cashBackData.cashbackCategory !== "ELECTRICITY" && 
                            <option className='text-black' >ELECTRICITY</option>
                        }   
                    </Select>
                </div>
            </div>
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-between px-6  items-center ' >
                <p className=' ' >Cashback amount to be given out</p>
                <div className=' ' > 
                    <Input onChange={(e)=> setEditData({...editData, cashbackAmount : e.target.value})} type="number" width="215px" placeholder={userContext.cashBackData.cashbackAmount} fontSize="13px" height="45px" borderRadius="none" borderColor="#444" />
                </div>
            </div>
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-between px-6  items-center ' >
                <p className=' ' >Cashback amount to be given out</p>
                <div className=' w-[215px] flex ' > 
                    <Input onChange={(e)=> setEditData({...editData, cashbackLimit : e.target.value})} type="number" placeholder={userContext.cashBackData.cashbackLimit} fontSize="13px" height="45px" borderRadius="none" borderColor="#444" />
                    <button className=' h-[45px] px-3 bg-[#444444] tetxt-[#C0C0C0] ' >
                        Users
                    </button>
                </div>
            </div>
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-between px-6  items-center ' >
                <p className=' ' >Paticipants much transact atleast</p>
                <div className=' ' > 
                    <Input onChange={(e)=> setEditData({...editData, cashbackMinSpend : e.target.value})} type="number" placeholder={userContext.cashBackData.cashbackMinSpend} width="215px" fontSize="13px" height="45px" borderRadius="none" borderColor="#444" />
                </div>
            </div>
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-between px-6  items-center ' >
                <p className=' ' >Cashback date and time</p>
                <div className=' ' > 
                    <Input onChange={(e)=> setEditData({...editData, cashbackDay : e.target.value})} width="215px" type="datetime-local" fontSize="13px" height="45px" borderRadius="none" borderColor="#444" />
                </div>
            </div>
            <div className=' w-full h-[62px] border-b outline-none border-[#444] flex justify-end px-6  items-center ' >
                <button disabled={!editData || loading ? true : false} onClick={()=> clickHandler()} className=' h-[45px] px-4 bg-[#98AD17] tetxt-[#fff] ' >
                    {loading ?
                        "Loading...":
                        "Save Changes"
                    }
                </button>
            </div>
        </div>
    )
}  
