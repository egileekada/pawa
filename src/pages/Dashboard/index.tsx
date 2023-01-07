import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useGetDataCallback } from '../../action/useAction';
import Navbar from '../../components/Navbar'
import { IUser, UserContext } from '../../context/userContext';
import { useToast } from '@chakra-ui/react';

export default function Index() {

    const { handleGetData } = useGetDataCallback();  
    const userContext: IUser = React.useContext(UserContext); 
    const navigate = useNavigate()
    const toast = useToast()
 
    const GetCashBackInformation =async()=>{
        const request = await handleGetData("/settings",{})   
        userContext.setCashBackData(request.data.data) 
    } 

    const GetInformation =async()=>{
        const request = await handleGetData("/user?_id="+localStorage.getItem("id"),{}) 
        if(request?.data?.data?.message === "jwt malformed" || request?.data?.message === "Session expired. Please logout and sign in again"){ 
            toast({
                title: request?.data?.message,
                position: "bottom",
                status: "error",
                isClosable: true,
            })
            navigate("/")
        }  
        userContext.setUserInformation(request.data.data.response[0])
    }

    React.useMemo(() => { 
        if(!localStorage.getItem("token")){
            navigate("/")
        }
        GetInformation() 
        GetCashBackInformation()
    }, [])

    return (
        <div className=' w-full h-screen bg-[#1b1c1d] '>
            <Navbar />
            <div className=' w-full flex justify-center px-12 pt-[72px] bg-[#1b1c1d]' >
                <div className=' xl:w-[1280px] w-full ' >
                    <Outlet />
                </div>
            </div>
        </div>
    )
} 