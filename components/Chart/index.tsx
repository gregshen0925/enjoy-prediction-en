import React from 'react'
import { AdvancedChart } from 'react-tradingview-embed'

interface Props {
    symbol: string
}

const Chart = ({ symbol }: Props) => {
    return (
        <div>
            <AdvancedChart widgetProps={{ "autosize": false, "timezone": "Asia/Taipei", "range": '1D', "theme": "dark", "width": '350', "height": '300', "hide_top_toolbar": false, "symbol": symbol, "hide_side_toolbar": true, }} />
        </div>
    )
}

export default Chart
