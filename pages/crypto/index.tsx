import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Precidtion from '../../components/Prediction'
import dynamic from 'next/dynamic';
import { useContract } from 'wagmi'
import ContractABI from '../../EnJoyPrediction.json'
import { useContractRead } from 'wagmi'
import { useAccount } from 'wagmi'
import Countdown from '../../components/Countdown';


const SymbolOverviewNoSSR = dynamic(() => import("../../components/Chart"), { ssr: false });

type Props = {}

const Crypto: NextPage = (props: Props) => {
    const { address } = useAccount()
    // from 0~5
    const [stakeAmount, setStakeAmount] = useState<number>(0)
    // 1 means moon, 2 means dust
    const [prediction, setPrediction] = useState<number>(0)

    // useEffect(() => {
    //     const contractRead = useContractRead({
    //         addressOrName: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    //         contractInterface: ContractABI.abi,
    //         functionName: 'currentStakeInfo',
    //         args: [address],
    //         onSuccess(data) {
    //             const { amount, prediction } = data
    //             setStakeAmount(amount)
    //             setPrediction(prediction)
    //         },
    //     })

    // }, [address])

    return (
        <div className='grid text-center items-center'>
            {/* <h3 className='uppercase tracking-[20px] text-[#447de6] text-2xl'>
                &nbsp;Bitcoin
            // </h3> */}
            <div className='relative pt-5 md:pt-10'>
                <Countdown />
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
        </div>
    )
}

export default Crypto