import DeviceControl from './DeviceControl';
import { SetStateAction, Dispatch } from 'react';
type Devices = {
  id: number;
  name: string;
  comment: string;
  latitude: number;
  longitude: number;
  userId: number;
};  
 interface IDevice {    
  devices: Devices[];
  setId: Dispatch<SetStateAction<number>>
};
const ControlPanelMonitoring = ({ devices, setId }:IDevice ) => {
    // Вывод устройства с сенсорами
  let createDevices = devices.map((device, index) =>
    <DeviceControl key={index} device={device} setId={setId} />
  );
  return (
    <>
      {createDevices}
    </>
  )
}

export default ControlPanelMonitoring