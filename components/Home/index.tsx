import { NextPage } from "next";
import Head from "next/head";
// import { useAccount } from 'wagmi'
import Claim from "../Claim";



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
                <title>EnJoy Precidtion</title>
            </Head>
            <div className="pt-10 flex text-white justify-center text-3xl">預測明天NASDAQ或BTC明天是漲或跌的小遊戲</div>
            <div className="text-[#4fe0d9] font-semibold py-2 px-10">
                <span>最低1USDT、最高5USDT，贏的一邊獲得另一邊的籌碼，使用前請先學習如何使用區塊鏈錢包並切換到Polygon鏈！</span>
            </div>
            <div>
                {(unclaimCryptoAmount || unclaimStockAmount) && <Claim unclaimCrypto={unclaimCryptoAmount} unclaimStock={unclaimStockAmount} />}
            </div>
        </div>
    )
}

export default Home
