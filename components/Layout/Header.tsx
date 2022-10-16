import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ChainButton from '../ChainButton/index';
import { motion } from 'framer-motion'
// import { useTypewriter } from "react-simple-typewriter"


type Props = {}

const Header = (props: Props) => {
    // const [text, count] = useTypewriter({
    //     words: [
    //         `Created By InJoy Labs`
    //     ],
    //     delaySpeed: 2000,
    // })

    return (
        <header className='grid grid-cols-2 md:grid-cols-2 justify-between p-5'>
            <div className='flex items-center space-x-2 '>
                <img
                    className='rounded-full h-20 w-20'
                    src='https://i.imgur.com/vHZqwZF.png'
                    alt=''
                />
                <div className='items-center justify-center'>
                    <h1 className='text-xl text-white font-bold'>
                        NCKU EnJoy
                    </h1>
                    <p>
                        <ConnectButton.Custom>
                            {({
                                account,
                                openAccountModal,
                            }) => {
                                return (
                                    <button onClick={openAccountModal} type="button" className='text-xs text-emerald-500 truncate'>
                                        {account?.displayName}
                                        {account?.displayBalance
                                            ? <span className='underline decoration-white/50'>
                                                (${account?.displayBalance})
                                            </span>
                                            : <motion.div
                                                whileHover={{ scale: 1, rotate: 360 }}
                                                whileTap={{
                                                    scale: 0.9,
                                                    rotate: 360,
                                                    borderRadius: "100%"
                                                }}
                                                className="text-xs md:text-xl font-semibold py-2 text-transparent 
                                            bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 animate-pulse">
                                                <a href='https://about-greg.vercel.app/' target='_blank'>
                                                    <p>Created By InJoy Labs</p>
                                                </a>
                                            </motion.div>}
                                    </button>
                                )
                            }
                            }
                        </ConnectButton.Custom>
                    </p>
                </div>
            </div>
            <div className='ml-auto py-4'>
                <ChainButton />
            </div>
        </header>
    )
}

export default Header