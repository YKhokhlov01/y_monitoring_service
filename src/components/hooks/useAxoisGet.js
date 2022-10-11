import axios from 'axios'
import  {useState, useEffect } from 'react';

const useAxiosGet =  (url, accessToken, Edit) => {
  const defaultData = []
  const [data, setData] = useState(defaultData); 
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
   }, [url, accessToken, Edit])   
  return data   
}

export default useAxiosGet