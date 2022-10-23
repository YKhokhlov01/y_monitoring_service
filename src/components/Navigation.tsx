import { Fragment } from "react";
import { Disclosure, Menu} from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Мониторинг", to: "/home", current: false },
  { name: "Управление", to: "/control", current: false },
  { name: "Карта", to: "/map", current: false },
 /* { name: "Профиль", to: "/login", current: false },*/ ];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");}

const Navigation = () => {
  return (
    <Disclosure as="nav" className=" flex w-full items-center justify-around ">
      {({ open }) => (
        <>
          <div className="max-w-full w-full mx-auto flex justify-around px-2 sm:px-6 lg:px-8">
            <div className="relative flex w-full justify-around content-center ">
             <div className="absolute inset-y-0 left-0 flex items-center justify-around sm:hidden">
                {/* Mobile menu button*/}
              </div>
              <div className="flex w-10/12 items-center justify-between mx-auto  ">
                <div className=" hidden sm:block w-10/12  justify-center sm:ml-6">
                  <div className="flex  justify-around">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-xl font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex w-2/12 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-blue-400 flex  text-white text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <Link
                        to="/login"
                        className={classNames(
                          false
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-xl font-medium"
                        )}
                        aria-current={false ? "page" : undefined}
                      >
                     <UserIcon className="h-7 w-7" aria-hidden="true" />
                      </Link>
                      {/* Поменять иконку по необходимости */}
                     
                    </Menu.Button>
                  </div>                  
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navigation