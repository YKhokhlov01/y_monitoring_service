//import { useState } from 'react';

import { IAccessDevice } from "../../../model";



const Monitoring = ({accessToken, devices}: IAccessDevice) => {
  /*
    const [idDevice, setIdDevice] = useState(0)
  // Получение id устройства
  function setIdClick(idDevice: number) {
    setIdDevice(idDevice);
  };  */

  return (
    <> {/*
      <ControlPanel devices={devices} accessToken={accessToken} onClick={(idDevice: number) => setIdClick(idDevice)} />
      {idDevice > 0 ? (
        <Output id={idDevice} accessToken={accessToken} />
      ) : (
        <BannerClickIdDevice head={'Устройство'} /> 
      )}
      */}  </>
  )
};
 

export default Monitoring