import {UseFormRegister } from 'react-hook-form'

type Inputs = {
    username: string,
    password: string,  
    checked: boolean,
};
interface IProps {
    register: UseFormRegister<Inputs>
 };


const AuthRememberLogin = ({register}:IProps) => {
  return (
    <div className="flex items-center justify-between">
    <div className="flex items-center">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        {...register("checked")}

      />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-900">
        Запомнить меня
      </label>
    </div>
    </div>
  )
}

export default AuthRememberLogin