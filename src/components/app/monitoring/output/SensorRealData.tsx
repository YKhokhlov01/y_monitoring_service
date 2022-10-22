import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../hooks/context';
import Endpoints from '../../../../API/endpoints';
import ApiUrl from '../../../../API/api';
import axios from 'axios'
import SensorRealDataRender from './element/SensorRealDataRender';


type SenRealData = {
    id: number
};
interface IDataformat {
    id: number,
    value: number,
    timestamp: any,
    sensorId: number
  };
  interface IRealData {   
    id: number,
    date: Date,
    sensorId: number,
    time: Date,
    timestamp: Date,
    value: number,  
}

const SensorRealData = ({id}:SenRealData) => {
    const [realData, setRealData] = useState<IDataformat[]>([])
    const { accessToken } = useContext(AppContext);  
    // Получение ссылки на данные датчиков
    const url = ApiUrl + Endpoints.AUTH.SENSOR + id + Endpoints.AUTH.SENSORVALUE;
    useEffect(() => {
        // Получениие данных в реальном времени с интервалом 10 секунд 
        const interval = setInterval(function () {
            let endData1 = new Date()
            let startData1 = new Date()
            startData1.setSeconds(startData1.getSeconds() - 9)
            axios({
                method: 'get',
                params: {
                    startDate: startData1,
                    endDate: endData1,
                },
                url: url,
                headers: {
                    Authorization: "Bearer " + accessToken
                },
            }).then(function (response) {
                setRealData(response.data)
            }).catch(function (error) {
                console.log('error', error.response.data);
            });
        }, 10000)
        return () => clearInterval(interval);
    },
        [url, accessToken]);
    // Изменение формата дата время, добавление в массив новых данных
    const normalRealData = realData.map((elm: any) => {
        const parseDate = Date.parse(elm.timestamp);
        const newDate = new Date(parseDate).toLocaleDateString();
        const newTime = new Date(parseDate).toLocaleTimeString();
        return {
            ...elm,
            date: newDate,
            time: newTime
        }
    });
    // Вывод данных в реальном времени
    const realDataSensor = normalRealData.map((item:IRealData, index) => 
       <SensorRealDataRender key = {index} item = {item}  />  
    )
    return (
        <>
            {realDataSensor}
        </>
    )
}

export default SensorRealData