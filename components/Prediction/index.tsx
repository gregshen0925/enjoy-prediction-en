import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { useContractRead } from 'wagmi'
import ContractABI from '../../EnJoyPrediction.json'

interface Props {
    isStock?: Boolean
    isCrypto?: Boolean
    prediction?: number
    stakeAmount?: number
}

const Precidtion = ({ isStock, isCrypto }: Props) => {
    const [bet, setBet] = useState<number | undefined>(undefined)
    const { address } = useAccount()
    // from 0~5
    const [stakeAmount, setStakeAmount] = useState<number>(0)
    // 1 means moon, 2 means dust
    const [prediction, setPrediction] = useState<number>(0)

    const timestamp = Math.floor(new Date().valueOf() / 1000)

    useContractRead({
        addressOrName: '0x4078FFb52019277AA08fa83720cE3EfC38Be7327',
        contractInterface: ContractABI.abi,
        functionName: 'getPlayerStakeInfo',
        args: [address, timestamp],
        onSuccess(data) {
            const { stakeAmount, prediction } = data
            setStakeAmount(stakeAmount)
            setPrediction(prediction)
        },
    })

    const { config: longConfig } = usePrepareContractWrite({
        addressOrName: '0x4078FFb52019277AA08fa83720cE3EfC38Be7327',
        contractInterface: ContractABI.abi,
        functionName: 'predict',
        args: [true, bet ? bet * 1000000 : 1000000]
    })

    const { config: shortConfig } = usePrepareContractWrite({
        addressOrName: '0x4078FFb52019277AA08fa83720cE3EfC38Be7327',
        contractInterface: ContractABI.abi,
        functionName: 'predict',
        args: [false, bet ? bet * 1000000 : 1000000]
    })

    const { isSuccess: longIsSuccess, isError: longIsError, write: longWrite } = useContractWrite(longConfig)
    const { isSuccess: shortIsSuccess, isError: shortIsError, write: shortWrite} = useContractWrite(shortConfig)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setBet(e.target.valueAsNumber)
    };

    const handleMoon = async () => {
        if (!address) {
            toast.error('請先連接錢包')
            return
        }
        if (!bet) {
            toast.error('請輸入數字')
            return
        }
        if (bet > 5) {
            toast.error('最高5美元')
            setBet(NaN)
            return
        }
        if (bet < 1) {
            toast.error('最低1美元')
            setBet(NaN)
            return
        }
        if (isStock) {
            // interact with stock pool
            toast.success("請確認交易")
            return
        }
        if (isCrypto) {
            longWrite?.()
            if(longIsSuccess) toast.success("請確認交易")
            return
        }
    };

    const handleDust = () => {
        if (!address) {
            toast.error('請先連接錢包')
            return
        }
        if (!bet) {
            toast.error('請輸入數字')
            return
        }
        if (bet > 5) {
            toast.error('最高5美元')
            setBet(NaN)
            return
        }
        if (bet < 1) {
            toast.error('最低1美元')
            setBet(NaN)
            return
        }
        if (isStock) {
            // interact with stock pool
            toast.success("請確認交易")
            return
        }
        if (isCrypto) {
            shortWrite?.()
            if (shortIsSuccess) toast.success("請確認交易")
            return
        }
    }
    const handleAdd = () => {
        if (bet == undefined) {
            setBet(1)
        } else if (bet > 4) {
            setBet(5)
        } else {
            setBet(bet + 1)
        }
    }
    const handleSub = () => {
        if (bet == undefined) {
            return
        } else if (bet < 1) {
            setBet(0)
        } else {
            setBet(bet - 1)
        }
    }
    return (
        <div className=''>
            {stakeAmount ? (<div className="text-white">
                您已預測 {(prediction === 1) ? "漲" : "跌"} {(stakeAmount/1000000).toFixed(0)} USDT
            </div>) : 
            (<div>
                <div className='flex flex-grid grid-cols-5 w-full justify-center'>
                    <button
                        type="button"
                        onClick={handleSub}
                        className='bg-white col-span-1 w-[40px] rounded-lg'
                    >-
                    </button>
                    <input
                        type="number"
                        onChange={handleChange}
                        value={bet}
                        placeholder='投入USDT數量(0~5)'
                        className="col-span-3 justify-center bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                    <button
                        type="button"
                        onClick={handleAdd}
                        className='bg-white col-span-1 w-[40px] rounded-lg'
                    >+
                    </button>
                </div>
                <div className='flex justify-center items-center py-3 truncate'>
                    <div>&nbsp;&nbsp;</div>
                    <button
                        type="button"
                        onClick={handleMoon}
                        className="text-white bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-green-400"
                    >明天會漲</button>
                    <button
                        type="button"
                        onClick={handleDust}
                        className="text-black bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-red-500"
                    >明天會跌</button>
                </div>
            </div>)}
        </div>
    )
}

export default Precidtion
