import { NextPage } from "next";
import Head from "next/head";
import Header from "../Layout/Header";
import Login from "../Login";
import NavigationTab from "../NavigationTab";
import { useAccount } from 'wagmi'
import { useState } from "react";





interface Props {

}

const Home: NextPage<Props> = (props: Props) => {
    const { address } = useAccount()
    const [activeNum, setActiveNum] = useState(0)
    const changeActiveNum = (num: number) => {
        setActiveNum(num)
    }

    if (!address) return <Login />

    return (
        <div className='bg-black min-h-screen flex flex-col'>
            <Head>
                <title>NCKU EnJoy</title>
            </Head>

            <Header />

            <div className='absolute inset-x-0 bottom-0 items-center justify-center flex'>
                <NavigationTab activeNum={activeNum} changeActiveNum={changeActiveNum} />
            </div>
        </div>
    )
}

export default Home
