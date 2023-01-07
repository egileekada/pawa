import React from 'react'
import Search from "../../assets/images/search.svg"
import { IUser, UserContext } from '../../context/userContext';

export default function Index(props: any) { 
    
    const userContext: IUser = React.useContext(UserContext); 

    const changeHandler =(event: any) => {
        if(props.user){
            if(event.target.value === "") {
                const obj: any = {...userContext.filterUser}
                delete obj.search
                userContext.setFilterUser(obj) 
            } else { 
                userContext.setFilterUser({...userContext.filterUser, 
                    search: event.target.value
                })  
            }
        } else {  
            userContext.setFilterTransaction({...userContext.filterTransaction, 
                search: event.target.value
            })  
        }
    } 

    return (
        <div className=' max-w-[400px] relative h-[45px]' >
            <input onChange={(e)=> changeHandler(e)} placeholder={props.name} className='border w-full text-[13px] pl-9 font-Inter-Regular outline-none border-[#444444] bg-[#252626] h-[45px] px-3 ' />
            <div className=' text-[13px] font-Inter-Regular text-[#98AD17] absolute flex items-center left-2 top-0 bottom-0  ' >
                <img src={Search} className=" w-5 " />
            </div> 
        </div>
    )
} 