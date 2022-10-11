import ApiUrl from "../../API/api"
import Endpoints from "../../API/endpoints"
import { Routes, Route } from 'react-router-dom';
import Monitoring from "./monitoring/Monitoring";
import Control from "./control/Control";
import MapsDevice from "./maps/MapsDevice";
import useAxiosGet from "../hooks/useAxoisGet";
import { AppContext } from '../hooks/context';
import { useState } from 'react';

type Access = {
  accessToken: string
};

const urlDevice = ApiUrl + Endpoints.AUTH.DEVICE
const ServiceApp = ({ accessToken }: Access) => {
  const [successEdit, setsuccessEdit] = useState(null)
  const devices = useAxiosGet(urlDevice, accessToken, successEdit)
  console.log('device SA', devices);

  return (

    <AppContext.Provider value={{ setsuccessEdit, accessToken }}>
      <Routes>
        <Route path="home" element={<Monitoring accessToken={accessToken} devices={devices} />} />
        <Route path="control" element={<Control accessToken={accessToken} devices={devices} />} />
        <Route path="maps" element={<MapsDevice devices={devices} />} />
      </Routes>

    </AppContext.Provider>
  )
}
export default ServiceApp