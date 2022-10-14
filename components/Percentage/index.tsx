import React from 'react'

type Props = {
    isCrypto?: Boolean
    isStock?: Boolean
}

const Percentage = ({ isCrypto, isStock }: Props) => {

    if (isCrypto) {
        // const totalCryptoPrediction = getTotalPredictMoonAmount+getTotalPredictDustAmount
        // const percentage = ((getTotalPredictMoonAmount/totalCryptoPrediction)*100).toFixed(2)
        const percentage = 52
        return (
            <div>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    // style={`width:${percentage}%`}
                    > {percentage}%</div>
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
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    // style={`width:${percentage}`}
                    > {percentage}%</div>
                </div>
            </div>
        )
    }

}

export default Percentage