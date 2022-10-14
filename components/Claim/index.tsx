import React from 'react'

type Props = {
    unclaimStock: number
    unclaimCrypto: number
}

const Claim = ({ unclaimCrypto, unclaimStock }: Props) => {
    const totalUnclaim = unclaimCrypto + unclaimStock

    const handleClaim = () => {
        if (unclaimCrypto) {
            // claim from Crypto pool
        }
        if (unclaimStock) {
            // claim from Stock pool
        }
    }

    if (unclaimCrypto || unclaimStock) {
        return (
            <div>
                <div className='text-white font-bold'>
                    Congrats!! You've got {totalUnclaim} USDT to claim!!
                </div>
                <div className='px-1 py-2'>
                    <button
                        className='text-white rounded-full bg-[#2405ef] py-2 px-4 font-semibold'
                        onClick={handleClaim}
                    >
                        Claim
                    </button>
                </div>

            </div>
        )
    }
    else {
        return (
            <div>
                hi
            </div>
        )
    }
    // if (unclaimCrypto) {
    //     return (
    //         <div>
    //             <div className='text-white'>
    //                 You've got {unclaimCrypto} USDT to claim
    //             </div>
    //         </div>
    //     )
    // }
    // if (unclaimStock) {
    //     return (
    //         <div>
    //             <div className='text-white'>
    //                 You've got {unclaimStock} USDT to claim
    //             </div>
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div></div>
    //     )
    // }

}

export default Claim