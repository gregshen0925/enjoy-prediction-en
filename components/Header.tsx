import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ChainButton from './ChainButton';


type Props = {}

const Header = (props: Props) => {

    return (
        <header className='grid grid-cols-2 md:grid-cols-5 justify-between
        items-center p-5'>
            <div className='flex items-center space-x-2'>
                <img
                    className='rounded-full h-20 w-20'
                    src='https://i.imgur.com/vHZqwZF.png'
                    alt=''
                />
                <div>
                    <h1 className='text-xl text-white font-bold truncate'>
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
                                            ? ` (${account?.displayBalance})`
                                            : ''}
                                    </button>
                                )
                            }
                            }
                        </ConnectButton.Custom>
                    </p>
                </div>
            </div>



            <div className='flex flex-col ml-auto text-right'>
                <ChainButton />
            </div>


        </header>
    )
}

export default Header