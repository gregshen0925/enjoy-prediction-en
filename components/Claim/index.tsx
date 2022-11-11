import React, { useEffect, useState } from 'react'
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import ContractABI from '../../EnJoyPrediction.json'
import { BigNumber, utils } from 'ethers'



type Props = {}

const Claim = (props: Props) => {
    const [unclaimedCryptoReward, setUnclaimedCryptoReward] = useState<number>(0)
    const [unclaimedStockReward, setUnclaimedStockReward] = useState<number>(0)
    const [totalUnclaimReward, setTotalUnclaimedReward] = useState<number>(0)
    const { address } = useAccount()

    useContractRead({
        addressOrName: '0x4078FFb52019277AA08fa83720cE3EfC38Be7327',
        contractInterface: ContractABI.abi,
        functionName: 'getPlayerUnclaimReward',
        args: [address],
        onSuccess(claimableReward) {
            setUnclaimedCryptoReward(claimableReward.toNumber())
        },
    })

    const { config } = usePrepareContractWrite({
        addressOrName: '0x4078FFb52019277AA08fa83720cE3EfC38Be7327',
        contractInterface: ContractABI.abi,
        functionName: 'claim',
    })

    const { data, isLoading, isSuccess, write } = useContractWrite(config)

    const handleClaim = async () => {
        if (unclaimedCryptoReward) {
            () => write?.()
        }
        if (unclaimedStockReward) {
            // claim from Stock pool
        }
    }

    useEffect(() => {
        setTotalUnclaimedReward(unclaimedCryptoReward + unclaimedStockReward)
    }, [unclaimedCryptoReward, unclaimedStockReward])

    if (unclaimedCryptoReward) {
        return (
            <div>
                <div className='text-white font-bold'>
                    Congrats!! You've got {totalUnclaimReward} USDT to claim!!
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