import { useState } from 'react';
import ButtonRender from './ButtonRender';
import { ArrowUpOnSquareIcon,  WrenchIcon } from '@heroicons/react/24/outline'
//import { UseFormRegister } from 'react-hook-form'
/*
type Device = {
  id: number
  name: string
  comment: string
  latitude: number
  longitude: number
  userId: number
  deviceId: number
  };*/

interface IRenderElement {
  register:any //UseFormRegister<Device>,
  attribute: any,
  inputActive: string,
  inputNoActive: string,
};

// Стили для кнопоки
// Кнопка редактирование
//const ToolipEdit = 'text-blue-400 text-base bg-stone-100'
const ContentEdit ='Редактировать'
const PlacementEdit ='left'
const IconEdit =  <WrenchIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400  " aria-hidden="true" />

// Кнопка сохранение и отправка
//const ToolipEdit = 'text-blue-400 text-base bg-stone-100'
const ContentSave ='Сохранить и отправить'
const PlacementSave ='right'
const IconSave =  <ArrowUpOnSquareIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400  " aria-hidden="true" />

const RenderElement = ({ register, attribute, inputActive, inputNoActive }: IRenderElement) => {
  const [editTrue, seteditTrue] = useState(true);
  const classInput = editTrue ? inputNoActive : inputActive;
  return (
    <div className='flex flex-row h-10 w-11/12   justify-between content-center '>
      <input {...register(attribute)} readOnly={editTrue} className={classInput} />
      <div className='flex flex-row justify-center content-center items-center w-1/5  '>
      <ButtonRender seteditTrue={seteditTrue} editTrue={editTrue} type={"button"} Content={ContentEdit} Placement={PlacementEdit} icons ={IconEdit}  />
      <ButtonRender seteditTrue={seteditTrue} editTrue={editTrue} type={"submit"} Content={ContentSave} Placement={PlacementSave}  icons ={IconSave}  />
      </div>
      </div>
  )
}

export default RenderElement