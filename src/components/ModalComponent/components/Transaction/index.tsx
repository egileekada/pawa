import { Input, Switch } from '@chakra-ui/react'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import Close from "../../../../assets/images/Close.svg"
import CheckData from './component/CheckData';

export default function Index(props: any) {

    React.useEffect(() => {
        props.size("xl")
    }, [props.size])

    const [copySuccess, setCopySuccess] = React.useState('Copy');
    const [response, responseChange] = React.useState(false);


    const copyToClipBoard = async (item: string) => { 
        await navigator.clipboard.writeText(item);
        setCopySuccess('Copied!'); 
        const t1 = setTimeout(() => {
            setCopySuccess('Copy'); 
            clearTimeout(t1);
        }, 1000);   
    };
    
    return ( 
        <div className=' w-full bg-[#252626] border text-[13px] text-[#fff]  border-b-0 border-[#444] font-Inter-Medium ' >
            <div className=' w-full h-[62px] border-b border-[#444] flex justify-between px-6 items-center ' >
                <p className=' text-[15px] text-[#C0C0C0] ' >Transaction Details</p>
                <button onClick={()=> props.close()} >
                    <img src={Close} alt="close" />
                </button>
            </div>
            {props.schema.map((item: any, index: any)=> {
                return( 
                    <div key={index} className=' w-full border-b outline-none border-[#444] py-5 px-6' >
                        <div className=' w-full   flex justify-between items-center ' >
                            <p className=' ' >{item}</p>
                            <div className=' flex items-center ' > 
                                <p className={item === "Customer" || item === "Beneficiary"? "text-[#98AD17]": ""} >
                                    {CheckData(item, index, props.data)}
                                </p>
                                {item === "Token" && (
                                    <button onClick={()=> copyToClipBoard((props?.data[index]+"").replace("Token :", ""))} className='text-[#98AD17] ml-2 ' >
                                        {copySuccess}
                                    </button>
                                )} 
                                {item === "Meta Data" && (  
                                    <Switch checked={response} onChange={(e)=> responseChange(e.target.checked)} /> 
                                )}
                            </div>
                        </div>

                        
                        {item === "Meta Data" && ( 
                            <> 
                                {response && (
                                    <pre className=' mt-2 text-[13px] ' >
                                    <CopyBlock
                                        text={JSON.stringify(props?.obj, null, 2)}
                                        showLineNumbers
                                        theme={dracula}
                                        wrapLines={true}
                                        codeBlock
                                    />
                                    </pre>
                                )}
                            </>
                        )}
                    </div>
                )
            })} 
        </div>
    )
} 