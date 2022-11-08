import React, { useState } from 'react'
import type { NextPage } from 'next'
import Precidtion from '../../components/Prediction'
import dynamic from 'next/dynamic';

const SymbolOverviewNoSSR = dynamic(() => import("../../components/Chart"), { ssr: false });


type Props = {}


const Crypto: NextPage = (props: Props) => {
    // query if user already predicted crypto today 
    // const predicted =

    return (
        <div className='grid text-center items-center'>
            {/* <h3 className='uppercase tracking-[20px] text-[#447de6] text-2xl'>
                &nbsp;Bitcoin
            </h3> */}
            <div className='relative pt-5 md:pt-20'>
                <SymbolOverviewNoSSR symbol='BTCUSD' />
            </div>
            <div className='relative items-center py-10'>
                <Precidtion
                    isCrypto={true}
                // Predicted={true}
                />
            </div>
        </div>
    )
}

export default Crypto