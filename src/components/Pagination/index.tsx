import React from 'react'

export default function Pagination(props: any) {

    const prevpage =()=> {
        props.page(Number(props?.currentPage)-1)
    }

    const nextpage =()=> {
        props.page(Number(props?.currentPage)+1)
    }

    return (
        <div className=' w-full flex justify-between font-Inter-Regular text-[13px] items-center h-[70px] px-[30px] border-b border-[#444444]  ' >
            <p>Page {props?.currentPage ? props?.currentPage : "0"} / {props?.total ? props?.total : "0"}</p>
            <div className=' flex items-center ' >
                {props?.currentPage && (
                    <> 
                        <button disabled={props.currentPage === 1 ? true:false} onClick={()=> prevpage()} className={props.currentPage === 1 ? ' h-[45px] w-[92px] opacity-30 bg-[#98AD17] tetxt-[#fff] ':' h-[45px] w-[92px] bg-[#98AD17] tetxt-[#fff] '} >
                            Prev Page
                        </button>
                        <button disabled={props.currentPage === props.total ? true: false} onClick={()=> nextpage()} className={props.currentPage === props.total ? ' h-[45px] w-[92px] opacity-30 bg-[#98AD17] tetxt-[#fff] ':' h-[45px] w-[92px] bg-[#98AD17] tetxt-[#fff] '} >
                            Next Page
                        </button>
                    </>
                )}
            </div>
        </div>
    )
} 