import { NextPage } from "next";
import Head from "next/head";
// import { useAccount } from 'wagmi'
import { Cursor, useTypewriter } from "react-simple-typewriter"



interface Props {

}

const Home: NextPage<Props> = (props: Props) => {
    // const { address } = useAccount()
    // if (!address) return <Login />

    const [text, count] = useTypewriter({
        words: ['成大區塊鏈與金融科技社，一個讓學生們可以交流、學習的社團，11/23將在成大舉辦大型說明會說明詳細規劃'],
        delaySpeed: 200,
    })

    return (
        <div className="text-center">
            <Head>
                <title>NCKU EnJoy</title>
            </Head>
            <div className="flex text-white justify-center text-3xl">TL;DR</div>
            <div className="text-[#4fe0d9] font-semibold py-2 px-10">
                <span>{text}</span>
                <Cursor cursorColor="#4fe0d9" />
            </div>
        </div>
    )
}

export default Home
