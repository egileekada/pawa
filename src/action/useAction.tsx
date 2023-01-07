import axios from "../utils/axios"; 

export function useGetDataCallback() {
  const handleGetData = async (postData: string, object:  object): Promise<any> => {    
    try{ 
        const response = await axios.get(postData, 
        {
            params: object,
            headers: {
                'Content-Type':'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }, 
        });          
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleGetData }
} 

export function useUpdateSettingsCallback() {
  const handleUpdateSettings = async (payload: any, ): Promise<any> => {    
    try{ 
        const response = await axios.patch("/settings/update", payload,
        {
            headers: {
                'Content-Type':'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleUpdateSettings }
} 

export function useUpdateUserInfoCallback() {
  const handleUpdateUserInfo = async (payload: any, index: any): Promise<any> => {    
    try{ 
        const response = await axios.patch("/user/"+index, payload,
        {
            headers: {
                'Content-Type':'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleUpdateUserInfo }
} 