import { Tooltip, Button } from "@material-tailwind/react";
import { placement } from "@material-tailwind/react/types/components/menu";
import { content } from "@material-tailwind/react/types/components/popover";
import { SetStateAction, Dispatch } from 'react';

// seteditTrue={seteditTrue} editTrue={editTrue} type={"click"} Content={ContentEdit} Placement={PlacementEdit} icons ={IconEdit}
interface IButtonRender {
editTrue:boolean,
seteditTrue:Dispatch<SetStateAction<boolean>>,
type:"button"|"submit",
Content: content,
Placement: placement,
icons: React.ReactNode
}


const ButtonRender = (props: IButtonRender) => {
  return (
    
    <Tooltip className=' text-blue-400 text-base bg-stone-100' content={props.Content} placement={props.Placement}>
    <Button
    type={props.type}
    className="group relative flex rounded-md border border-transparent justify-center  items-center ml-2  h-8  w-12 bg-blue-200  text-sm font-medium text-white hover:bg-blue-300  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
    onClick={() => props.seteditTrue(!props.editTrue)}>
    <span className=" flex m-0 ">
     {props.icons}
    </span> 
  </Button>
  </Tooltip>


  )
}

export default ButtonRender