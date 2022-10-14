import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion'

interface Props { }

const ChainButton = (props: Props) => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
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
                                    <button onClick={openConnectModal} type="button" className='text-white 
                                    bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full py-2 px-3 font-semibold'>
                                        Connect
                                    </button>
                                );
                            }

                            if (chain?.unsupported) {
                                return (
                                    <button onClick={openChainModal} type="button" className='text-white bg-red-700 py-1 px-1 rounded font-bold text-xs'>
                                        Wrong Network
                                    </button>
                                );
                            }

                            return (
                                <div style={{ display: 'flex', gap: 12 }}>
                                    <button
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                        className='text-white py-2 px-2 text-sm rounded-full font-bold bg-gradient-to-r from-cyan-500 to-blue-500'
                                    >
                                        {chain?.hasIcon && (
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
                                        {chain?.name}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
}

export default ChainButton