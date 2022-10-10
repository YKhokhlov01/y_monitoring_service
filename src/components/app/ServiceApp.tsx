import ApiUrl from "../../API/api"
import Endpoints from "../../API/endpoints"
import { Routes, Route } from 'react-router-dom';
import Monitoring from "./monitoring/Monitoring";
import Control from "./control/Control";
import MapsDevice from "./maps/MapsDevice";
//import useAxiosGetDevice from "../hooks/useAxiosGetDevice";
import useAxiosGet from "../hooks/useAxoisGet";
/*
type Devices = {
  id: number;
  name: string;
  comment: string;
  latitude: number;
  longitude: number;
  userId: number;
};
*/
type Access = {
  accessToken: string 
};

const urlDevice = ApiUrl + Endpoints.AUTH.DEVICE

const ServiceApp = ({ accessToken }:Access) => {
  // Получение всех устройств  
 // const devices1: Devices[] = useAxiosGetDevice(urlDevice, accessToken)
  const devices = useAxiosGet(urlDevice,accessToken)
  console.log('device SA', devices)
 // console.log('device SA1', devices1)

  return (
    <>
    <Routes>
    <Route path = "home" element = {<Monitoring accessToken={accessToken} devices = {devices}/>}/>
    <Route path = "control" element = {<Control accessToken={accessToken} devices = {devices}/>}/>
    <Route path = "maps" element = {<MapsDevice devices = {devices} />}/> 
   </Routes>
   </>
  )
}
export default ServiceApp