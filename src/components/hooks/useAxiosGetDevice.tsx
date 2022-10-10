import axios from 'axios'
import  {useState, useEffect } from 'react';


type AxiosDevice = {
  id: number;
  name: string;
  comment: string;
  latitude: number;
  longitude: number;
  userId: number;
}


const useAxiosGetDevice =  (url:string, accessToken:string) => {
  const defaultData: AxiosDevice[] = []
  const [data, setData]: [AxiosDevice[],(data: AxiosDevice[]) => void ] = useState(defaultData); 
    // Запрос на получение сенсора кокретного устройства
     useEffect(() => {    
     async function fetchData() {       
      await axios({
         method: 'get',
         url: url,
         headers: {
             Authorization: "Bearer " + accessToken
          }
       }).then( function (response) { 
        setData(response.data)                
       }).catch(function (error) {
        console.log(error.response.data);           
      })       
    }; 
    fetchData() 
   }, [url, accessToken])    

return data
  }
export default useAxiosGetDevice