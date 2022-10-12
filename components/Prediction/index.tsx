import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAccount } from 'wagmi'



interface Props {

}

const Precidtion = (props: Props) => {
    const [bet, setBet] = useState(0);
    const { address } = useAccount()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setBet(e.target.valueAsNumber)
    };

    const handleMoon = () => {
        if (!address) {
            toast.error('請先連接錢包')
            return
        }
        if (bet > 5) {
            toast.error('最高5美元')
            return
        }
        if (bet < 1) {
            toast.error('最低1美元')
            return
        }
        if (!bet) {
            toast.error('請輸入數字')
            return
        }
        console.log(bet)
    };

    const handleDust = () => {
        if (!address) {
            toast.error('請先連接錢包')
            return
        }
        if (bet > 5) {
            toast.error('最高5美元')
            return
        }
        if (bet < 1) {
            toast.error('最低1美元')
            return
        }
        if (!bet) {
            toast.error('請輸入數字')
            return
        }
        console.log(bet)
    };

    return (
        <div>
            <input
                type="number"
                onChange={handleChange}
                value={bet}
                placeholder='1~5'
                className='rounded'
            />
            <div className='py-2 truncate'>
                <button
                    className='bg-[#2aac3f] rounded-full px-2 py-2 w-[100px] text-white font-semibold'
                    onClick={handleMoon}>漲</button>
                <button
                    className='bg-[#e43737] rounded-full px-2 py-2 w-[100px] text-black font-semibold'
                    onClick={handleDust}>跌</button>
            </div>

            <h2 className='text-white'>目前池子總數: { }</h2>

        </div>
    )
}

export default Precidtion
