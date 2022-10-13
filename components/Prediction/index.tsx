import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAccount } from 'wagmi'



interface Props {
    isStock?: Boolean
    isCrypto?: Boolean
}

const Precidtion = ({ isStock, isCrypto }: Props) => {
    const [bet, setBet] = useState(NaN);
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
        }
        if (isCrypto) {
            // interact with crypto pool
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
        }
        if (isCrypto) {
            // interact with crypto pool
        }
        console.log(bet)
    };

    return (
        <div>
            <input
                type="number"
                onChange={handleChange}
                value={bet}
                placeholder='投入USDT數量(1~5)'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div className='flex justify-center items-center py-3 truncate'>
                <div>&nbsp;&nbsp;</div>
                <button
                    type="button"
                    onClick={handleMoon}
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >明天會漲</button>
                <button
                    type="button"
                    onClick={handleDust}
                    className="text-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >明天會跌</button>
            </div>
            {/* <h2 className='text-white font-bold'>目前池子總數: { }</h2> */}
        </div>
    )
}

export default Precidtion
