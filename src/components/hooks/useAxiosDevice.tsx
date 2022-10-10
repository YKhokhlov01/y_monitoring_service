import axios from 'axios'
//import { useForm, SubmitHandler } from "react-hook-form";
//import ApiUrl from "../../API/api";
//import Endpoints from "../../API/endpoints";
import  {useState, useEffect } from 'react';

const useAxiosDevice = ({method, urlMethod, urlGet, accessToken, data}: any) => {
    const [dataDevice, setDataDevice] = useState(
        [{}]); 
    useEffect(() => {    
    async function fetchData() {   
    await axios({
        method: method,
        url: urlMethod,
        headers: {
          Authorization: "Bearer " + accessToken
        },
        data
      }).then(function (response) {
        const allData = response.data
        console.log('allData', allData)
      }).catch(function (error) {
        console.log(error.response.data);
      })     
    };
    fetchData();
    async function fetchGetData() {       
        await axios({
           method: 'get',
           url: urlGet,
           headers: {
               Authorization: "Bearer " + accessToken
            }
         }).then( function (response) {
          const allData = response.data      
          setDataDevice(allData)         
         }).catch(function (error) {
          console.log(error.response.data);           
        })      
      }; 
      fetchGetData() 
},[method, urlMethod, accessToken, data, urlGet]) ;

  return dataDevice  
}

export default useAxiosDevice