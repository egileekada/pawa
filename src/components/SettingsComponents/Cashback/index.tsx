import { Checkbox, Switch } from '@chakra-ui/react'
import React from 'react'
import { Airtime_CashBack, Cable_CashBack, Data_CashBack, Electricity_CashBack } from '../../../config/DataBank.ts'
import { IUser, UserContext } from '../../../context/userContext'
import { cashFormat } from '../../../utils/cashFormat'
import { dateFullFormat, dateFullFormatSecond } from '../../../utils/dateFormat'
import ModalComponent from '../../ModalComponent'

export default function CashBack(props: any) {

    const [open, setOpen] = React.useState(false)  
    const [schema, setSchema] = React.useState("" as any)
    const [modalName, setModalName] = React.useState("")
    const [modalData, setModalData] = React.useState("" as any)

    const userContext: IUser = React.useContext(UserContext);

    const clickHandler =(name: any, schemaData: any, data: any)=> {
        setModalData(data)
        setModalName(name)
        setSchema(schemaData)
        setOpen(true)
    } 

    const AirtimeCashBack = [userContext.cashBackData.mtnAirtimeDiscount, userContext.cashBackData.airtelAirtimeDiscount, userContext.cashBackData.gloAirtimeDiscount, userContext.cashBackData.etisalatAirtimeDiscount]

    const DataCashBack = [userContext.cashBackData.mtnDataDiscount, userContext.cashBackData.airtelDataDiscount, userContext.cashBackData.gloDataDiscount, userContext.cashBackData.etisalatAirtimeDiscount]

    const CableCashBack = [userContext.cashBackData.vtpassDstvDiscount, userContext.cashBackData.vtpassGotvDiscount, userContext.cashBackData.vtpassStartimesDiscount, userContext.cashBackData.vtpassShowmaxDiscount]

    const ElectricityCashBack = [userContext.cashBackData.vtpassEkedcDiscount, userContext.cashBackData.vtpassIkedcDiscount, userContext.cashBackData.vtpassKedcoDiscount, userContext.cashBackData.vtpassPhedDiscount, userContext.cashBackData.vtpassAedcDiscount, userContext.cashBackData.vtpassKaedcoDiscount, userContext.cashBackData.vtpassJedDiscount, userContext.cashBackData.vtpassIbedcDiscount] 

    return (
        <div className=' w-full font-Inter-Medium text-[13px] text-white ' >
           <p className=' text-[#C0C0C0] ' >Regular Cashback</p> 
           <div className=' mt-6 w-full bg-[#252626] border border-[#444444] ' >
                <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                    <p className=' mr-8' >Airtime</p> 
                    <p className='ml-auto mr-4' >MTN ({props.data.mtnAirtimeDiscount}), Airtel ({props.data.airtelAirtimeDiscount}), GLO ({props.data.gloAirtimeDiscount}) 9mobile ({props.data.etisalatAirtimeDiscount})</p> 
                    <button onClick={()=> clickHandler("Airtime Cashback settings", Airtime_CashBack, AirtimeCashBack)} className= " text-[#98AD17] ">Edit</button>
                </div>
                <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                    <p className=' mr-8' >Data</p> 
                    <p className='ml-auto mr-4' >MTN ({props.data.mtnDataDiscount}), Airtel ({props.data.airtelDataDiscount}), GLO ({props.data.gloDataDiscount}) 9mobile ({props.data.etisalatDataDiscount})</p> 
                    <button onClick={()=> clickHandler("Data Cashback settings", Data_CashBack, DataCashBack)} className= " text-[#98AD17] ">Edit</button>
                </div>
                <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                    <p className=' mr-8' >Cable</p> 
                    <p className='ml-auto mr-4' >DSTV ({props.data.vtpassDstvDiscount}), GOTV ({props.data.vtpassGotvDiscount}), Startimes ({props.data.vtpassStartimesDiscount}), Showmax ({props.data.vtpassShowmaxDiscount})</p> 
                    <button onClick={()=> clickHandler("Cable Cashback settings", Cable_CashBack, CableCashBack)} className= " text-[#98AD17] ">Edit</button>
                </div>
                <div className=' w-full px-4 h-[58px] flex items-center' >
                    <p className=' mr-8' >Electricity</p> 
                    <p className='ml-auto mr-4' >Eko ({props.data.vtpassEkedcDiscount}), Ikeja ({props.data.vtpassIkedcDiscount}), kano ({props.data.vtpassKedcoDiscount}), PH ({props.data.vtpassPhedDiscount}), Abuja ({props.data.vtpassAedcDiscount}), Kaduna ({props.data.vtpassKaedcoDiscount}), Jos ({props.data.vtpassJedDiscount}), Ibadan ({props.data.vtpassIbedcDiscount})</p> 
                    <button onClick={()=> clickHandler("Electricity Cashback settings", Electricity_CashBack, ElectricityCashBack)} className= " text-[#98AD17] ">Edit</button>
                </div>
           </div>
           <div className=' w-full flex items-center mt-14' > 
                <p className=' text-[#C0C0C0]' >Special Cashback </p> 
                <div className='border-l flex items-center ml-4 pl-4 border-[#444444]' >
                    <p className=' text-[#C0C0C0] mr-4' >Go live</p> 
                    <Switch />
                </div>
                <button onClick={()=> clickHandler("SpecialCashback", "", "") } className= " text-[#98AD17] ml-auto ">Edit Details</button>
           </div>
           <div className=' mt-6 w-full bg-[#252626] border border-[#444444] ' >
                <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                    <p className='' >Category</p> 
                    <p className='ml-auto' >{props.data.cashbackCategory}</p>  
                </div>
                <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                    <p className='' >Cashback amount to be given out</p> 
                    <p className='ml-auto' >{cashFormat(props.data.cashbackAmount)}</p>  
                </div>
                <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                    <p className='' >Cashbacks will be given out to only</p> 
                    <p className='ml-auto' >{props.data.cashbackLimit} users</p>  
                </div>
                <div className=' w-full px-4 h-[58px] border-b border-[#444444] flex items-center' >
                    <p className='' >Paticipants much transact atleast</p> 
                    <p className='ml-auto' >{cashFormat(props.data.cashbackMinSpend)}</p>  
                </div>
                <div className=' w-full border-b border-[#444444] px-4 h-[58px] flex items-center' >
                    <p className='' >Cashback date and time</p> 
                    <p className='ml-auto' >{dateFullFormatSecond(props.data.cashbackDay)}</p>  
                </div>
           </div> 
           <ModalComponent name={modalName} schema={schema} data={modalData} open={open} close={setOpen} />
        </div>
    )
} 