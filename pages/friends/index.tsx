import React, { useState } from 'react'
import type { NextPage } from 'next'

type Props = {}


const Friends: NextPage = (props: Props) => {
    return (
        <div>
            <div className='flex text-white font-semibold py-[30px] px-10 text-center justify-center text-xl'>
                說不定會整合之前跟朋友一起比 Polygon-Buidl-It 黑客松得小獎的作品，讓各位每天可以mint NFT(Soulbound Token)，將個人資訊記錄在裡面，每天會推薦一個好友給你哦！
            </div>
            <div className='text-white px-10 font-semibold text-center animate-pulse py-[50px] text-xl'>
                <a href='https://devpost.com/software/3card' target='_blank'>想看作品介紹的話點我</a>

            </div>
            <div className='text-white px-10 font-semibold text-l text-center'>順帶一提，Discord裡面那個幫各位隨機找吃的 Bot，如果有想要新增什麼功能也歡迎提出</div>

        </div>
    )
}

export default Friends