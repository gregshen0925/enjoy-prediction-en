import React from 'react'
import { useDisconnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit';


interface Props { }

const LogoutButton = (props: Props) => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button onClick={openConnectModal} type="button">
                                        Connect Wallet
                                    </button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                    <button onClick={openChainModal} type="button" className='text-white bg-red-700 py-2 px-3 rounded font-bold text-xs'>
                                        Wrong network
                                    </button>
                                );
                            }

                            return (
                                <div style={{ display: 'flex', gap: 12 }}>
                                    <button
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                        className='text-white py-2 px-4 rounded-full font-bold bg-blue-700 text-xs'
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        style={{ width: 12, height: 12 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );



    // const { disconnect } = useDisconnect()


    // return (
    //     <ConnectButton.Custom>
    //         {({
    //             chain,
    //             openChainModal,
    //         }) => {
    //             if (chain?.unsupported) {
    //                 return (
    //                     <button onClick={openChainModal} type="button" className='text-white bg-red-700 py-2 px-3 rounded font-bold text-xs'>
    //                         Wrong network
    //                     </button>
    //                 );
    //             }
    //             else return (
    //                 <button
    //                     onClick={() => disconnect()}
    //                     className='text-white py-2 px-4 rounded font-bold bg-blue-700'
    //                 >
    //                     Logout
    //                 </button>
    //             )
    //         }}
    //     </ConnectButton.Custom>)
}

export default LogoutButton