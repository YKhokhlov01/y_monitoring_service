import { Tooltip, Button } from "@material-tailwind/react";
import { placement } from "@material-tailwind/react/types/components/menu";
import { content } from "@material-tailwind/react/types/components/popover";
import { SetStateAction, Dispatch } from 'react';

// seteditTrue={seteditTrue} editTrue={editTrue} type={"click"} Content={ContentEdit} Placement={PlacementEdit} icons ={IconEdit}
type Arg = [
  type: "button" | "submit",
  Content: content,
  Placement: placement,
  icons: React.ReactNode
]

interface IButtonRender {
  editTrue: boolean,
  seteditTrue: Dispatch<SetStateAction<boolean>>,
  arg: Arg,
}


const ButtonRender = ({ seteditTrue, editTrue, arg }: IButtonRender) => {
  let [type, Content, Placement, icons] = arg
 
  return (

    <Tooltip className=' text-blue-400 text-base bg-stone-100' content={Content} placement={Placement}>
      <Button
        type={type}
        className="group relative flex rounded-md border border-transparent justify-center  items-center ml-2  h-8  w-12 bg-blue-200  text-sm font-medium text-white hover:bg-blue-300  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
        onClick={() => seteditTrue(!editTrue)}>
        <span className=" flex m-0 ">
          {icons}
        </span>
      </Button>
    </Tooltip>


  )
}

export default ButtonRender