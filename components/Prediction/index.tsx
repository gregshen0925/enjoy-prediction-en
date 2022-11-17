import { utils, constants, BigNumber } from "ethers";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useAccount,
  useContractEvent,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { useContractRead } from "wagmi";
import EnJoyABI from "../../artifacts/EnJoyPrediction.json";
import UsdtABI from "../../artifacts/USDT.json";

interface Props {
  isStock?: Boolean;
  isCrypto?: Boolean;
  prediction?: number;
  stakeAmount?: number;
}

const Precidtion = ({ isStock, isCrypto }: Props) => {
  const [bet, setBet] = useState<number | undefined>(undefined);
  const { address } = useAccount();
  // from 0~5
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  // 1 means moon, 2 means dust
  const [prediction, setPrediction] = useState<number>(0);
  const [allowance, setAllowance] = useState<BigNumber>(BigNumber.from(0));
  const [approveLoading, setApproveLoading] = useState<boolean>(false);
  const [transactionLoading, setTransactionLoading] = useState<boolean>(false);
  const timestamp = Math.floor(new Date().valueOf() / 1000);

  useContractRead({
    addressOrName: EnJoyABI.address,
    contractInterface: EnJoyABI.abi,
    functionName: "getPlayerStakeInfo",
    args: [address, timestamp],
    onSuccess(data) {
      const { stakeAmount, prediction } = data;
      setStakeAmount(stakeAmount);
      setPrediction(prediction);
    },
  });

  useContractRead({
    addressOrName: UsdtABI.address,
    contractInterface: UsdtABI.abi,
    functionName: "allowance",
    args: [address, EnJoyABI.address],
    onSuccess(allowance) {
      setAllowance(BigNumber.from(allowance.toString()));
      // console.log(allowance);
    },
  });

  const { config: longConfig } = usePrepareContractWrite({
    addressOrName: EnJoyABI.address,
    contractInterface: EnJoyABI.abi,
    functionName: "predict",
    args: [true, bet ? bet * 1000000 : 1000000],
  });

  const { config: shortConfig } = usePrepareContractWrite({
    addressOrName: EnJoyABI.address,
    contractInterface: EnJoyABI.abi,
    functionName: "predict",
    args: [false, bet ? bet * 1000000 : 1000000],
  });

  const { config: approveConfig } = usePrepareContractWrite({
    addressOrName: UsdtABI.address,
    contractInterface: UsdtABI.abi,
    functionName: "approve",
    args: [EnJoyABI.address, constants.MaxUint256],
  });

  const { data: longData, write: longWrite } = useContractWrite(longConfig);
  const { data: shortData, write: shortWrite } = useContractWrite(shortConfig);
  const { data: approveData, write: approveWrite } =
    useContractWrite(approveConfig);

  useEffect(() => {
    const updateAllowance = async () => {
      if (approveData) {
        await approveData.wait();
        setAllowance(constants.MaxUint256);
        setApproveLoading(false);
      }
    };
    updateAllowance();
  }, [approveData]);

  useEffect(() => {
    const updatePrediction = async () => {
      if (longData) {
        await longData.wait();
        setPrediction(1);
        if (bet) setStakeAmount(bet);
      }
      if (shortData) {
        await shortData.wait();
        setPrediction(2);
        if (bet) setStakeAmount(bet);
      }
      setTransactionLoading(false);
    };
    updatePrediction();
  }, [longData, shortData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBet(e.target.valueAsNumber);
  };

  const handleApprove = async () => {
    setApproveLoading(true);
    approveWrite?.();
  };

  const handleMoon = async () => {
    setTransactionLoading(true);
    if (!address) {
      toast.error("Please Connect Wallet");
      setTransactionLoading(false);
      return;
    }
    if (!bet) {
      toast.error("Enter a number");
      setTransactionLoading(false);
      return;
    }
    if (bet > 5) {
      toast.error("Max 5 USDT");
      setTransactionLoading(false);
      setBet(NaN);
      return;
    }
    if (bet <= 0) {
      toast.error("Higher");
      setTransactionLoading(false);
      setBet(NaN);
      return;
    }
    if (isStock) {
      // interact with stock pool
      toast.success("Confirm Transaction");
      return;
    }
    if (isCrypto) {
      longWrite?.();
      toast.success("Confirm Transaction");
      return;
    }
  };

  const handleDust = () => {
    setTransactionLoading(true);
    if (!address) {
      toast.error("Please Connect Wallet");
      setTransactionLoading(false);
      return;
    }
    if (!bet) {
      toast.error("Enter a number");
      setTransactionLoading(false);
      return;
    }
    if (bet > 5) {
      toast.error("Max 5 USDT");
      setTransactionLoading(false);
      setBet(NaN);
      return;
    }
    if (bet <= 0) {
      toast.error("Higher");
      setTransactionLoading(false);
      setBet(NaN);
      return;
    }
    if (isStock) {
      // interact with stock pool
      toast.success("Confirm Transaction");
      return;
    }
    if (isCrypto) {
      shortWrite?.();
      toast.success("Confirm Transaction");
      return;
    }
  };
  const handleAdd = () => {
    if (bet == undefined) {
      setBet(1);
    } else if (bet > 4) {
      setBet(5);
    } else {
      setBet(bet + 1);
    }
  };
  const handleSub = () => {
    if (bet == undefined) {
      return;
    } else if (bet < 1) {
      setBet(0);
    } else {
      setBet(bet - 1);
    }
  };
  return (
    <div className="">
      {allowance.gte(5000000) ? (
        stakeAmount ? (
          <div className="text-white font-bold pb-6">
            You've Predicted
            {prediction === 1 ? (
              <span className="text-[#6de06d]">Long</span>
            ) : (
              <span className="text-[#df5652]">Short</span>
            )}{" "}
            {(stakeAmount / 1000000).toFixed(0)} USDT
          </div>
        ) : transactionLoading ? (
          <div className="text-white pb-5 font-bold animate-pulse">
            Transaction Processing...
          </div>
        ) : (
          <div>
            <div className="flex flex-grid grid-cols-5 w-full justify-center">
              <button
                type="button"
                onClick={handleSub}
                className="bg-white col-span-1 w-[40px] rounded-lg"
              >
                -
              </button>
              <input
                type="number"
                onChange={handleChange}
                value={bet}
                placeholder="USDT Amount(0~5)"
                className="col-span-3 justify-center bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
              <button
                type="button"
                onClick={handleAdd}
                className="bg-white col-span-1 w-[40px] rounded-lg"
              >
                +
              </button>
            </div>
            <div className="flex justify-center items-center py-3 truncate">
              <div>&nbsp;&nbsp;</div>
              <button
                type="button"
                onClick={handleMoon}
                className="text-white bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-green-400"
              >
                Moon
              </button>
              <button
                type="button"
                onClick={handleDust}
                className="text-black bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-red-500"
              >
                Dust
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="flex justify-center items-center pb-2">
          <div>&nbsp;&nbsp;</div>
          <button
            type="button"
            onClick={handleApprove}
            disabled={!address}
            className="text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-blue-600 cursor-pointer disabled:cursor-not-allowed"
          >
            {approveLoading ? (
              <div className="animate-pulse">Loading...</div>
            ) : (
              <div>Approve USDT</div>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Precidtion;
