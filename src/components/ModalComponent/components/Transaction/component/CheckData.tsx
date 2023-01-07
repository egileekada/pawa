import React from 'react'

export default function CheckData(item:string, index: number, data: any) {

    const [finalData, setFinalData] = React.useState("")

    React.useEffect(()=>{ 
        if(item === "Token"){
            setFinalData((data[index]+"").replace("Token :", ""))
            return 
        } else if(item === "Meta Data"){
            setFinalData("")
            return 
        } else if(item === "Balance"){
            setFinalData(data[data.length-1])
            return 
        } else {
            setFinalData(data[index])
            return 
        } 
    }, [finalData]) 
     
    return(
        <>
            {finalData}
        </>
    )
} 