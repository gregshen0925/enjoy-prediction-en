import React from 'react'
import { useAccount } from 'wagmi'
import Logout from './LogoutButton'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import LogoutButton from './LogoutButton';


type Props = {}

const Header = (props: Props) => {
    const { address } = useAccount()

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
                    <h1 className='text-l text-white font-bold'>
                        NCKU Lottery
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

                    {/* 
                    <p className='text-xs text-emerald-500 truncate'>
                        User: {address?.substring(0, 5)}...
                        {address?.substring(address.length, address.length - 5)}
                    </p> */}
                </div>
            </div>



            <div className='flex flex-col ml-auto text-right'>
                <LogoutButton />
            </div>


        </header>
    )
}

export default Header