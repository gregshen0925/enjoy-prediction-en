import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Cursor, useTypewriter } from "react-simple-typewriter"


type Props = {}



const Login = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Created By InJoy Labs`
        ],
        delaySpeed: 2000,
    })

    return (
        <div className='bg-[#000000]/95 min-h-screen flex flex-col
        items-center justify-center text-center'>
            <div className="flex flex-col items-center mb-10">
                <img
                    className='rounded-full h-40 w-40 md:h-56 md:w-56 mb-10'
                    src="https://i.imgur.com/vHZqwZF.png"
                    alt=""
                />
                <h1 className='text-5xl font-bold text-white'>
                    NCKU EnJoy
                </h1>
            </div>
            <div>
                <h2 className='text-white font-semibold' >Get started by logging in with your wallet</h2>
            </div>
            <div className='flex items-center p-8 animate-pulse'>
                <ConnectButton />
            </div>
            <h1 className="text-xl md:text-5xl font-semibold px-10 py-2 text-transparent  bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
                <span className="mr-3">&nbsp;&nbsp;&nbsp;{text}</span>
                <Cursor cursorColor="#447de6" />
            </h1>
        </div>
    )
}

export default Login