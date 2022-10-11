import ApiUrl from '../../../API/api';
import Endpoints from '../../../API/endpoints';
import useAxiosGet from '../../hooks/useAxoisGet';
import DataAxiosMetods from './DataAxiosMetods';

export interface IDevice {
  accessToken: string,
  device: {
    id: number,
    name: string,
    comment: string,
    latitude: number,
    longitude: number,
    userId: number,
  }
};

type PGadget =[
  method: string,
  urlGadget: string,
  headerGadget: string,
  titleGadget: string 
]


// url устройств 
const urlDevice:string = Endpoints.AUTH.DEVICE;
const urlSensors: string = Endpoints.AUTH.SENSORS;
// headers
const headersSensor: string = 'text-blue-700 text-lg w-1/12 font-bold ml-8 pt-2 pb-2  bg-slate-100 border-y-2 border-slate-200-200 '
const titleSensor: string = 'Сенсор №'
const headersDevice:string = 'text-blue-700 text-xl w-11/12 font-extrabold ml-6'
const titleDevice:string = 'Устройство №'
// metods
const metodDevice:string ='put'
const metodSensor:string = 'patch'

//девайс
const paramDevice:PGadget = [
  urlDevice,
  headersDevice,
  titleDevice,
  metodDevice 
];
//сенсор
const paramSensor:PGadget = [
  urlSensors,
  headersSensor,
  titleSensor,
  metodSensor
]; 

const ControlPanel = ({ accessToken, device }: IDevice) => { 
  const urlSensor = ApiUrl + Endpoints.AUTH.DEVICE + device.id + Endpoints.AUTH.SENSORS
  const sensors = useAxiosGet(urlSensor, accessToken, device)
  let createSensor = sensors.map((sensor, index) =>  
    <DataAxiosMetods key={index} dataGadget={sensor} accessToken={accessToken} paramGadget={paramSensor} />
    
  );
  return (
    
    <div className='flex flex-col w-full pl-2 pr-2 mt-2 mb-2 bg-slate-100 box-border items-start border-x-2 border-b-2 border-slate-200'>      
      <DataAxiosMetods dataGadget={device} accessToken={accessToken} paramGadget={paramDevice}/>
      {createSensor}
      </div>
  )
}
export default ControlPanel