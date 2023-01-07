import React from 'react'
import Icon from "../../assets/images/DropDownIcon.svg"
import { IUser, UserContext } from '../../context/userContext';

export default function Index(props: any) {
    
    const [show, setShow] = React.useState(false)
    const [initial, setIntial] = React.useState(props.initial)
    const userContext: IUser = React.useContext(UserContext); 

    const TransactionType =(item: string)=> { 
        if(item === "ALL") { 
            const obj: any = {...userContext.filterTransaction}
            delete obj.purpose
            userContext.setFilterTransaction(obj) 
        } else { 
            userContext.setFilterTransaction({...userContext.filterTransaction, 
                purpose: item
            })
        }
        setIntial(item)
        setShow(false)  
    } 


    const Verification =(item: string)=> { 
        
        const obj: any = {...userContext.filterUser}
        delete obj["kyc.bvn"]
        delete obj["kyc.phone"]
        userContext.setFilterUser(obj) 
        if(item === "All") { 
            userContext.setFilterUser({...userContext.filterUser, 
                "kyc.bvn": "true",
                "kyc.phone": "true"
            })
        } else if(item === "BVN") { 
            delete obj["kyc.bvn"]
            delete obj["kyc.phone"] 
            userContext.setFilterUser({...obj, 
                "kyc.bvn": "true"
            })
        } else if(item === "PHONE") {  
            delete obj["kyc.bvn"]
            delete obj["kyc.phone"] 
            userContext.setFilterUser({...obj, 
                "kyc.phone": "true"
            })
        } 
        setIntial(item)
        setShow(false)  
    }
    
    const UserStatus =(item: string)=> {  
        const obj: any = {...userContext.filterUser} 
        if(item === "All") {  
            delete obj["suspend"] 
            userContext.setFilterUser(obj)  
        } else if(item === "Active") {  
            userContext.setFilterUser({...obj, 
                "suspend": "true"
            })
        } else if(item === "Inactive") {   
            userContext.setFilterUser({...obj, 
                "suspend": "false"
            })
        } 
        setIntial(item)
        setShow(false)  
    }

    const ClickHandler =(item: string)=> { 
        if(props.name === "transaction" && props.placeholder === "Type"){
            TransactionType(item)
        } else if (props.name === "user"){
            if(props.placeholder === "Verification"){
                Verification(item)
            } else {
                UserStatus(item)
            }
        }
    }

    return (
        <div className=' relative w-fit ' > 
            <div onClick={()=> setShow((prev) => !prev)} className=' h-[44px] relative cursor-pointer px-4 flex font-Inter-Medium items-center border border-[#444] ' >
                <p className=' text-[#808080] text-[13px] mr-4 ' >{props.placeholder}: <span className=' text-white ' >{initial}</span></p>
                <img src={Icon} alt="icon" /> 
            </div>

            {show && (
                <div className=' w-full z-20 absolute top-[50px] flex flex-col px-4 py-2 it left-0 bg-[#252626]  ' >
                    {props.option.map((item: any)=> {
                        return( 
                            <button onClick={()=> ClickHandler(item)} key={item} className=' text-white text-[13px] my-2 cursor-pointer ' >{item}</button>
                        )
                    })} 
                </div>
            )}
            {show && (
                <div  onClick={()=> setShow((prev) => !prev)} className=' fixed inset-0 bg-black bg-opacity-5 ' /> 
            )}
        </div>
    )
} 