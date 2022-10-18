import { SetStateAction, Dispatch } from 'react';
import { useContext, useMemo } from 'react';
import { AppContext } from '../../../hooks/context';
import Endpoints from '../../../../API/endpoints';
import ApiUrl from '../../../../API/api';
import useAxiosGet from '../../../hooks/useAxoisGet';
import { RectangleGroupIcon } from '@heroicons/react/24/outline'
type Devices = {
  id: number;
  name: string;
  comment: string;
  latitude: number;
  longitude: number;
  userId: number;
};
interface IDevice {
  device: Devices;
  setId: Dispatch<SetStateAction<number>>
};

const DeviceControl = ({ device, setId }: IDevice) => {
  const { accessToken } = useContext(AppContext);
  const urlSensor = ApiUrl + Endpoints.AUTH.DEVICE + device.id + Endpoints.AUTH.SENSORS
  // State сенсоров данного устройства
  const sensors = useAxiosGet(urlSensor, accessToken);
  useMemo(() => sensors, [sensors])
  return (
    <div className=" flex flex-col flex-initial mt-6 mb-2  border-x-4 border-y-2 h-1/4 2hl:h-2/12 content-center justify-center w-11/12 bg-slate-100 rounded border-sky-300"
      onClick={() => setId(device.id)}>
      <div className="  flex flex-col  items-center justify-center w-full   bg-slate-100 p-3  "  >
        <div className='flex flex-row justify-between items-center content-center  w-full pt-2 mb-3'>
          <span className=" flex m-0 w-1/12 "><RectangleGroupIcon className="h-8  text-blue-500 group-hover:text-blue-400  " aria-hidden="true" />  </span>
          <span className="font-bold  w-11/12 text-sm text-center text-blue-500 mr-1 2xl:text-base xl:text-end ">{device.name}</span>
        </div>
        <div className='flex flex-row justify-start items-center content-center w-full   pb-2 '>
          <span className='text-xs font-medium text-center text-blue-500 pl-2 pr-2 '>"{device.comment}"</span>
        </div>
        <span className=' w-11/12 text-xs text-center text-blue-500 mr-1 xl:text-base 2xl:text-end'> Количество датчиков:{sensors.length}</span>
      </div>
    </div>
  )
}

export default DeviceControl