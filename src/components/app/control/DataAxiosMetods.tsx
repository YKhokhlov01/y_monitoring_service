import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios'
import ApiUrl from "../../../API/api";
import RenderElement from "./rendercontrol/RenderElement";
import  {useContext} from 'react';
import { AppContext } from '../../hooks/context';

type DataRender = {
  id: number,
  name: string,
  comment: string,
  latitude?: number,
  longitude?: number,
  userId?: number,
  deviceId?: number,
};
type ParamGadget = [
  urlGadget: string,  
  headerGadget: string,
  titleGadget: string,
  method: string,
];
interface IDataRender {
  accessToken: string,
  dataGadget: DataRender,
  paramGadget: ParamGadget
};
// Стили для Инпута 
const inputNoActive = "text-base font-extrabold text-start text-blue-700 w-10/12 pl-4  h-10";
const inputActive = "text-base font-extrabold text-start text-blue-700 w-10/12 pl-4 h-10 bg-stone-100 disabled:opacity-75 outline-none "
const inputNoActiveCom = "text-base font-bold  italic text-start text-blue-600 w-10/12 pl-4  h-10";
const inputActiveCom = "text-base font-bold italic  text-start text-blue-400 w-10/12 pl-4 h-10 bg-stone-100 disabled:opacity-75 outline-none "
const DataAxiosMetods = ({ dataGadget, accessToken, paramGadget }: IDataRender) => {
//Деструктуризации массива
  let[urlGadget, headerGadget, titleGadget, method] = paramGadget;
  const { setsuccessEdit } = useContext(AppContext);
//UseForm
   const { register, handleSubmit } = useForm<DataRender>({
    defaultValues: {
      id: dataGadget.id,
      name: dataGadget.name,
      comment: dataGadget.comment,
      latitude: dataGadget.latitude,
      longitude: dataGadget.longitude,
      userId: dataGadget.userId,
      deviceId: dataGadget.deviceId,
    }
  });
// Методы put и patch
  const urlPut = ApiUrl + urlGadget + dataGadget.id  
  const onSubmit: SubmitHandler<DataRender> = async data => {
    await axios({
      method: method,
      url: urlPut,
      headers: {
        Authorization: "Bearer " + accessToken
      },
      data
    }).then(function (response) {
      const allData = response.data
       setsuccessEdit(response);      
      console.log('allData', allData)
    }).catch(function (error) {
      console.log(error.response.data);
    })
  };
  return (
    <>
      <h4 className={headerGadget}>{titleGadget}{dataGadget.id}</h4>
      <form className="flex flex-col w-full mx-auto p-2 bg-stone-100 gap-y-2 divide-y divide-slate-200 justify-center items-center content-center  "
        onSubmit={handleSubmit(onSubmit)}>
        <RenderElement register={register} attribute={'name'} inputActive={inputActive} inputNoActive={inputNoActive} />
        <RenderElement register={register} attribute={'comment'} inputActive={inputActiveCom} inputNoActive={inputNoActiveCom} />        
      </form>
    </>
  )
}
export default DataAxiosMetods