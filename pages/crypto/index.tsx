import React, { useState } from 'react'
import type { NextPage } from 'next'
import Precidtion from '../../components/Prediction'
import dynamic from 'next/dynamic';
import Chart from '../../components/Chart';

const SymbolOverviewNoSSR = dynamic(() => import("../../components/Chart"), { ssr: false });



type Props = {}


const Crypto: NextPage = (props: Props) => {
    return (
        <div className='flex flex-col relative text-center 
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            {/* <h3 className='uppercase tracking-[20px] text-[#447de6] text-2xl'>
                &nbsp;Bitcoin
            </h3> */}
            <div className='absolute top-[5px]'>
                <SymbolOverviewNoSSR symbol='BTCUSD' />
            </div>
            <div className='absolute top-[320px] items-center justify-center'>
                <Precidtion isCrypto={true} />
            </div>


        </div>
        // <div className='flex flex-col h-screen relative text-center 
        // max-w-7xl px-10 justify-evenly mx-auto items-center'>
        //     <h3 className='absolute top-[20px] uppercase tracking-[20px] text-[#447de6] text-2xl'>
        //         &nbsp;Bitcoin
        //     </h3>
        //     <div className=''>
        //         <h4 className='text-white'>
        //             hi
        //         </h4>
        //         <Chart />

        //     </div>

        //     {/* <h3 className='absolute top-[250px] tracking-[5px] text-[#fafbfc] text-xs'>
        //         &nbsp;Tomorrow&nbsp;Will...
        //     </h3> */}
        // </div>
    )
}

export default Crypto