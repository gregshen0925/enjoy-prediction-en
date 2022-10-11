import { NextPage } from "next";
import Head from "next/head";
// import { useAccount } from 'wagmi'
// import { Cursor, useTypewriter } from "react-simple-typewriter"



interface Props {

}

const Home: NextPage<Props> = (props: Props) => {
    // const { address } = useAccount()
    // if (!address) return <Login />

    // const [text, count] = useTypewriter({
    //     words: [],
    //     loop: false,
    //     delaySpeed: 200,
    // })

    return (
        <div className="text-center">
            <Head>
                <title>NCKU EnJoy</title>
            </Head>
            <div className="flex text-white justify-center text-3xl">TL;DR</div>
            <div className="text-[#0bbc99] px-10 font-semibold text-2xl py-10">我們想建立一個社群，讓學生們可以交流、學習，十一月底將在成大舉辦大型說明會</div>
            {/* <div className="text-xl font-semibold py-2 px-10 text-white">
                <span>{text}</span>
                <Cursor cursorColor="#447de6" />
            </div> */}
        </div>
    )
}

export default Home
