import React from 'react'

type Props = {
    isCrypto?: Boolean
    isStock?: Boolean
}

const Percentage = ({ isCrypto, isStock }: Props) => {

    if (isCrypto) {
        // const totalCryptoPrediction = getTotalPredictMoonAmount+getTotalPredictDustAmount
        // const percentage = ((getTotalPredictMoonAmount/totalCryptoPrediction)*100).toFixed(2)
        const percentage = 30
        return (
            <div className='grid grid-3'>
                {/* <div className='text-white'>
                    {percentage}%
                </div> */}
                <div className="w-[200px] bg-red-200 rounded-full dark:bg-red-700">
                    <div className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-full"
                        style={{ width: `${percentage}%` }}
                    >{percentage}%</div>
                </div>
                <div className='text-white'>
                    {100 - percentage}%
                </div>

            </div>
        )
    }
    else {
        // const totalCryptoPrediction = getPredictMoonAmount+getPredictDustAmount
        // const percentage = ((getPredictMoonAmount/totalCryptoPrediction)*100).toFixed(2)
        const percentage = 1
        return (
            <div>
                <div className="w-[200px] bg-red-200 rounded-full dark:bg-red-700">
                    <div className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-full"
                        style={{ width: `${percentage}%` }}
                    > {percentage}%</div>
                </div>
            </div>
        )
    }

}

export default Percentage