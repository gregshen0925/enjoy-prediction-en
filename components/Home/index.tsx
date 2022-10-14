import { NextPage } from "next";
import Head from "next/head";
// import { useAccount } from 'wagmi'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Claim from "../Claim";
import { useState } from 'react'



interface Props {

}

const Home: NextPage<Props> = (props: Props) => {

    // const UnclaimCryptoAmount = getUnclaimCryptoAmountFromContract
    // const UnclaimStockAmount = getUnclaimStockAmountFromContract
    const unclaimCryptoAmount = 0
    const unclaimStockAmount = 0


    return (
        <div className="text-center">
            <Head>
                <title>NCKU EnJoy</title>
            </Head>
            <div className="flex text-white justify-center text-3xl">成大區塊鏈與金融科技社</div>
            <div className="text-[#4fe0d9] font-semibold py-2 px-10">
                <span>這是一個讓學生們可以學習、交流的成大社團，11/23將在校內舉辦大型說明會說明詳細規劃</span>
                <Cursor cursorColor="#4fe0d9" />
            </div>
            <div>
                {(unclaimCryptoAmount || unclaimStockAmount) && <Claim unclaimCrypto={unclaimCryptoAmount} unclaimStock={unclaimStockAmount} />}
            </div>
        </div>
    )
}

export default Home
