import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAccount } from 'wagmi'
import Percentage from '../Percentage'



interface Props {
    isStock?: Boolean
    isCrypto?: Boolean
    Predicted?: Boolean
}

const Precidtion = ({ isStock, isCrypto, Predicted }: Props) => {
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


    if (!Predicted) {
        return (
            <div>
                <input
                    type="number"
                    onChange={handleChange}
                    value={bet}
                    placeholder='投入USDT數量(1~5)'
                    className="justify-center bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
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
                {/* <h2 className='text-white font-bold'>目前池子總數: { }</h2> */}
            </div>
        )
    }
    else {
        if (isCrypto) {
            return (
                <div className='py-3'>
                    <Percentage isCrypto={isCrypto} />
                </div>
            )
        }
        else {
            return (
                <Percentage isStock={isStock} />
            )
        }
    }
}

export default Precidtion
