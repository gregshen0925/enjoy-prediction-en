import React, { useState } from "react";
import { useContractEvent, useContractRead } from "wagmi";
import EnJoyABI from "../../artifacts/EnJoyPrediction.json";
import { BigNumber, utils } from "ethers";
import toast from "react-hot-toast";

type Props = {
  isCrypto?: Boolean;
  isStock?: Boolean;
};

const PoolInfo = ({ isCrypto, isStock }: Props) => {
  const [totalPoolAmount, setTotalPoolAmount] = useState<BigNumber>(
    BigNumber.from(0)
  );
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [longPool, setLongPool] = useState<BigNumber>(BigNumber.from(0));

  const timestamp = Math.floor(new Date().valueOf() / 1000);

  const pad = BigNumber.from(10).pow(12);

  const formatUSDT = (amount: BigNumber): string => {
    return utils.formatEther(amount.mul(pad));
  };

  useContractRead({
    addressOrName: EnJoyABI.address,
    contractInterface: EnJoyABI.abi,
    functionName: "getTableInfo",
    args: [timestamp],
    onSuccess(data) {
      const { result, startPrice, longPool, shortPool, playerCount } = data;
      setTotalPoolAmount(BigNumber.from(longPool).add(shortPool));
      setLongPool(longPool);
      setPlayerCount(playerCount);
    },
  });

  useContractEvent({
    addressOrName: EnJoyABI.address,
    contractInterface: EnJoyABI.abi,
    eventName: "Predict",
    listener(event) {
      const [player, prediction, stakeAmount] = event;
      // console.log(player, prediction, stakeAmount)
      if (prediction === 1) {
        setLongPool(longPool.add(stakeAmount));
        setTotalPoolAmount(totalPoolAmount.add(stakeAmount));
      }
      if (prediction === 2)
        setTotalPoolAmount(totalPoolAmount.add(stakeAmount));
    },
  });

  if (isCrypto) {
    const percentage = totalPoolAmount?.eq(0)
      ? 50
      : longPool.mul(10000).div(totalPoolAmount).toNumber() / 100;
    return (
      <div>
        <div>
          <div className="flex-cols-3 flex items-center justify-center">
            <div className="text-white font-semibold px-2">
              {percentage.toFixed(2)}%
            </div>
            <div className="">
              <div className="w-[100px] bg-red-600 h-5 rounded-lg">
                <div
                  className="bg-green-600 h-5 rounded-l-lg"
                  style={{ width: `${percentage.toFixed(2)}%` }}
                ></div>
              </div>
            </div>
            <div className="text-white font-semibold px-2">
              {(100 - percentage).toFixed(2)}%
            </div>
          </div>
        </div>
        <div className="pt-3">
          <div className="text-white font-semibold">
            {playerCount} players participated
          </div>
          <div className="text-white font-semibold">
            {formatUSDT(totalPoolAmount)} USDT in pool
          </div>
        </div>
      </div>
    );
  } else if (isStock) {
    // const totalCryptoPrediction = getPredictMoonAmount+getPredictDustAmount
    // const percentage = ((getPredictMoonAmount/totalCryptoPrediction)*100).toFixed(2)
    const totalCryptoAmount = 1000;
    const percentage = 30.27;
    const moonOrDust = "Moon";
    const bet = 3;
    return (
      <div>
        <div className="flex-cols-3 flex items-center justify-center">
          <div className="text-white text px-2">{percentage}%</div>
          <div>
            <div className="w-[100px] bg-red-600 h-5 rounded-full">
              <div
                className="bg-green-600 h-5 rounded-full"
                style={{ width: `${100 - percentage}%` }}
              ></div>
            </div>
          </div>
          <div className="text-white font-semibold px-2">
            {100 - percentage}%
          </div>
        </div>
        <div className="text-white font-semibold">
          <div className="">已有{playerCount}人預測</div>
          <div className="">
            當前總金額為 {formatUSDT(totalPoolAmount)} USDT
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default PoolInfo;
