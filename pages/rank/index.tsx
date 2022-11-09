import React, { useState } from 'react'
import type { NextPage } from 'next'
import Percentage from '../../components/PoolInfo'

type Props = {}


const Info: NextPage = (props: Props) => {
    // const isCrypto = true
    return (
        <div className='pt-10'>
            <div className='text-white font-bold'>未來會放上預測者收益排名，可能每個月刷新一次吧，至於獎勵...再想想看</div>
            {/* <Percentage isCrypto={isCrypto} /> */}
        </div>
    )
}

export default Info