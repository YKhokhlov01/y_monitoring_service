import axios from 'axios'
import  {useState, useEffect } from 'react';
type AxiosSensor = {
  id: number,
  name: string , 
  comment: string,
  deviceId: number
}

const useAxiosGet =  (url:string, accessToken:string) => {
  const defaultData: AxiosSensor[] = []
  const [data, setData]: [AxiosSensor[],(data: AxiosSensor[]) => void ] = useState(defaultData); 
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
        const allData = response.data      
        setData(allData)         
       }).catch(function (error) {
        console.log(error.response.data);           
      })      
    }; 
    fetchData() 
   }, [url, accessToken])   
  return data   
}

export default useAxiosGet