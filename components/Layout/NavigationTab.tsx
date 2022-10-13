import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaBtc, FaMoneyBillAlt, FaHome, FaInfo, FaUserFriends } from "react-icons/fa"


type Props = {
    // activeNum: number
    // changeActiveNum: Function
}

const Menus = [
    { name: "Home", icon: <FaHome />, dis: "translate-x-0", router: '/' },
    { name: "Stocks", icon: <FaMoneyBillAlt />, dis: "translate-x-16", router: '/stocks' },
    { name: "Crypto", icon: <FaBtc />, dis: "translate-x-32", router: '/crypto' },
    { name: "Rank", icon: <FaInfo />, dis: "translate-x-48", router: '/rank' },
    { name: "Friends", icon: <FaUserFriends />, dis: "translate-x-64", router: '/friends' },
]

enum Tab {
    Home,
    Stocks,
    Crypto,
    Info,
    Friends
}
const currentTab = (path: string): Tab => {
    switch (path) {
        case '/': return 0
        case '/stocks': return 1
        case '/crypto': return 2
        case '/info': return 3
        case '/friends': return 4
        default:
            return 0
    }
}

const NavigationTab = (props: Props) => {
    const { pathname } = useRouter()
    const [isActive, setActive] = useState<Tab>(currentTab(pathname))
    // const [selectedTab, setSelectedTab] = useState<Tab>(currentTab(pathname))
    // useEffect(() => {
    //     setSelectedTab((currentTab(pathname)))
    // }, [pathname])

    return (
        <div className="bg-gray-200 max-h-[4.4rem] px-6 rounded-t-xl">
            <ul className="flex relative">
                <span
                    className={`bg-blue-500 duration-200 ${Menus[isActive].dis} border-4 border-black h-16 w-16 absolute -top-5 rounded-full`}
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
                        <Link href={menu.router}>
                            <a
                                className="flex flex-col text-center pt-6"
                                onClick={() => {
                                    setActive(i)
                                }
                                }
                            >
                                <span
                                    className={`text-xl cursor-pointer px-[22px] duration-300 ${i === isActive && "-mt-5 text-black z-30"
                                        }`}
                                >
                                    {menu.icon}
                                </span>
                                <span
                                    className={` ${isActive === i
                                        ? "translate-y-5 duration-700 opacity-100 font-semibold"
                                        : "opacity-0 translate-y-10"
                                        } `}
                                >
                                    {menu.name}
                                </span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavigationTab