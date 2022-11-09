import React, { useEffect, useState, useMemo } from 'react'
import type { NextPage } from 'next'
import Precidtion from '../../components/Prediction'
import dynamic from 'next/dynamic';

import { useAccount } from 'wagmi'
import Countdown from '../../components/Countdown';
import PoolInfo from '../../components/PoolInfo';




const SymbolOverviewNoSSR = dynamic(() => import("../../components/Chart"), { ssr: false });

type Props = {}

const Crypto: NextPage = (props: Props) => {
    const { address } = useAccount()
    const oneMin = 60000;
    const oneHour = 60 * oneMin;
    const oneDay = 24 * oneHour;
    const timeOffset = 11 * oneHour;
    const today1900 = Math.floor(new Date().valueOf() / oneDay) * oneDay + timeOffset

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
                />
            </div>
            <PoolInfo
                isCrypto={true}
            />
        </div>
    )
}

export default Crypto