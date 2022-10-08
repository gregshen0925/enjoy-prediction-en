import { NextPage } from "next";
import Head from "next/head";
import Header from "../Layout/Header";
import Login from "../Login";
import NavigationTab from "../Layout/NavigationTab";
import { useAccount } from 'wagmi'
import { useState } from "react";





interface Props {

}

const Home: NextPage<Props> = (props: Props) => {
    const { address } = useAccount()
    // const [activeNum, setActiveNum] = useState(0)
    // const changeActiveNum = (num: number) => {
    //     setActiveNum(num)
    // }

    if (!address) return <Login />

    return (
        <div>
            <Head>
                <title>NCKU EnJoy</title>
            </Head>
        </div>
    )
}

export default Home
