import React, { useState } from 'react'
import { useContractRead } from 'wagmi';
import ContractABI from '../../EnJoyPrediction.json'
import { BigNumber, utils } from 'ethers'



type Props = {
    isCrypto?: Boolean
    isStock?: Boolean
    totalPoolAmount: BigNumber
    longPool: BigNumber

}



const PoolInfo = ({ isCrypto, isStock, totalPoolAmount, longPool }: Props) => {

    const timestamp = Math.floor(new Date().valueOf() / 1000)

    const pad = BigNumber.from(10).pow(12);

    const formatUSDT = (amount: BigNumber): string => {
        return utils.formatEther(amount.mul(pad))
    }

    if (isCrypto) {
        const percentage = totalPoolAmount?.eq(0) ? 50 : (longPool.mul(10000).div(totalPoolAmount).toNumber() / 100)
        return (
            <div>
                <div>
                    {/* <div className='text-white font-semibold' >
                        您預測{" "}{bet}{" "}USDT明天會{moonOrDust}
                    </div> */}
                    <div className='flex-cols-3 flex items-center justify-center'>
                        <div className='text-white font-semibold px-2'>
                            {percentage}%
                        </div>
                        <div>
                            <div className="w-[100px] bg-red-600 h-5 rounded-full">
                                <div className="bg-green-600 h-5 rounded-full" style={{ width: `${percentage.toFixed(2)}%` }}></div>
                            </div>
                        </div>
                        <div className='text-white font-semibold px-2'>
                            {(100 - percentage).toFixed(2)}%
                        </div>
                    </div>
                </div>
                <div className='text-white font-semibold'>
                    當前總金額為{" "}{formatUSDT(totalPoolAmount)}{" "}USDT
                </div>
            </div>
        )
    }
    else if (isStock) {
        // const totalCryptoPrediction = getPredictMoonAmount+getPredictDustAmount
        // const percentage = ((getPredictMoonAmount/totalCryptoPrediction)*100).toFixed(2)
        const totalCryptoAmount = 1000
        const percentage = 30.27
        const moonOrDust = "Moon"
        const bet = 3
        return (
            <div className='flex-cols-3 flex items-center justify-center'>
                <div className='text-white text px-2'>
                    {percentage}%
                </div>
                <div>
                    <div className="w-[100px] bg-red-600 h-5 rounded-full">
                        <div className="bg-green-600 h-5 rounded-full" style={{ width: `${100 - percentage}%` }}></div>
                    </div>
                </div>
                <div className='text-white font-semibold px-2'>
                    {100 - percentage}%
                </div>
                <div className='text-white font-semibold'>
                    當前總金額為{" "}{formatUSDT(totalPoolAmount)}{" "}USDT
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default PoolInfo