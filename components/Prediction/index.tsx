import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAccount } from 'wagmi'
import PoolInfo from '../PoolInfo'

interface Props {
    isStock?: Boolean
    isCrypto?: Boolean
    prediction?: number
    stakeAmount?: number
}

const Precidtion = ({ isStock, isCrypto, prediction, stakeAmount }: Props) => {
    const [bet, setBet] = useState<number | undefined>(undefined);
    const { address } = useAccount()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setBet(e.target.valueAsNumber)
    };

    const handleMoon = () => {
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
            // interact with crypto pool
            toast.success("請確認交易")
            return
        }
        console.log(bet)
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
            return
        }
        if (isCrypto) {
            // interact with crypto pool
            return
        }
        console.log(bet)
    };
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
        <div className='pb-20'>
            {stakeAmount ? (
                <div>
                    您已預測 {(prediction == 1) ? "moon" : "dust"} {stakeAmount} USDT
                </div>
            ) : (
                <div>
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
                </div>
            )
            }
            {/* <PoolInfo /> */}
        </div>
    )
}

export default Precidtion
