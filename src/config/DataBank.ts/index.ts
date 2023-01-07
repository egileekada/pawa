
export const SendMoney_PawaUser = ["Customer","Status","Transation ID","Type","Method","Beneficiary","Date","Amount","Service Charge", "Meta Data","Balance"]

export const SendMoney_NairaPin = ["Customer","Status","Transation ID","Type","Method","Date","Amount","Service Charge", "Meta Data","Balance"]

export const SendMoney_Other = ["Customer","Status","Transation ID","Type", "Date","Amount","Service Charge", "Meta Data","Balance"]

export const Transaction_Power = ["Customer","Status","Transation ID", "Token","Type", "Provider", "Meter Number", "Date","Amount","Service Charge", "Meta Data","Balance"]

export const SendMoney_BankTransfer = ["Customer","Status","Transation ID","Type","Method","Receiving Bank","Account No.","Beneficiary","Date","Amount","Service Charge","Balance"]

export const Airtime_CashBack = [{name:"MTN", payload: "mtnAirtimeDiscount"}, {name:"Airtel", payload: "airtelAirtimeDiscount"}, {name:"Glo", payload: "gloAirtimeDiscount"},{name:"9Mobile", payload: "etisalatAirtimeDiscount"}]

export const Data_CashBack = [{name:"MTN", payload: "mtnDataDiscount"}, {name:"Airtel", payload: "airtelDataDiscount"}, {name:"Glo", payload: "gloDataDiscount"},{name:"9Mobile", payload: "etisalatAirtimeDiscount"}]

export const Cable_CashBack = [{name:"DSTV", payload: "vtpassDstvDiscount"}, {name:"GOTV", payload: "vtpassGotvDiscount"}, {name:"Startimes", payload: "vtpassStartimesDiscount"}, {name:"Showmax", payload: "vtpassShowmaxDiscount"}]
 
export const Electricity_CashBack = [{name:"Eko", payload: "vtpassEkedcDiscount"}, {name:"Ikeja", payload: "vtpassIkedcDiscount"}, {name:"kano", payload: "vtpassKedcoDiscount"}, {name:"PH", payload: "vtpassPhedDiscount"}, {name:"Abuja", payload: "vtpassAedcDiscount"}, {name:"Kaduna", payload: "vtpassKaedcoDiscount"}, {name:"Jos", payload: "vtpassJedDiscount"}, {name:"Ibadan", payload: "vtpassIbedcDiscount"}]

export const NairaPin_Successful = {
    title: "NairaPin was created successfully", 
    button: "View Pin",
}

export const NairaPin_Redeem = {
    title: "NairaPin Redeem successfully", 
}

export const NairaPin_AllCopied = {
    title: "All NairaPin copied successfully", 
}

export const NairaPin_Copied = {
    title: "NairaPin copied successfully", 
} 

export const NairaPin_Invalid = {
    title: "NairaPin Invalid or used",
    error: true 
}

export const BanUser = {
    title: "Are your sure you want to ban this user?",
    button: "Yes, Ban" 
}

export const BanSuccessful = {
    title: "Ban successfully", 
}

export const DeactivateUser = {
    title: "Are your sure you want to deactivate this user?",
    button: "Yes, Deactivate" 
}

export const DeactivateSuccessful = {
    title: "Deactivate successfully", 
}

export const ReFund = {
    title: "DFunds Reversed Successfully ", 
}

export const SavedChanges = {
    title: "Changes saved successfully", 
}