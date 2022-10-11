import React, { useState } from 'react'
import type { NextPage } from 'next'

type Props = {}


const Crypto: NextPage = (props: Props) => {
    return (
        <div>
            <div className='flex justify-center text-white font-semibold py-[30px] px-10 text-xl'>
                這一頁就是賭隔天比特幣是漲還是跌的啦，我還在想應該要什麼時間開講，真的很需要創意給我一點創意好嗎
            </div>
            <div className='text-white px-10 font-semibold text-center text-xl'>順帶一提，這個app從誕生到現在只有2天，如果發現什麼bug，記得報錯！</div>
        </div>
    )
}

export default Crypto