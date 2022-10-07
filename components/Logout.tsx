import React from 'react'
import { useDisconnect } from 'wagmi'


interface Props { }

const Logout = (props: Props) => {
    const { disconnect } = useDisconnect()


    return (
        <button
            onClick={() => disconnect()}
            className='text-white py-2 px-4 rounded font-bold bg-blue-700'
        >
            Logout
        </button>
    )

}

export default Logout