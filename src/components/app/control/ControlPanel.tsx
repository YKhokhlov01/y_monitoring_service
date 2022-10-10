import ApiUrl from '../../../API/api';
import Endpoints from '../../../API/endpoints';
import useAxiosGet from '../../hooks/useAxiosGetSensor';
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
// url устройств 
const urlDevice = Endpoints.AUTH.DEVICE;
const urlSensors = Endpoints.AUTH.SENSORS;
// headers
const headersSensor = 'text-blue-700 text-lg w-1/12 font-bold ml-8 pt-2 pb-2  bg-slate-100 border-y-2 border-slate-200-200 '
const titleSensor = 'Сенсор №'
const headersDevice = 'text-blue-700 text-xl w-11/12 font-extrabold ml-6'
const titleDevice = 'Устройство №'

const ControlPanel = ({ accessToken, device }: IDevice) => { 
  const urlSensor = ApiUrl + Endpoints.AUTH.DEVICE + device.id + Endpoints.AUTH.SENSORS
  const sensors = useAxiosGet(urlSensor, accessToken)
  let createSensor = sensors.map((sensor, index) =>
  <>    
    <DataAxiosMetods key={index} data={sensor} accessToken={accessToken} method={'patch'} urlGadget={urlSensors} headerGadget={headersSensor} titleGadget={titleSensor} />
    </>
  );
  return (
    
    <div className='flex flex-col w-full pl-2 pr-2 mt-2 mb-2 bg-slate-100 box-border items-start border-x-2 border-b-2 border-slate-200'>      
      <DataAxiosMetods data={device} accessToken={accessToken} method={'put'} urlGadget={urlDevice} headerGadget={headersDevice} titleGadget={titleDevice}/>
      {createSensor}
      </div>
  )
}
export default ControlPanel