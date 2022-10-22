import { Link } from "react-router-dom";
const ErrorAuth = () => {
    return (
        <div className="flex flex-col gap-y-3.5  justify-center content-center self-center w-full h-full">
            <span className="text-red-500  text-4xl self-center  text-center">    Пожалуйста, Авторизуйтесь </span>
            <Link to="/login" className="text-blue-300  text-2xl self-center  text-center" >"Профиль"</Link>           
        </div>
    )
}

export default ErrorAuth