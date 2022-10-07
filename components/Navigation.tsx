import React, { useState } from 'react'
import { FaBtc, FaMoneyBillAlt, FaHome, FaInfo, FaUserFriends } from "react-icons/fa"
import IconType from 'react-icons'

type Props = {}


const Navigation = (props: Props) => {

    const Menus = [
        { name: "Home", icon: <FaHome />, dis: "translate-x-0" },
        { name: "Stocks", icon: <FaMoneyBillAlt />, dis: "translate-x-16" },
        { name: "Crypto", icon: <FaBtc />, dis: "translate-x-32" },
        { name: "Info", icon: <FaInfo />, dis: "translate-x-48" },
        { name: "Card", icon: <FaUserFriends />, dis: "translate-x-64" },
    ]

    const [active, setActive] = useState(0)

    return (
        <div className="bg-gray-200 max-h-[4.4rem] px-6 rounded-t-xl">
            <ul className="flex relative">
                <span
                    className={`bg-blue-600/50 duration-500 ${Menus[active].dis} border-4 border-black h-16 w-16 absolute -top-5 rounded-full`}
                >
                    <span
                        className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
              rounded-tr-[11px] shadow-myShadow1"
                    ></span>
                    <span
                        className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
              rounded-tl-[11px] shadow-myShadow2"
                    ></span>
                </span>
                {Menus.map((menu, i) => (
                    <li key={i} className="w-16">
                        <a
                            className="flex flex-col text-center pt-6"
                            onClick={() => setActive(i)}
                        >
                            <span
                                className={`text-xl cursor-pointer px-5 duration-800 ${i === active && "-mt-5 text-black"
                                    }`}
                            >
                                {menu.icon}
                                {/* {active === 0 && <FaHome />}
                                {active === 1 && <FaMoneyBillAlt />}
                                {active === 2 && <FaBtc />}
                                {active === 3 && <FaInfo />}
                                {active === 4 && <FaUserFriends />} */}

                            </span>
                            <span
                                className={` ${active === i
                                    ? "translate-y-5 duration-700 opacity-100 font-semibold"
                                    : "opacity-0 translate-y-10"
                                    } `}
                            >
                                {menu.name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation