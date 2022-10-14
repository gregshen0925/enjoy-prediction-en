import React, { useState } from 'react'
import type { NextPage } from 'next'
import Percentage from '../../components/Percentage'

type Props = {}


const Info: NextPage = (props: Props) => {
    const isCrypto = true
    return (
        <div>
            {/* <div className='text-white'>Coming Soon</div> */}
            <Percentage isCrypto={isCrypto} />
        </div>
    )
}

export default Info