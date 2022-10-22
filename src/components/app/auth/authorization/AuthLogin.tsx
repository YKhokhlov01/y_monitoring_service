//import { UseFormReturn } from 'react-hook-form';
import {UseFormRegister } from 'react-hook-form'
type Inputs = {
    username: string,
    password: string,  
    checked: boolean,
};
 interface IProps {
    register: UseFormRegister<Inputs>
 }

const AuthLogin = ({register}:IProps) => {

  return (
    <>  
    <input type="hidden" name="remember" defaultValue="true"   /> 
     <div className="-space-y-px rounded-md shadow-sm ">
       <div>
         <label htmlFor="username" className="sr-only">
           login
         </label>
         <input 
           id="username"
           type="username"           
           className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
           placeholder="login"
           {...register("username", { required: true, maxLength: 6, minLength: 4 } )}
            
         />
       </div>
       <div>
         <label htmlFor="password" className="sr-only">
           Password
         </label>
         <input 
           id="password"           
           type="password"
           autoComplete="current-password"
           required
           className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
           placeholder="password"
           {...register("password", { required: true, maxLength: 6, minLength: 4 } )}
         />
       </div>
     </div>  
  </>
  )
}

export default AuthLogin