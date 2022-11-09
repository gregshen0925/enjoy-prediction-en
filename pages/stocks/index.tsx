import React, { useState } from 'react'
import type { NextPage } from 'next'
import Precidtion from '../../components/Prediction'
import dynamic from 'next/dynamic';
import Countdown from '../../components/Countdown/index';



type Props = {}
const SymbolOverviewNoSSR = dynamic(() => import("../../components/Chart"), { ssr: false });



const Stocks: NextPage = (props: Props) => {


    const oneMin = 60000;
    const oneHour = 60 * oneMin;
    const oneDay = 24 * oneHour;
    const timeOffset = 14.5 * oneHour;
    const today2230 = Math.floor(new Date().valueOf() / oneDay) * oneDay + timeOffset

    // query if user already predicted stocks today
    // const predicted =

    return (
        <div className='grid text-center items-center'>
            {/* <h3 className='uppercase tracking-[20px] text-[#447de6] text-2xl'>
                &nbsp;NASDAQ
            </h3> */}
            <div className='relative pt-5 md:pt-10'>
                <Countdown
                    settleTime={today2230}
                />
            </div>
            <div className='relative py-5 md:py-10'>
                <SymbolOverviewNoSSR symbol='NDX' />
            </div>

            <div className='relative items-center'>
                <Precidtion
                    isStock={true}
                // Predicted={predicted}
                />
            </div>

        </div>
    )
}

export default Stocks