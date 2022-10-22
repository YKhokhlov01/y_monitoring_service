import { useState, } from 'react';
import { IAccessDevice } from "../../../model";
import ControlPanelMonitoring from './controlpanel/ControlPanelMonitoring';
import Output from './output/Output';



const Monitoring = ({devices}:IAccessDevice) => {
  
    const [idDev, setIdDev] = useState(0);   
   console.log('idDev', idDev)

  return (
    <> 
     <div className='flex flex-col w-3/12 h-12/12 items-center  justify-start  bg-slate-100  border-2 border-slate-200 box-border  '>
      <ControlPanelMonitoring devices={devices}  setId={setIdDev} />
      </div>
      <div className='flex flex-col w-9/12  h-12/12 items-center justify-start border-2 bg-slate-100  border-slate-200 box-border'>
        <Output id={idDev}  />
      </div>
      
    </>
  )
};
 

export default Monitoring