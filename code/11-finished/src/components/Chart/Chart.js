import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const totalMonthMaximum = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value))

    return <div className='chart'>
        {props.dataPoints.map(dataPoint => 
            <ChartBar
                key = {dataPoint.label}
                value = {dataPoint.value}
                maxValue = {totalMonthMaximum}
                label = {dataPoint.label}
            />)}
    </div>
};

export default Chart;