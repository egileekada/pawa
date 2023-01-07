import React, { useState, createContext, useContext } from "react";

export interface IUser {
  userInfo: any, 
  setUserInformation: Function, 
  searchUser: any, 
  setSearchUser: Function, 
  searchTransaction: any, 
  setSearchTransaction: Function
  cashBackData: any, 
  setCashBackData: Function,   
  filterTransaction: object, 
  setFilterTransaction: Function,
  filterUser: object, 
  setFilterUser: Function
}

export const UserContext = React.createContext({} as IUser); 

export const useUser = () => useContext(UserContext);

export const UserContextProvider = (props: any) => {
  const [userInfo, setUserInformation] = useState({} as any);  
  const [filterTransaction, setFilterTransaction] = useState({} as any); 
  const [filterUser, setFilterUser] = useState({} as any); 

  const [searchUser, setSearchUser] = useState("");   
  const [searchTransaction, setSearchTransaction] = useState(""); 
  const [cashBackData, setCashBackData] = useState("");  

  return <UserContext.Provider value={{filterUser, setFilterUser, filterTransaction, setFilterTransaction,userInfo, setUserInformation, cashBackData, setCashBackData, searchUser, setSearchUser, searchTransaction, setSearchTransaction}}>
    {
        props.children
    }</UserContext.Provider>;
};
