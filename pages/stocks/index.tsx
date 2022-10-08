import React, { useState } from 'react'
import type { NextPage } from 'next'

type Props = {}


const Stocks: NextPage = (props: Props) => {
    return (
        <div>
            <div className='flex justify-center text-white font-semibold py-[30px] px-10 text-xl text-center'>
                這裡將會有一個小遊戲，讓各位每天賭隔天 NASDAQ 指數是漲還是跌，要參加的人會丟USDT到智能合約中，兩邊對賭，我不會抽任何錢，大家可以放心玩！也因為USDT是商品，不會犯法，我查過了
            </div>
            <div className='text-white px-10 font-semibold text-xl text-center'>做這個遊戲的初衷是因為他很簡單，但也蠻好玩的，希望可以吸引更多人學習使用MetaMask等等的區塊鏈錢包</div>
        </div>

    )
}

export default Stocks