import { useState } from 'react';
import ButtonRender from './ButtonRender';
import { ArrowUpOnSquareIcon, WrenchIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { placement } from "@material-tailwind/react/types/components/menu";
import { content } from "@material-tailwind/react/types/components/popover";
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
  register: any //UseFormRegister<Device>,
  attribute: any,
  inputActive: string,
  inputNoActive: string,
};

type Arg = [
  type: "button" | "submit",
  Content: content,
  Placement: placement,
  icons: React.ReactNode
]

// Стили для кнопоки
// Кнопка редактирование
//const ToolipEdit = 'text-blue-400 text-base bg-stone-100'
const ContentEdit = 'Редактировать'
const PlacementEdit = 'left'
const IconEdit = <WrenchIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400  " aria-hidden="true" />
const TypeEdit = "button"
const Edit: Arg = [
  TypeEdit,
  ContentEdit,
  PlacementEdit,
  IconEdit,
];
// Кнопка сохранение и отправка
//const ToolipEdit = 'text-blue-400 text-base bg-stone-100'
const ContentSave = 'Сохранить и отправить'
const PlacementSave = 'right'
const IconSave = <ArrowUpOnSquareIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400  " aria-hidden="true" />
const TypeSave = "submit"

const Save: Arg = [
  TypeSave,
  ContentSave,
  PlacementSave,
  IconSave,
];
// Кнопка отмена 
const ContentUndo = 'Отменить'
const PlacementUndo = 'right'
const IconUndo = <XCircleIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400  " aria-hidden="true" />
const TypeUndo = "button"

const Undo: Arg = [
  TypeUndo,
  ContentUndo,
  PlacementUndo,
  IconUndo,
]

const RenderElement = ({ register, attribute, inputActive, inputNoActive }: IRenderElement) => {
  const [editTrue, seteditTrue] = useState(false);
  const classInput = editTrue ? inputNoActive : inputActive;
  return (
    <div className='flex flex-row h-10 w-11/12   justify-between content-center '>
     <input {...register(attribute)} readOnly={!editTrue} className={classInput} /> 
     
      {editTrue ? (
        <div className='flex flex-row justify-start content-center items-center w-2/12'>
          <ButtonRender seteditTrue={seteditTrue} editTrue={true} arg={Undo} />         
        </div>
        ) : (
        <div className='flex flex-row justify-end content-center items-center w-2/12  '>
          <ButtonRender seteditTrue={seteditTrue} editTrue={false} arg={Edit} />
        </div>)}
        <div className='flex  justify-start content-center items-center w-2/12 '>        
          <ButtonRender seteditTrue={seteditTrue} editTrue={true} arg={Save} />
        </div>
    </div>
  )
}

export default RenderElement