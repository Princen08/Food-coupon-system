import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {useNavigate} from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("currUser", "");
    navigate("/");
  }
  const handleClick = () => {
    navigate("/cart");
  }
  const handleHome = () => {
    navigate("/home");
  }
  let navigation = [
    { name: 'Home', href: '/home', current: true },
  ]
  return (
    <Disclosure as="nav" className="bg-gray-800" style={{fontFamily:"Inter", position:"fixed", top:0, width:"100%", zIndex:"2"}}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" style={{fontFamily:"Inter"}}>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md  text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center ml-2 sm:ml-2" style={{gap:10}}>
                  <Logo></Logo>
                  <h1 style={{ fontFamily: "Inter", color: "white", fontSize: "1.2rem" }}>Hunger Food</h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4" style={{ fontFamily: "Inter", cursor:"pointer" }}>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        // href={item.href}
                        onClick={handleHome}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"  style={{ gap: 30}}>
                <div style={{ marginTop: "0.4rem" }}>
                  <FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: "#ffffff", cursor:"pointer" }} onClick={handleClick}/>
                  {props.count > 0 && (<span className="count" style={{marginTop:"0.6rem"}}>{props.count}</span>)}
                </div>
                <div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl" style={{ fontFamily: "Inter", position: "inherit", backgroundColor: "#6066d1" }} onClick={handleLogout}>
                    Log Out
                  </button>
                </div>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2" style={{ fontFamily: "poppins" }}>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  // href={item.href}
                  onClick={handleHome}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}