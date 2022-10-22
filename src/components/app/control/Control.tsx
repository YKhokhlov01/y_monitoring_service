import { IAccessDevice } from "../../../model";
import ControlPanel from "./ControlPanel";

const Control = ({ accessToken, devices }: IAccessDevice) => {
  console.log('devices', devices)
  let createDevices = devices.map((device, index) =>
    <ControlPanel key={index} device={device} accessToken={accessToken} />
  );
  return (
    <div className="flex justify-center items-start content-start w-full bg-slate-100 box-border mr-2 ml-2 ">
    <div className='flex flex-col w-full  mt-4 '>
      {createDevices}
      </div>
      </div>
  )
}

export default Control