import React from 'react'
import { MiniChart } from 'react-tradingview-embed';

interface Props {

}

const MiniChartt = (props: Props) => {
    return (
        <div>
            <MiniChart widgetProps={{ "isTransparent": true, "colorTheme": "dark", "width": "300", "height": "280", "dateRange": '1D', "symbol": 'NDX' }}></MiniChart>
        </div>
    )
}

export default MiniChartt
