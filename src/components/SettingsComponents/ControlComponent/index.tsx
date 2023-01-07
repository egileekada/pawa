import React from 'react' 
import ModalComponent from '../../ModalComponent'
import { useToast } from '@chakra-ui/react'

export default function Index(props: any) {

    const message = "Transactions are under maintainance, please check back soon"

    const [open, setOpen] = React.useState(false)  
    const [modalName, setModalName] = React.useState("")
    const [modalData, setModalData] = React.useState(false)
    const [modalIndex, setModalIndex] = React.useState("")
    const toast = useToast()  

    const clickHandler =(name: string, data: boolean, index: string)=> {
        setModalName(name) 
        setModalIndex(index)
        setModalData(data)
        if(index === "") {
            toast({
                title: "Settings Not Avaliable",
                position: "bottom",
                status: "error",
                isClosable: true,
            })
        } else {
            setOpen(true)
        }
    } 

    console.log(props.data);
    

    return (
        <div className=' w-full bg-[#252626] text-[13px] border border-[#444444] ' >
            <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='mr-8' >All Controls</p>  
                <p className=' text-[#C0C0C0] ml-auto' >Status: <span className=' text-white ' >ON</span></p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                    <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                </div>
                <button onClick={()=> clickHandler("All Control", false, "")} className= " text-[#98AD17] ">Change</button>
            </div> 
            <div className=' w-full px-4 border-b border-[#444444] h-[58px] flex items-center' >
                <p className='mr-8' >Sign Up Control</p>  
                <p className=' text-[#C0C0C0] ml-auto' >Status: <span className={!props.data?.signupToggle ? ' text-[#D8453B]':' text-white '} >{!props.data?.signupToggle ? "OFF":"ON"}</span></p>
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                    <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                </div>
                <button onClick={()=> clickHandler("Sign Up Control", props.data?.signupToggle, "signupToggle")} className= " text-[#98AD17] ">Change</button>
            </div>
            <div className=' w-full border-b border-[#444444] px-4 pt-[18px] flex flex-col ' >
                <p className='mr-8 mb-[18px]' >Awoof Data</p>   
                <div className=' w-full border-t border-[#444444] px-6 py-[17px] flex items-center' >
                    <p className='mr-8' >MTN Data</p>  
                    <p className=' text-[#C0C0C0] ml-auto' >Status:  <span className={!props.data?.showSmeMTN ? ' text-[#D8453B]':' text-white '} >{!props.data?.showSmeMTN ? "OFF":"ON"}</span></p> 
                    <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                        <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                    </div>
                    <button onClick={()=> clickHandler("Awoof MTN Data Control", props.data?.showSmeMTN, "showSmeMTN")} className= " text-[#98AD17] ">Change</button>
                </div>
                <div className=' w-full border-t border-[#444444] px-6 py-[17px] flex items-center' >
                    <p className='mr-8' >GLO Data</p>  
                    <p className=' text-[#C0C0C0] ml-auto' >Status:  <span className={!props.data?.showSmeGlo ? ' text-[#D8453B]':' text-white '} >{!props.data?.showSmeGlo ? "OFF":"ON"}</span></p> 
                    <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                        <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                    </div>
                    <button onClick={()=> clickHandler("Awoof GLO Data Control", props.data?.showSmeGlo, "showSmeGlo")} className= " text-[#98AD17] ">Change</button>
                </div>
                <div className=' w-full border-t border-[#444444] px-6 py-[17px] flex items-center' >
                    <p className='mr-8' >AIRTEL Data</p>  
                    <p className=' text-[#C0C0C0] ml-auto' >Status:  <span className={!props.data?.showSmeAirtel ? ' text-[#D8453B]':' text-white '} >{!props.data?.showSmeAirtel ? "OFF":"ON"}</span></p> 
                    <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                        <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                    </div>
                    <button onClick={()=> clickHandler("Awoof AIRTEL Data Control", props.data?.showSmeAirtel, "showSmeAirtel")} className= " text-[#98AD17] ">Change</button>
                </div>
                <div className=' w-full border-t border-[#444444] px-6 py-[17px] flex items-center' >
                    <p className='mr-8' >9MOBILE Data</p>  
                    <p className=' text-[#C0C0C0] ml-auto' >Status:  <span className={!props.data?.showSme9mobile ? ' text-[#D8453B]':' text-white '} >{!props.data?.showSme9mobile ? "OFF":"ON"}</span></p> 
                    <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                        <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                    </div>
                    <button onClick={()=> clickHandler("Awoof 9MOBILE Data Control", props.data?.showSme9mobile, "showSme9mobile")} className= " text-[#98AD17] ">Change</button>
                </div> 
            </div>
            <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='mr-8' >Regular Data</p>  
                <p className=' text-[#C0C0C0] ml-auto' >Status: <span className=' text-white ' >ON</span></p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                    <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                </div>
                <button onClick={()=> clickHandler("Regular Data Control", false, "")} className= " text-[#98AD17] ">Change</button>
            </div>
            <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='mr-8' >Data</p>  
                <p className=' text-[#C0C0C0] ml-auto' >Status: <span className=' text-white ' >ON</span></p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                    <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                </div>
                <button onClick={()=> clickHandler("Data Control", false, "")} className= " text-[#98AD17] ">Change</button>
            </div>
            <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='mr-8' >Cable TV</p>  
                <p className=' text-[#C0C0C0] ml-auto' >Status: <span className=' text-white ' >ON</span></p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                    <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                </div>
                <button onClick={()=> clickHandler("Cable Tv Control", false, "")} className= " text-[#98AD17] ">Change</button>
            </div>
            <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='mr-8' >Electricty</p>  
                <p className=' text-[#C0C0C0] ml-auto' >Status: <span className=' text-white ' >ON</span></p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                    <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                </div>
                <button onClick={()=> clickHandler("Electricity Control", false, "")} className= " text-[#98AD17] ">Change</button>
            </div>

            <div className=' w-full border-b border-[#444444] px-4 pt-[18px] flex flex-col ' >
                <p className='mr-8 mb-[18px]' >NairaPin</p>   
                <div className=' w-full border-t border-[#444444] px-6 py-[17px] flex items-center' >
                    <p className='mr-8' >NairaPin Create</p>  
                    <p className=' text-[#C0C0C0] ml-auto' >Status:  <span className={!props.data?.nairpinToggle ? ' text-[#D8453B]':' text-white '} >{!props.data?.nairpinToggle ? "OFF":"ON"}</span></p> 
                    <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                        <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                    </div>
                <button onClick={()=> clickHandler("NairaPin Redeem Control", props.data?.nairpinRedeemToggle, "nairpinRedeemToggle")} className= " text-[#98AD17] ">Change</button>
                </div>
                <div className=' w-full border-t border-[#444444] px-6 py-[17px] flex items-center' >
                    <p className='mr-8' >NairaPin Redeem</p>  
                    <p className=' text-[#C0C0C0] ml-auto' >Status:  <span className={!props.data?.nairpinRedeemToggle ? ' text-[#D8453B]':' text-white '} >{!props.data?.nairpinRedeemToggle ? "OFF":"ON"}</span></p> 
                    <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                        <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                    </div>
                <button onClick={()=> clickHandler("NairaPin Redeem Control", props.data?.nairpinRedeemToggle, "nairpinRedeemToggle")} className= " text-[#98AD17] ">Change</button>
                </div>
            </div>
            {/* <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='mr-8' >NairaPin</p>  
                    <p className=' text-[#C0C0C0] ml-auto' >Status:  <span className={!props.data?.nairpinToggle ? ' text-[#D8453B]':' text-white '} >{!props.data?.nairpinToggle ? "OFF":"ON"}</span></p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                    <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                </div>
                <button onClick={()=> clickHandler("NairaPin Control", props.data?.nairpinToggle, "nairpinToggle")} className= " text-[#98AD17] ">Change</button>
            </div>
            <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='mr-8' >NairaPin Redeem</p>  
                    <p className=' text-[#C0C0C0] ml-auto' >Status:  <span className={!props.data?.nairpinRedeemToggle ? ' text-[#D8453B]':' text-white '} >{!props.data?.nairpinRedeemToggle ? "OFF":"ON"}</span></p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                    <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                </div>
                <button onClick={()=> clickHandler("NairaPin Redeem Control", props.data?.nairpinRedeemToggle, "nairpinRedeemToggle")} className= " text-[#98AD17] ">Change</button>
            </div> */}
            <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                <p className='mr-8' >Send Money (Banks)</p>  
                <p className=' text-[#C0C0C0] ml-auto' >Status: <span className={!props.data?.bankTransferToggle ? ' text-[#D8453B]':' text-white '} >{!props.data?.bankTransferToggle ? "OFF":"ON"}</span></p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                    <p className=' text-[#C0C0C0] mr-6' >Message: <span className={' text-white '}>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                </div>
                <button onClick={()=> clickHandler("Send Money (Banks)", props.data?.bankTransferToggle, "bankTransferToggle")} className= " text-[#98AD17] ">Change</button>
            </div>
            <div className=' w-full px-4 h-[58px] flex items-center' >
                <p className='mr-8' >Send Money (Pawa to Pawa)</p>  
                    <p className=' text-[#C0C0C0] ml-auto' >Status:  <span className={!props.data?.walletToWalletToggle ? ' text-[#D8453B]':' text-white '} >{!props.data?.walletToWalletToggle ? "OFF":"ON"}</span></p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                    <p className=' text-[#C0C0C0] mr-6' >Message: <span className=' text-white '>{message.length > 22 ? message.slice(0, 22)+"...": message }</span></p>  
                </div>
                <button onClick={()=> clickHandler("Send Money (Pawa to Pawa)", props.data?.walletToWalletToggle, "walletToWalletToggle")} className= " text-[#98AD17] ">Change</button>
            </div>
           <ModalComponent name={modalName} data={modalData} index={modalIndex} open={open} close={setOpen} />
        </div>
    )
} 