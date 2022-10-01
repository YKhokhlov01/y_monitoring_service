import axios from 'axios'
import AuthLogin from './authorization/AuthLogin';
import { SetStateAction, Dispatch } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthButtonLog from './authorization/authElements/AuthButtonLog';
import AuthHead from './authorization/authElements/AuthHead';
import AuthHappyLogin from './authorization/authElements/AuthHappyLogin';
import AuthHello from './authorization/authElements/AuthHello';
import AuthErrorLogin from './authorization/authElements/AuthErrorLogin';
import AuthRememberLogin from './authorization/AuthRememberLogin';
import ApiUrl from "../../../API/api";
import Endpoints from "../../../API/endpoints";
import AuthButtonLogout from './authorization/authElements/AuthButtonLogout';

interface IAuth {
    accessToken: string;
    setAccessToken: Dispatch<SetStateAction<string>>;
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
};
type Inputs = {
    username: string,
    password: string,
    checked: boolean,
};

const Auth = ({ accessToken, setAccessToken, username, setUsername }: IAuth) => {
    // React Hook Form установка состояния
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            username: '',
            password: '',
            checked: false,
        }
    });
    // Установка State для компонентов
    const navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState('');
    const [isHello, setisHello] = useState(false);
    // Основная функция Логина
    const onSubmit: SubmitHandler<Inputs> = async (data) => {        
        setErrorLogin('')
        let start = ''
        await axios.post(ApiUrl + Endpoints.AUTH.LOGIN, {
            username: data.username,
            password: data.password
        }).then(response => {
            let check = JSON.stringify(data.checked);
            localStorage.setItem('checked', check);
            localStorage.setItem('accessToken', JSON.parse(check) ? response.data.access_token : '');
            localStorage.setItem('name', JSON.parse(check) ? data.username : '');
            setAccessToken(response.data.access_token);
            start = response.data.access_token
            setUsername(data.username)
        }).catch(function (error) {
            setErrorLogin(error.response.data)
        })
        //Запуск дополнительного приветствия и тайминга на переход на страницу мониторинга
        console.log('start1', start)
        if (start.length > 0) {
            console.log('start', start)
            setisHello(true)
            setTimeout(() => {
                setisHello(false)
                navigate('/home');
            }, 4000);
        }
    };
    // Функция logout
    function logout() {
        setAccessToken('');
        localStorage.accessToken = '';
        localStorage.name = '';
        localStorage.setItem('checked', JSON.stringify(false));
    };
    console.log('accessToken', accessToken)
    return (
        <>
            <div className="flex min-h-full w-full items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 flex flex-col item-center ">
                    {accessToken.length > 3 ? (
                        <AuthHead head={'Здравствуйте,'} username={username} />
                    ) : (
                        <AuthHead head={'Войти в аккаунт'} />
                    )}
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                        {accessToken.length > 3 ? (
                            <AuthHappyLogin />) : (
                            <AuthLogin register={register} />
                        )}
                        {isHello && <AuthHello />}
                        {Object.keys(errorLogin).length > 1 && <AuthErrorLogin />}
                        {errors.username && <p className='text-center text-red-800'> Введите логин от 4 до 6 символов</p>}
                        {errors.password && <p className='text-center text-red-800'> Введите пароль от 4 до 6 символов </p>}
                        {accessToken.length === 0 && <AuthRememberLogin register={register} />}
                        {accessToken.length > 3 ? (
                            <AuthButtonLogout log={'Выйти'} onLog={logout} />
                        ) : (
                            <AuthButtonLog />
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Auth