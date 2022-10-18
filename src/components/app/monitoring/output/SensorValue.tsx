// Компонент для получения данных по значения сенсора
import axios from 'axios'
import ApiUrl from '../../../../API/api';
import Endpoints from '../../../../API/endpoints';
import { useState, useEffect } from 'react';
import SensorTable from './element/SensorTable';
import { SetStateAction, Dispatch } from 'react';

interface IDataformat {
    id: number,
    value: number,
    timestamp: any,
    sensorId: number
  };
interface ISensorValue {
    id: number,
    accessToken: string,
    numbers: number[],
    startDataMass: Date[],
    endDataMass: Date[],
    setindexTab: Dispatch<SetStateAction<number>>,
    indexTab: number, 
}

function SensorValue({ id, accessToken, numbers, startDataMass, endDataMass, setindexTab, indexTab }: ISensorValue) {
  const [dataSensor, setDataSensor] = useState<IDataformat[]>([])
  // Получение данных с датчиков
  const url = ApiUrl + Endpoints.AUTH.SENSOR + id + Endpoints.AUTH.SENSORVALUE
  //  Получение триггера для запуска запроса
  const start = startDataMass.length
  // Создание массива запросов (20 шт) на каждую кнопку интервал 3 минуты. Итого 1 час. 
  useEffect(() => {
    // Интервалы для запроса
    let endData1 = endDataMass[indexTab];
    let startData1 = startDataMass[indexTab];
    if (start > 0) {
      axios({
        method: 'get',
        params: {
          startDate: startData1,
          endDate: endData1,
        },
        url: url,
        headers: {
          Authorization: "Bearer " + accessToken
        }
      }).then(function (response) {
        setDataSensor(response.data)
      }).catch(function (error) {
        console.log(error.response.data);
      });
    }
  }, [url, indexTab, accessToken, startDataMass, endDataMass, start])
  ////////////////////////////////////////////

  // Кнопки pagination
  const pagination = numbers.map((index: number) => {
    return (
      < button className="inline-flex items-center border border-sky-200 bg-slate-50 hover:bg-slate-200 focus:bg:slate-300 focus:ring-1 px-4 py-2 mr-1 text-sm font-medium text-blue-600 "
        key={index}
        onClick={() => setindexTab(index)}
      >
        {index + 1}
      </button>
    )
  });

  return (
    <>      
        <SensorTable dataSensor={dataSensor} />     
      <div className="flex items-center w-10/12 h-2/12 justify-center border-2 border-sky-200 bg-slate-100  px-2  py-1 mb-1 ">
        <div className=" flex flex-1 items-center justify-center">          
            <nav className="" aria-label="Pagination">
              {pagination}
            </nav>          
        </div>
      </div>      
    </>
  )
}
export default SensorValue