import React from 'react'

export default function CheckData(props: any) {     
    
    let Invalid = "---------"

    return (
        <>
            {props?.type === "WALLET" && (props?.purpose === "DATA" || props?.purpose === "AIRTIME") && (
                <p>{props?.meta?.data?.content?.transactions?.unique_element ? props?.meta?.data?.content?.transactions?.unique_element :Invalid}</p>
            )}
            {props?.type === "BANK_TRANSFER" && props?.purpose === "WALLET" && (
                <p>{props?.meta?.accountNumber}</p>
            )}
            {props?.type === "BANK_TRANSFER" && props?.purpose === "CABLE" && (
                <p>{props?.meta?.request?.account_number ? props?.meta?.request?.account_number : Invalid}</p>
            )}
            {props?.type === "BANK_TRANSFER" && props?.purpose === "TRANSFER" && (
                <p>
                    {Invalid}
                </p>
            )} 
            {props?.type === "BANK_TRANSFER" && props?.purpose === "POWER" && (
                <p>{props?.meta?.data?.content?.transactions?.unique_element ? props?.meta?.data?.content?.transactions?.unique_element : Invalid}</p>
            )}
            {props?.type === "BANK_TRANSFER" && props?.purpose === "CABLE" && (
                <p>{props?.meta?.request?.account_number ? props?.meta?.request?.account_number : Invalid}</p>
            )}
            {props?.type === "WALLET" && props?.purpose === "CABLE" && (
                <p>{props?.meta?.data?.content?.transactions?.unique_element ? props?.meta?.data?.content?.transactions?.unique_element : Invalid}</p>
            )}
            {props?.type === "NAIRAPIN" && props?.purpose === "NAIRAPIN" && (
                <p>{props?.meta?.requestPayload?.nairaPin}</p>
            )} 
            {props?.type === "WALLET" && props?.purpose === "NAIRAPIN" && (
                <p>
                    {Invalid}
                </p>
            )} 
        </>
    )
} 