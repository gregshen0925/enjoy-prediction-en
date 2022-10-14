import React from 'react'

type Props = {
    isCrypto?: Boolean
    isStock?: Boolean
}

const Percentage = ({ isCrypto, isStock }: Props) => {

    if (isCrypto) {
        // const totalCryptoAmount = getTotalPredictMoonAmount+getTotalPredictDustAmount
        // const percentage = ((getTotalPredictMoonAmount/totalCryptoPrediction)*100).toFixed(2)
        const totalCryptoAmount = 1000
        const percentage = 30.27
        const moonOrDust = "Moon"
        const bet = 3
        return (
            <div>
                <div className='text-white font-semibold' >
                    您預測{" "}{bet}{" "}USDT明天會{moonOrDust}
                </div>
                <div className='flex-cols-3 flex items-center justify-center py-2'>
                    <div className='text-white font-semibold px-2'>
                        {percentage}%
                    </div>
                    <div>
                        <div className="w-[100px] bg-red-600 h-5 rounded">
                            <div className="bg-green-600 h-5 rounded-l" style={{ width: `${percentage}%` }}></div>
                        </div>
                    </div>
                    <div className='text-white font-semibold px-2'>
                        {100 - percentage}%
                    </div>
                </div>
                <div className='text-white font-semibold'>
                    當前總金額為{" "}{totalCryptoAmount}{" "}USDT
                </div>
            </div>
        )
    }
    else {
        // const totalCryptoPrediction = getPredictMoonAmount+getPredictDustAmount
        // const percentage = ((getPredictMoonAmount/totalCryptoPrediction)*100).toFixed(2)
        const percentage = 1
        return (
            <div className='flex-cols-3 flex items-center justify-center'>
                <div className='text-white text px-2'>
                    {percentage}%
                </div>
                <div>
                    <div className="w-[100px] bg-red-600 h-5 mb-6">
                        <div className="bg-green-600 h-5" style={{ width: `${100 - percentage}%` }}></div>
                    </div>
                </div>
                <div className='text-white text px-2'>
                    {100 - percentage}%
                </div>
            </div>
        )
    }

}

export default Percentage