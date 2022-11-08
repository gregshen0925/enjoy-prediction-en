import React, { useState } from 'react'
import type { NextPage } from 'next'
import Precidtion from '../../components/Prediction'
import Chart from '../../components/Chart'
import dynamic from 'next/dynamic';


type Props = {}
const SymbolOverviewNoSSR = dynamic(() => import("../../components/Chart"), { ssr: false });



const Stocks: NextPage = (props: Props) => {
    // query if user already predicted stocks today
    // const predicted =

    return (
        <div className='grid text-center items-center'>
            {/* <h3 className='uppercase tracking-[20px] text-[#447de6] text-2xl'>
                &nbsp;NASDAQ
            </h3> */}
            <div className='relative pt-5 md:pt-20'>
                <SymbolOverviewNoSSR symbol='NDX' />
            </div>

            <div className='relative items-center py-10'>
                <Precidtion
                    isStock={true}
                // Predicted={predicted}
                />
            </div>

        </div>
    )
}

export default Stocks