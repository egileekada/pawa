import React from 'react'
import ModalComponent from '../../ModalComponent'

export default function Index() {

    const [open, setOpen] = React.useState(false)  
    const [modalName, setModalName] = React.useState("") 

    const clickHandler =(name: any)=> {
        setModalName(name) 
        setOpen(true)
    }

    return ( 
        <div className=' w-full bg-[#252626] text-[13px] border border-[#444444] ' >
            <button onClick={()=> clickHandler("CreateNairaPin")} className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='' >Create NairaPin</p>  
            </button>
            <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='' >Manage NairaPin</p> 
                <p className='ml-auto mr-4' >234 active Pin</p> 
                <button onClick={()=> clickHandler("ManageNairaPin")} className= " text-[#98AD17] ">Veiw</button>
            </div>
            <button onClick={()=> clickHandler("RedeemNairaPin")} className=' w-full px-4 h-[58px] flex items-center' >
                <p className='' >Redeem NairaPin</p>  
            </button> 
           <ModalComponent name={modalName} open={open} close={setOpen} />
        </div>
    )
} 