import React from 'react'

interface Props {
    title: string
    isActive?: boolean
}

const NavButton = ({ title, isActive }: Props) => {
    return (
        <button className={`${isActive && "bg-[#1d3bb4]"
            } hover:bg-[#036756] text-white py-2 px-4
            rounded font-bold`}
        >
            {title}
        </button>
    )
}

export default NavButton