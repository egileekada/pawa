import { TableContainer, Table, Thead, Tr, Td, Tbody } from '@chakra-ui/react';
import React from 'react';
import { useGetDataCallback } from '../../action/useAction';
import { SendMoney_NairaPin, SendMoney_Other, SendMoney_PawaUser, Transaction_Power } from '../../config/DataBank.ts';
import { IUser, UserContext } from '../../context/userContext';
import { cashFormat } from '../../utils/cashFormat';
import { dateFormat, dateFullFormat } from '../../utils/dateFormat';
import ModalComponent from '../ModalComponent';
import Pagination from '../Pagination';
import { format } from 'date-fns';
import CheckData from './component/CheckData';
import { useNavigate } from 'react-router-dom';
import CheckStatus from './component/CheckStatus';

export default function Index(props: any) {

    const [open, setOpen] = React.useState(false) 
    const [isLoading, setIsLoading] = React.useState(true) 
    const [page, setPage] = React.useState("1")
    const [data, setData] = React.useState([] as any)
    const [modalData, setModalData] = React.useState([] as any)
    const [meta, setMeta] = React.useState({} as any)
    const [schema, setSchema] = React.useState("" as any)
    const { handleGetData } = useGetDataCallback(); 
    const navigate = useNavigate()
    const userContext: IUser = React.useContext(UserContext); 

    const GetInformation =async()=>{ 

        let obj = userContext.filterTransaction
        let request = await handleGetData(`/transaction?currentPage=${page}&size=10`, obj)
        const t1 = setTimeout(() => {
            setIsLoading(false);  
            clearTimeout(t1);
        }, 1000);   
        setData(request.data.data)
    } 

    React.useEffect(() => { 
        setIsLoading(true)
        GetInformation()
    }, [userContext.filterTransaction, page]) 

    const modalHandler =(item: any)=> {

        const meta: any = item?.meta
        let status = ""

        if(item?.description !== "Nairapin Created" && item?.description !== "Nairapin Redeemed" && item?.description !== "Bank Transfer"){ 
            status = item?.meta?.data?.content?.transactions?.status || item?.meta?.success || item?.meta?.response?.data?.status || item?.meta?.responsePayload?.data?.status || "Failed";  
        } else {
            status = "not seen"
        }

        setMeta(meta)
        if(item?.purpose === "POWER"){ 
            setModalData([item?.user?.firstName+" "+item?.user?.lastName, status, item?.reference, meta.data?.token, meta.data?.content?.transactions?.type, meta.requestPayload?.serviceID, meta.data?.content?.transactions?.unique_element, dateFullFormat(item?.createdAt), cashFormat(item?.amount), item?.serviceCharge, cashFormat(meta.finalBalance)])
            setSchema(Transaction_Power)
            setOpen(true)
        } else { 
            setModalData([item?.user?.firstName+" "+item?.user?.lastName, status, item?.reference, item?.type, dateFullFormat(item?.createdAt), cashFormat(item?.amount), item?.serviceCharge, cashFormat(item?.meta?.finalBalance)])
            setSchema(SendMoney_Other)
            setOpen(true)
        }
    } 
     
    const clickHandler =(item: any)=> { 
        localStorage.setItem("userId", item) 
        navigate("/dashboard/customerdetails")
    } 

    return ( 
        <div className=' w-full bg-[#252626] border font-Inter-Medium mb-20 border-b-0 border-[#444444]  ' > 
            {!isLoading &&
                <TableContainer>
                    <Table variant='unstyled'> 
                        <Thead className=' text-[11px] text-[#C0C0C0] ' >
                            <Tr> 
                                <Td>
                                    Date
                                </Td>
                                <Td>
                                    Type
                                </Td>
                                <Td>
                                    Number/Meter.No/IUC/PIN
                                </Td>
                                <Td>
                                    Amount
                                </Td>
                                <Td>
                                    Initial Balance
                                </Td>
                                <Td>
                                    Final Balance
                                </Td>
                                <Td>
                                    Transaction ID
                                </Td>
                                <Td>
                                    Status
                                </Td>
                                {!props.detail && ( 
                                    <Td>
                                        customer
                                    </Td> 
                                )}
                                <Td>

                                </Td>
                            </Tr>
                        </Thead>
                        <Tbody> 
                            {data?.response?.map((item: any, index: number) => {
                                return( 
                                    <Tr key={index} className=' text-[13px] text-white font-Inter-Regular border-t border-b border-[#444444]  ' >
                                        <Td>
                                            {item.createdAt &&
                                                format(
                                                    new Date(item.createdAt),
                                                    'MMM do, yyyy H:mma'
                                                )
                                            }
                                        </Td>  
                                        <Td>{item?.purpose === "WALLET" ? item?.activity :item?.purpose === "TRANSFER" ? item?.activity : (item?.purpose === "NAIRAPIN" && item?.description) ? (item?.description).toUpperCase() : item?.purpose}</Td>  
                                        <Td>{CheckData(item)}</Td>  
                                        <Td>{cashFormat(item?.amount)}</Td>  
                                        <Td>{cashFormat(item?.meta?.initialBalance)}</Td> 
                                        <Td>{cashFormat(item?.meta?.finalBalance)}</Td>  
                                        <Td>{item?.reference}</Td>  
                                        <Td>{CheckStatus(item)}</Td>  
                                        {!props.detail && ( 
                                            <Td >
                                                <button onClick={()=> clickHandler(item?.user?._id)} className=' text-[#98AD17] ' > 
                                                    {item?.user?.firstName ? item?.user?.firstName+" "+item?.user?.lastName: "null"}
                                                </button>
                                            </Td> 
                                        )} 
                                        <Td > 
                                            <button  onClick={()=> modalHandler(item)} className=' text-[#98AD17] ' >More Details</button> 
                                        </Td>  
                                    </Tr>  
                                )
                            })} 
                        </Tbody> 
                    </Table>
                </TableContainer>
            }
            {data?.pagination?.total === 0 && !isLoading && ( 
                <div className=' w-full flex justify-center font-Inter-Medium pt-4 mt-3 pb-6 ' >
                    No Record Found
                </div>
            )} 
            {isLoading && 
                <div className=' w-full flex justify-center font-Inter-Medium pt-4 mt-3 pb-6 ' >
                    Loading...
                </div>
            } 
            {data?.pagination?.total > 1 && (
                <Pagination page={setPage} currentPage={data?.pagination?.currentPage} total={data?.pagination?.total} /> 
            )}
            <ModalComponent name="transaction" schema={schema} data={modalData} obj={meta} open={open} close={setOpen} />
        </div>
    )
} 