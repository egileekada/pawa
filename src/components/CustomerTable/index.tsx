import { TableContainer, Table, Thead, Tr, Td, Tbody } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetDataCallback } from '../../action/useAction';
import { IUser, UserContext } from '../../context/userContext';
import { cashFormat } from '../../utils/cashFormat';
import { dateFormat } from '../../utils/dateFormat';
import Pagination from '../Pagination';
import { format } from 'date-fns';

export default function CustomerTable(props: any) {
 
    const [data, setData] = React.useState([] as any)
    const [isLoading, setIsLoading] = React.useState(true) 
    const [page, setPage] = React.useState("1")
    const { handleGetData } = useGetDataCallback();
    const navigate = useNavigate()
    const userContext: IUser = React.useContext(UserContext);

    const GetInformation =async()=>{

        let obj = userContext.filterUser

        let request = await handleGetData(`/user?currentPage=${page}&size=10`, obj) 
        if(props.detail){
            props.data(request?.data?.data?.response)
        }
        setData(request.data.data)
        const t1 = setTimeout(() => {
            setIsLoading(false);  
            clearTimeout(t1);
        }, 1000);  
    }

    React.useEffect(() => {
        setIsLoading(true) 
        GetInformation() 
    }, [userContext.filterUser, page])  
     
    const clickHandler =(item: any)=> {
        localStorage.setItem("userId", item) 
        navigate("/dashboard/customerdetails")
    } 

    return ( 
        <div className=' w-full mt-12 bg-[#252626] border font-Inter-Medium border-[#444444]  ' >
            {!isLoading &&
                <TableContainer>
                    <Table variant='unstyled'> 
                        <Thead className=' text-[11px] text-[#C0C0C0] ' >
                            <Tr> 
                                <Td>
                                    Name
                                </Td>
                                <Td>
                                    Wallet Balance
                                </Td>
                                <Td>
                                    Account Number
                                </Td>
                                <Td>
                                    Email Address
                                </Td>
                                <Td>
                                    Phone Number
                                </Td>
                                <Td>
                                    BVN Verification
                                </Td>
                                <Td>
                                    Phone Verification
                                </Td>
                                <Td>
                                    Registered
                                </Td> 
                                <Td>
                                    Status
                                </Td> 
                                {!props.detail && ( 
                                    <Td>

                                    </Td>
                                )}
                            </Tr>
                        </Thead>
                        <Tbody> 
                            {data?.response?.map((item: any, index: any)=> {
                                return( 
                                    <Tr key={index} className=' text-[13px] text-white font-Inter-Regular border-t border-b border-[#444444]  ' >
                                        <Td>{item?.firstName+" "+item?.lastName}</Td>  
                                        <Td>{cashFormat(item?.wallet)}</Td>  
                                        <Td>{item?.account.length === 0 ? "null" :  item?.account[0].accountNumber}</Td>  
                                        <Td>{item?.email}</Td>  
                                        <Td>{item?.phone}</Td>  
                                        <Td>{item?.kyc?.bvn ? "Yes" : "No"}</Td>  
                                        <Td>{item?.kyc?.phone ? "Yes" : "No"}</Td>  
                                        <Td> 
                                            {item?.createdAt &&
                                                format(
                                                    new Date(item.createdAt),
                                                    'MMM do, yyyy H:mma'
                                                )
                                            }
                                        </Td>  
                                        <Td>Active</Td>   
                                        {!props.detail && ( 
                                            <Td>
                                                <button onClick={()=> clickHandler(item._id)} className=' text-[#98AD17] '>More Details</button>
                                            </Td> 
                                        )} 
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
            {!props.detail && data?.pagination?.total > 0  && ( 
                <Pagination page={setPage} currentPage={data?.pagination?.currentPage} total={data?.pagination?.total} /> 
            )}
        </div>
    )
} 