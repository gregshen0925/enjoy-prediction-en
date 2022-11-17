import { NextPage } from "next";
import Head from "next/head";
// import { useAccount } from 'wagmi'
import Claim from "../Claim";

interface Props {}

const Home: NextPage<Props> = (props: Props) => {
  return (
    <div className="text-center">
      <Head>
        <title>EnJoy Prediction</title>
      </Head>
      <Claim />
      <p className="flex justify-center px-5 text-3xl text-white font-bold text-transparent py-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        A Dapp for predicting tomorrow's price
      </p>
      <div className="text-white font-semibold px-10 text-left space-y-2 max-w-3xl py-5">
        <div>1. Login using web3 wallet.</div>
        <div>2. Predict if the price goes up or down tomorrow.</div>
        <div>3. People who win will divide the opposite side's pool.</div>
        <div>
          4. There will be a settle chance who send transaction to execute the
          divide action. The settler can get 1% of the pool.
        </div>
        <div>5. Players can claim their rewards anytime they want.</div>
      </div>
      <div>This is black word</div>
    </div>
  );
};

export default Home;
