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

    const { isLoading } = useContractRead({
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

    const { data, isSuccess, write } = useContractWrite(config)

    const handleClaim = () => {
        if (unclaimedCryptoReward) {
            write?.()
        }
        // if (unclaimedStockReward) {
        //     // claim from Stock pool
        // }
    }

    useEffect(() => {
        setTotalUnclaimedReward(unclaimedCryptoReward + unclaimedStockReward)
    }, [unclaimedCryptoReward, unclaimedStockReward])



    return (
        isLoading ? (
            <div className='text-white'>Loading...</div>
        ) : (
            totalUnclaimReward ?
                (
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
                ) : null
        )
    )
}

export default Claim