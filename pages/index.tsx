import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Login from '../components/Login'
import { useAccount } from 'wagmi'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import Navigation from '../components/Navigation';





const Home: NextPage = () => {
  const { address } = useAccount()

  if (!address) return <Login />


  return (
    <div className='bg-black min-h-screen flex flex-col'>
      <Head>
        <title>NCKU Lottery</title>
      </Head>

      <Header />

      <div className='absolute inset-x-0 bottom-0 items-center justify-center flex'>
        <Navigation />
      </div>
    </div>
  )
}

export default Home
