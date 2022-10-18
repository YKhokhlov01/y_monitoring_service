import { Link } from "react-router-dom";

const Home = () => {
    const navigation = [
        { name: "Мониторинг", to: "/home", current: false },
        { name: "Управление", to: "/control", current: false },
        { name: "Карта", to: "/map", current: false },
        { name: "Профиль", to: "/login", current: false }, ];
  return (
<div className="flex flex-col  justify-center items-center content-center w-full bg-slate-100 box-border mr-2 ml-2 "> 
<h2 className="text-4xl text-blue-500 mb-2 " >Разделы  приложения</h2>
<ul className="h-1/2">
        {navigation.map((user) => (
          <li className="text-2xl text-blue-300  " key={user.name}>
            <Link to={user.to}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home