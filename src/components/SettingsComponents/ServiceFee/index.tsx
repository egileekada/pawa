import React from 'react'
import ModalComponent from '../../ModalComponent'
import { cashFormat } from '../../../utils/cashFormat'

export default function Index(props: any) {

    const [open, setOpen] = React.useState(false)  
    const [modalName, setModalName] = React.useState("")

    const clickHandler =(name: any)=> {
        setModalName(name) 
        setOpen(true)
    } 

    return (
        <div className=' w-full bg-[#252626] text-[13px] border border-[#444444] ' >
            <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='' >Cable TV Fee</p>  <p className=' text-[#fff] ml-auto' >₦0</p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' > 
                    <button onClick={()=> clickHandler("Cable TV Service Fee")} className= " text-[#98AD17] ">Change</button>
                </div>
            </div>
            <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='' >Electricity Fee</p>  
                <p className=' text-[#fff] ml-auto' >₦0</p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' > 
                    <button onClick={()=> clickHandler("Electricity Service Fee")} className= " text-[#98AD17] ">Change</button>
                </div>
            </div> 
            <div className=' w-full px-4 h-[58px] flex items-center' >
                <p className='' >Send Money</p>  
                <p className=' text-[#fff] ml-auto' >{cashFormat(props?.data?.bankTransferCharge)}</p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' > 
                    <button onClick={()=> clickHandler("Send Money Service Fee")} className= " text-[#98AD17] ">Change</button>
                </div>
            </div> 
            <ModalComponent name={modalName} open={open} close={setOpen} />
        </div>
    )
} 