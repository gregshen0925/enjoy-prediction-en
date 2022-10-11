import React, { useState } from 'react'
import type { NextPage } from 'next'

type Props = {}


const Info: NextPage = (props: Props) => {
    return (
        <div>
            <div className='flex justify-center text-white font-semibold py-[30px] px-10 text-xl'>
                這邊會紀錄兩個池子參與人數、總金額是多少，讓各位看看哪邊可以貪個高賠
            </div>
            <div className='text-white px-10 font-semibold text-xl flex justify-center'>
                如果有更好的idea拜託跟我說一下，不然這個app再幾天就會完成，我可能會懶得改哦！
            </div>
        </div>
    )
}

export default Info