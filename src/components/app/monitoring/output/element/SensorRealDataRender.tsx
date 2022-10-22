import { SignalIcon } from "@heroicons/react/24/outline"

const SensorRealDataRender = ({ item }: any) => {
    return (
        <div className=" flex flex-row  items-center justify-center content-center w-7/12   border-2  border-sky-400 mt-1 mb-1 p-1 mx-2  ">
              <span className=" flex m-0 w-1/12 "><SignalIcon className="h-8  text-blue-500 group-hover:text-blue-400  " aria-hidden="true" />  </span>
            <span className='text-base font-medium text-end text-blue-500 ml-2 mr-2'> Дата: {item.date} </span>
            <span className='text-base font-medium text-end text-blue-500  mr-2'> Время: {item.time}</span>
            <span className='text-base font-medium text-end text-blue-500  mr-2'> Значение датчика: {item.value}   </span>
        </div>
    )
}

export default SensorRealDataRender