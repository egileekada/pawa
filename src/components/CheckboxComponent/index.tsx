import React from 'react'
import Icon from "../../assets/images/CheckIcon.svg"

export default function Index(props: any) { 

    const styles = " w-[18px] h-[18px] flex justify-center border border-[#444] items-center "
 

    const ChangeHandler =(item: any)=> {    
        if(item === "transaction"){ 
            props.setFilter({
                ...props.filter,
                transaction: !props.active, 
            })
        } else if(item === "profit"){ 
            props.setFilter({
                ...props.filter,
                profit: !props.active, 
            })
        } else if(item === "cashback"){ 
            props.setFilter({
                ...props.filter,
                cashback: !props.active, 
            })
        } else if(item === "loss"){ 
            props.setFilter({
                ...props.filter,
                loss: !props.active, 
            })
        } 
    }

    return (
        <button disabled onClick={()=> ChangeHandler(props.name)} style={props.active ? {backgroundColor: props.color} : {}} className={styles}>
            {props.active && (
                <img src={Icon} alt="CheckIcon" />
            )}
        </button>
    )
} 