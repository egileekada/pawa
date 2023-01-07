import React from 'react'

export default function CheckStatus(props: any) { 	
    if(props.description !== "Nairapin Created" && props.description !== "Nairapin Redeemed" && props.description !== "Bank Transfer"){ 
	    return props?.meta?.data?.content?.transactions?.status || props?.meta?.success || props?.meta?.response?.data?.status || props?.meta?.responsePayload?.data?.status || "Failed";  
    } else {
        return "not seen"
    }
}
