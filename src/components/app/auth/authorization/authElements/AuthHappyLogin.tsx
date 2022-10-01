import { CheckCircleIcon } from '@heroicons/react/20/solid'

const AuthHappyLogin = () => {
  return (  
    <div className='w-full  flex flex-col justify-start items-center '>
      <p className=" inset-y-0 left-0 flex items-center ">
      <CheckCircleIcon className="h-14 w-14 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
    </p>
    </div>
  )
}

export default AuthHappyLogin