import { NextPage } from "next";
import Head from "next/head";
// import { useAccount } from 'wagmi'
import Claim from "../Claim";




interface Props {

}

const Home: NextPage<Props> = (props: Props) => {




    return (
        <div className="text-center">
            <Head>
                <title>EnJoy Prediction</title>
            </Head>
            <Claim />
            <div className="pt-10 flex text-white justify-center text-xl md:text-3xl">預測明天NASDAQ或BTC明天是漲或跌的小遊戲</div>
            <div className="text-[#43c08c] font-semibold py-2 px-10 text-left space-y-2 max-w-3xl">
                <div>1. 最低1USDT、最高5USDT，贏的一邊獲得另一邊的籌碼，使用前請先學習如何使用區塊鏈錢包並切換到Polygon鏈！</div>
                <div>2. 此App初衷是讓大家在體驗刺激小遊戲的同時，可以學習看K線、操作錢包，後續也會放上創建錢包、增加Polygon鏈的教學</div>
                <div>3. 未來可至Rank頁面查看最強預測專家</div>
                <div>4. 將來會將用戶資料結合SBT並開發抽卡交友功能</div>
            </div>
            <div>黑色的字，想不到吧</div>
        </div>
    )
}

export default Home
