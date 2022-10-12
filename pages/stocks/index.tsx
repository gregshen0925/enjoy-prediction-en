import React, { useState } from 'react'
import type { NextPage } from 'next'
import Chart from '../../components/Chart'
import Precidtion from '../../components/Prediction'

type Props = {}


const Stocks: NextPage = (props: Props) => {
    return (
        <div className='flex flex-col relative text-center 
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-[20px] uppercase tracking-[20px] text-[#447de6] text-2xl'>
                &nbsp;NASDAQ
            </h3>
            <div className='absolute top-[100px]'>
                <Chart />
            </div>
            <div className='flex justify-center absolute top-[220px]'>
                <h1 className='text-xl font-semibold text-white truncate tracking-[3px]'>
                    明日預測...
                </h1>
            </div>

            <div className='absolute top-[270px]'>
                <Precidtion />

            </div>


        </div>
    )
}

export default Stocks