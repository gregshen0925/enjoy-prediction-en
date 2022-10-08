import { NextPage } from "next";
import Head from "next/head";
import { useAccount } from 'wagmi'
import { Cursor, useTypewriter } from "react-simple-typewriter"





interface Props {

}

const Home: NextPage<Props> = (props: Props) => {
    const { address } = useAccount()
    // if (!address) return <Login />
    const [text, count] = useTypewriter({
        words: [
            `大家好，請容許我用比較奇怪的方式介紹這個社團`,
            `哦對了不自我介紹一下感覺也蠻怪的，但我不佔用這邊版面，有興趣的話可以點上方的Created By InJoy Labs`,
            `言歸正傳，在畢業後，我深感在學校內與在業界做事方式的不同，南北資源的差異也令我歎為觀止，`,
            `我不禁開始想，如果在學時有個社群能夠讓志同道合的學生們互相交流、學習，也同時利用 Discord 的方便性，讓遠在北方的學長姐們可以分享更多經驗、資訊給學弟妹們那就好了`,
            `幸運的是，我找到一些厲害的同學們協助我完成這件事，希望現在在看這篇的你，也能成為其中一員`,
            `區塊鏈作為近年來較吸引人的主題之一，大家一定很想揭開它的神秘面紗`,
            `而要學習區塊鏈，可能也離不開DeFi，既然要講解金融，那乾脆也開個金融組好了`,
            `因此下學期，區塊鏈研究社將會改成區塊鏈與金融科技社，分為區塊鏈組與金融組，詳細內容會再慢慢公開哦！`
        ],

        loop: false,
        delaySpeed: 200,
    })

    return (
        <div className="text-center">
            <Head>
                <title>NCKU EnJoy</title>
            </Head>
            <div className="flex text-white justify-center text-3xl">TL;DR</div>
            <div className="text-[#0bbc99] px-10 font-semibold text-2xl py-10">我們想建立一個社群，讓學生們可以交流、學習，十一月底將在成大舉辦大型說明會</div>
            <div className="text-xl font-semibold py-2 px-10 text-white">
                <span>{text}</span>
                <Cursor cursorColor="#447de6" />
            </div>
        </div>
    )
}

export default Home
