// График  показтелей сенсора за 1 час 
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ApiUrl from '../../../../API/api';
import Endpoints from '../../../../API/endpoints';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
); 
const SensorChart = ({id, accessToken}) => {
    const [dataSensor, setDataSensor] = useState([]);  
  // Получение данных с датчиков
  const url = ApiUrl + Endpoints.AUTH.SENSOR + id + Endpoints.AUTH.SENSORVALUE 
 useEffect(() => {
  let endData1 = new Date()
  let startData1 = new Date()
  startData1.setHours(endData1.getHours()-1)
  axios({
      method: 'get',
      params: {
        startDate:startData1,
        endDate: endData1,
      },   
      url: url,
        headers: {
          Authorization: "Bearer " + accessToken
        }
       }).then(function (response) {   
            
      setDataSensor(response.data) 
    }).catch((error) => {
      console.log('fetch data failed', error);
    }); 
}, [url, accessToken]);
//  Изменение массива данных + добавление отдельно даты и время
const dataNormal = dataSensor.map((elm) => {
  const parseDate = Date.parse(elm.timestamp);
  const newDate = new Date(parseDate).toLocaleDateString();
  const newTime = new Date(parseDate).toLocaleTimeString();
  return {
    ...elm,
    date: newDate,
    time: newTime
  }
});
// Создание массива времени для оси х
const dataTime = dataNormal.map((item) => { 
 return( 
   item.time 
 )
}); 
// Создание массива значения для оси у
const dataValue = dataNormal.map((item) => { 
  return( 
   item.value 
  )
 }); 
// Создание графика с помощью charts.js
const data = {
  labels: dataTime,
  datasets: [{
   label: 'Данные датчиков за последний час',
    backgroundColor: 'rgb(66,133,180)',
    borderColor: 'rgb(66,170,255)',
    data: dataValue,
  }]
};
const config = {
  type: 'line',
  data: data,
  };

    return <Line config={config}  data={data} />;
  };

export default SensorChart