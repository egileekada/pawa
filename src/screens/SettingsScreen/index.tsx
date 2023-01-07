import React from 'react' 
import Cashback from '../../components/SettingsComponents/Cashback'
import Control from '../../components/SettingsComponents/ControlComponent'
import NairaPin from '../../components/SettingsComponents/NairaPin'
import Referral from '../../components/SettingsComponents/Referral'
import ServiceFee from '../../components/SettingsComponents/ServiceFee'
import { IUser, UserContext } from '../../context/userContext'

export default function SettingsComponents() {

    const [tab, setTab] = React.useState("Cashback") 
    const userContext: IUser = React.useContext(UserContext);  
    
    return (
        <div className=' w-full font-Inter-Medium text-white  ' >
            <p className=' text-[20px] ' >Settings</p>
            <div className=' mt-8 flex text-[#C0C0C0] text-[13px] items-center ' >
                <button onClick={()=> setTab("Cashback")} className={tab === "Cashback" ? " mr-7 text-[#98AD17] " : " mr-7"} >Cashback</button>
                <button onClick={()=> setTab("NairaPin")} className={tab === "NairaPin" ? " mr-7 text-[#98AD17] " : " mr-7"} >NairaPin</button>
                <button onClick={()=> setTab("Control")} className={tab === "Control" ? " mr-7 text-[#98AD17] " : " mr-7"} >Control</button>
                <button onClick={()=> setTab("Service Fee")} className={tab === "Service Fee" ? " mr-7 text-[#98AD17] " : " mr-7"} >Service Fee</button>
                <button onClick={()=> setTab("Referral")} className={tab === "Referral" ? " mr-7 text-[#98AD17] " : " mr-7"} >Referral</button>
            </div>
            <div className="w-full mt-12 pb-12" >
                {tab === "Cashback" && (
                    <Cashback data={userContext.cashBackData} />
                )}
                {tab === "NairaPin" && (
                    <NairaPin />
                )}
                {tab === "Control" && (
                    <Control data={userContext.cashBackData} />
                )}
                {tab === "Service Fee" && (
                    <ServiceFee data={userContext.cashBackData}/>
                )}
                {tab === "Referral" && (
                    <Referral />
                )}
            </div>
        </div>
    )
} 