//import { SetStateAction, Dispatch } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../hooks/context';
import Endpoints from '../../../../API/endpoints';
import ApiUrl from '../../../../API/api';
import useAxiosGet from '../../../hooks/useAxoisGet';
import { ISensor } from '../../../../model';
import { useState } from 'react';
import SensorRender from './element/SensorRender';
import ButtonRender from '../../../../elements/ButtonRender';
import { placement } from "@material-tailwind/react/types/components/menu";
import { content } from "@material-tailwind/react/types/components/popover";
import { ChartBarIcon, TableCellsIcon } from '@heroicons/react/24/outline';
import SensorValue from './SensorValue';
import SensorChart from './SensorChart';


type OutputData = {
  id: number,  
};


const Output = ({id}: OutputData) => {
  const urlSensor: string = ApiUrl + Endpoints.AUTH.DEVICE + id + Endpoints.AUTH.SENSORS
  const { accessToken } = useContext(AppContext);  
  // Получение через хук данных Сенсоров
  const sensors: ISensor[] = useAxiosGet(urlSensor, accessToken);
  
  // Поднятие состояний State для генерации массивов 3 минутных интервалов отображения данных в таблице 
  const [numbers, setnumbers] = useState<number[]>([]);  // массив для генерации кнопок
  const [endDataMass, setendDataMass] = useState<Date[]>([])
  const [startDataMass, setstartDataMass] = useState<Date[]>([])
  const [indexTab, setindexTab] = useState<number>(0) // Индекс кнопки таблицы
 //Получение и хранение id sensora при нажатии 
 const [idSensor, setidSensor] = useState<number>(0);
 // Функция при клике: генерит массивы 3 минутных интервалов, массив для конопок пагинации
 function idSensorClick(idx: number) {
   setidSensor(idx)
   const endDataMass1: Date[] = [];
   const startDataMass1: Date[] = [];
   const time1 = new Date();
   const time2 = new Date();
   for (var i = 0; i <= 19; i++) {
     const intervalEnd = new Date();
     const intervalStart = new Date(time2.setSeconds(time2.getSeconds() - 180));
     startDataMass1.push(intervalStart);
     new Date(intervalStart.setSeconds(time2.getSeconds()));
     new Date(intervalEnd.setSeconds(time1.getSeconds() - i * 180) + 10);
     endDataMass1.push(intervalEnd);
     const num = endDataMass1.map((elm, index) => index);
     setnumbers(num);
     setendDataMass(endDataMass1);
     setstartDataMass(startDataMass1);
     setindexTab(0);
   };
 };
 // State для хранения состояния кнопки 
 const [isTab, setisTab] = useState(true)
 // Вывод сенсора на экран + данные датчика в реальном времени 
 let sensorRender = sensors.map((sensor, index) => 
  <SensorRender key = {index}  sensor = {sensor} onClick = {(idx:number) => idSensorClick(idx)} />
 )
 return (
  <>
     <div className='flex flex-row w-10/12 h-2-12  item-start content-center box-border   '>
      <div className='flex flex-col mim-w-[1200px] w-full'>
       {sensorRender}
       </div>
       {idSensor > 0 &&
       <div className='items-center  self-end mb-6'> 
       {isTab? <ButtonRender editTrue={isTab} seteditTrue={setisTab} arg = {argChart} /> :        
        <ButtonRender editTrue={isTab} seteditTrue={setisTab} arg = {argTab} /> }       
     </div>}
     </div>
     {idSensor > 0 ? <>
       {isTab ? (
         <SensorValue
           id={idSensor}
           accessToken={accessToken}
           numbers={numbers}
           endDataMass={endDataMass}
           startDataMass={startDataMass}
           setindexTab={setindexTab}
           indexTab={indexTab}
         />) :  (<div className=' flex mt-2 mb-2 h-7/12 w-9/12 justify-center'>
           <SensorChart
             id={idSensor}
             accessToken={accessToken}
           /></div>
       )} 
     </> : null} {/*} (
       <BannerClickIdDevice head={'Сенсор'} />
     )} 
     */}
  </>
 )
}

export default Output

type Arg = [
  type: "button" | "submit",
  Content: content,
  Placement: placement,
  icons: React.ReactNode
];

// Кнопка график 
const ContentChart = 'График'
const PlacementChart = 'right'
const IconChart = <ChartBarIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400  " aria-hidden="true" />
const TypeChart = "button"
const argChart: Arg = [
  TypeChart,
  ContentChart,
  PlacementChart,
  IconChart,
];
const ContentTab = 'Таблица'
const PlacementTab = 'right'
const IconTab = <TableCellsIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400  " aria-hidden="true" />
const TypeTab = "button"
const argTab: Arg = [
  TypeTab,
  ContentTab,
  PlacementTab,
  IconTab,
];


