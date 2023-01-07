import { Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { SendMoney_PawaUser } from '../../config/DataBank.ts' 
import OtherCashback from './components/CashBack/OtherCashback'
import SpecialCashback from './components/CashBack/SpecialCashback'
import Control from './components/ControlModal'
import ConfirmNairaPin from './components/NairaPin/ConfirmNairaPin'
import CreateNairaPin from './components/NairaPin/CreateNairaPin'
import ManageNairaPin from './components/NairaPin/ManageNairaPin'
import RedeemNairaPin from './components/NairaPin/RedeemNairaPin'
import ServiceFeeModal from './components/ServiceFeeModal'
import Transaction from './components/Transaction'
import UserModal from './components/UserModal'

export default function Index(props: any) {
    
    const [size, setSize] = React.useState("md") 
    
    const handleClose =()=>{
        props.close(false)
    }

    return (
        <>
            <Modal onClose={props.close} scrollBehavior="inside" size={size} isOpen={props.open} isCentered>
                <ModalOverlay />
                <ModalContent rounded="none" padding="0px" margin="0px" > 
                    <ModalBody margin="0px" padding="0px" > 
                        {props.name === "transaction" && ( 
                            <Transaction schema={props.schema} obj={props.obj} data={props.data} size={setSize} close={handleClose}  />
                        )}
                        {props.name === "SpecialCashback" && ( 
                            <SpecialCashback size={setSize} close={handleClose} />
                        )} 
                        {(props.name === "Airtime Cashback settings" || props.name === "Data Cashback settings" || props.name === "Cable Cashback settings" || props.name === "Electricity Cashback settings") && ( 
                            <OtherCashback size={setSize} close={handleClose} data={props.data} title={props.name} input={props.schema} />
                        )} 
                        {props.name === "ManageNairaPin" && ( 
                            <ManageNairaPin size={setSize} close={handleClose} />
                        )} 
                        {props.name === "RedeemNairaPin" && ( 
                            <RedeemNairaPin size={setSize} close={handleClose}  />
                        )} 
                        {props.name === "CreateNairaPin" && ( 
                            <CreateNairaPin size={setSize} close={handleClose} /> 
                        )}    
                        {(props.name === "All Control" || props.name === "NairaPin Redeem Control" || props.name === "Sign Up Control" || (props.name).substring((props.name.length - 12),props.name.length) === "Data Control" || props.name === "Regular Data Control" || props.name === "Data Control" || props.name === "NairaPin Control" || props.name === "Cable Tv Control" || props.name === "Electricity Control" || props.name === "Send Money (Banks)" || props.name === "Send Money (Pawa to Pawa)") && ( 
                            <Control size={setSize} title={props.name} data={props?.data} index={props.index} close={handleClose} /> 
                        )}  
                        {(props.name === "Cable TV Service Fee" || props.name === "Electricity Service Fee" || props.name === "Send Money Service Fee") && ( 
                            <ServiceFeeModal size={setSize} title={props.name} close={handleClose} /> 
                        )}  
                        {(props.name === "Debit User Wallet" || props.name === "Credit User Wallet") && (
                            <UserModal  size={setSize} name={props.name} close={handleClose} />
                        )}
                        {/* <ConfirmNairaPin size={setSize} close={handleClose} /> */}  
                    </ModalBody> 
                </ModalContent>
            </Modal>
        </>
    )
} 