import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import { IUser, UserContext } from '../../context/userContext';

export default function Index(props: any) { 
 
    const userContext: IUser = React.useContext(UserContext); 

    const TransactionDateFilter =(event: any)=> { 
        if(props.placeholder === "Start Date"){  
            userContext.setFilterTransaction({...userContext.filterTransaction, 
                startDate: event
            })
        } else { 
            userContext.setFilterTransaction({...userContext.filterTransaction, 
                endDate: event
            })  
        } 
    }

    const UserDateFilter =(event: any)=> { 
        if(props.placeholder === "Start Date"){  
            userContext.setFilterUser({...userContext.filterUser, 
                startDate: event
            })
        } else { 
            userContext.setFilterUser({...userContext.filterUser, 
                endDate: event
            })  
        } 
    }

    const changeHandler =(event: any)=> { 
        if(props.name === "transacrion"){
            TransactionDateFilter(event)
        } else {
            UserDateFilter(event)
        }
    }
    
    return ( 
        <div className=' relative w-fit ' > 
            <div  className=' h-[44px] relative outline-none cursor-pointer px-4 flex font-Inter-Medium items-center border border-[#444] ' >
                <p className=' text-[#808080] text-[13px] mr-4 ' >{props.placeholder}: </p> 
                <div className=' w-[110px] ' > 
                    <Input padding="0px" onChange={(e)=> changeHandler(e.target.value)} focusBorderColor='transparent' type="date" fontSize="sm" borderWidth="0px" />
                </div> 
            </div> 
        </div>
    )
}
