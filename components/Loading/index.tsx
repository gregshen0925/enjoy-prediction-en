import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader"

type Props = {}

const Loading = (props: Props) => {
    return (
        <div className='bg-[#000000] flex flex-col items-center justify-center'>
            <div className='flex items-center space-x-2 mb-10'>
                <img
                    className='rounded-full h-20 w-20'
                    src="https://i.imgur.com/vHZqwZF.png"
                    alt=""
                />
                <h1 className='text-lg text-white font-bold'>
                    Transaction Loading
                </h1>
            </div>
            <PropagateLoader color="white" size={30} />
        </div>
    )
}

export default Loading