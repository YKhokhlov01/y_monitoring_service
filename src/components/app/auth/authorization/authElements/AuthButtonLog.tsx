import { LockClosedIcon } from '@heroicons/react/20/solid'


const AuthButtonLog = () => {
  return (
    <button
    type="submit"
    className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <LockClosedIcon className="h-5 w-5 text-blue-400 group-hover:text-blue-400" aria-hidden="true" />
    </span>
   Войти
  </button>
  )
}
export default AuthButtonLog