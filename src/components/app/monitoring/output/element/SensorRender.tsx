import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { ISensor } from '../../../../../model'
import SensorRealData from '../SensorRealData'

interface ISensorRender {
    sensor: ISensor,
    onClick: any
}

const SensorRender = ({ sensor, onClick }: ISensorRender) => {
    return (
        <div className="  flex flex-row  items-center justify-start w-11/12   h-20 border-x-4 border-y-2  border-sky-400 mt-3 mb-2 p-1 mx-1  bg-slate-100  "
            onClick={() => { onClick(sensor.id) }} >
              <div className="  flex flex-row  items-center justify-start w-6/12  ">  
            <span className=" flex  mr-2 "><Cog6ToothIcon className="h-8  text-blue-500 group-hover:text-blue-400  " aria-hidden="true" />  </span>
            <span className="font-bold text-base text-center  text-blue-500 mr-2 ">{sensor.name}</span>
            <span className='text-sm font-medium text-center text-blue-500  mr-2'>"{sensor.comment}"</span>
            </div>
            <SensorRealData id={sensor.id} />
        </div>
    )
}

export default SensorRender