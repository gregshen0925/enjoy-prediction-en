import React, { useEffect, useState, useMemo } from 'react'
import type { NextPage } from 'next'
import Precidtion from '../../components/Prediction'
import dynamic from 'next/dynamic';
import { useContract, useContractRead } from 'wagmi'
import ContractABI from '../../EnJoyPrediction.json'
import { useAccount } from 'wagmi'
import Countdown from '../../components/Countdown';
import PoolInfo from '../../components/PoolInfo';
import { BigNumber, utils } from 'ethers'




const SymbolOverviewNoSSR = dynamic(() => import("../../components/Chart"), { ssr: false });

type Props = {}

const Crypto: NextPage = (props: Props) => {
    const { address } = useAccount()
    // from 0~5
    const [stakeAmount, setStakeAmount] = useState<number>(0)
    // 1 means moon, 2 means dust
    const [prediction, setPrediction] = useState<number>(0)

    const [totalPoolAmount, setTotalPoolAmount] = useState<BigNumber>(BigNumber.from(0))
    const [playerCount, setPlayerCount] = useState<number>(0)
    const [longPool, setLongPool] = useState<BigNumber>(BigNumber.from(0))

    const oneMin = 60000;
    const oneHour = 60 * oneMin;
    const oneDay = 24 * oneHour;
    const timeOffset = 11 * oneHour;
    const today1900 = Math.floor(new Date().valueOf() / oneDay) * oneDay + timeOffset
    const timestamp = Math.floor(new Date().valueOf() / 1000)

    useContractRead({
        addressOrName: '0x4078FFb52019277AA08fa83720cE3EfC38Be7327',
        contractInterface: ContractABI.abi,
        functionName: 'getPlayerStakeInfo',
        args: [address, timestamp],
        onSuccess(data) {
            const { stakeAmount, prediction } = data
            setStakeAmount(stakeAmount)
            setPrediction(prediction)
        },
    })

    useContractRead({
        addressOrName: '0x4078FFb52019277AA08fa83720cE3EfC38Be7327',
        contractInterface: ContractABI.abi,
        functionName: 'getTableInfo',
        args: [timestamp],
        onSuccess(data) {
            const { result, startPrice, longPool, shortPool, playerCount } = data
            setTotalPoolAmount(BigNumber.from(longPool).add(shortPool))
            setLongPool(longPool)
            setPlayerCount(playerCount)
        },
        cacheTime: 20_000,
    })

    return (
        <div className='grid text-center items-center'>
            {/* <h3 className='uppercase tracking-[20px] text-[#447de6] text-2xl'>
                &nbsp;Bitcoin
            // </h3> */}
            <div className='relative pt-5 md:pt-10'>
                <Countdown
                    settleTime={today1900}
                />
            </div>
            <div className='relative py-5 md:py-10'>
                <SymbolOverviewNoSSR symbol='BTCUSD' />
            </div>
            <div className='relative items-center'>
                <Precidtion
                    isCrypto={true}
                    stakeAmount={stakeAmount}
                    prediction={prediction}
                />
            </div>
            <PoolInfo
                isCrypto={true}
                totalPoolAmount={totalPoolAmount ?? 0}
                longPool={longPool ?? 0}
            />
        </div>
    )
}

export default Crypto