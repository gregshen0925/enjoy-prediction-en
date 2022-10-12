import React, { useState } from 'react'
import type { NextPage } from 'next'
import Precidtion from '../../components/Prediction'
import Chart from '../../components/Chart'
import dynamic from 'next/dynamic';


type Props = {}
const SymbolOverviewNoSSR = dynamic(() => import("../../components/Chart"), { ssr: false });



const Stocks: NextPage = (props: Props) => {
    return (
        <div className='flex flex-col relative text-center 
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            {/* <h3 className='uppercase tracking-[20px] text-[#447de6] text-2xl'>
                &nbsp;NASDAQ
            </h3> */}
            <div className='absolute top-[5px]'>
                <SymbolOverviewNoSSR symbol='NDX' />
            </div>
            <div className='absolute top-[340px]'>
                <Precidtion />

            </div>


        </div>
    )
}

export default Stocks