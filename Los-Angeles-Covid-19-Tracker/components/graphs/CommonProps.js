import graphTheme from '../../assets/styles/graphTheme'
import Tooltip from './Tooltip';

export default {
                height: 360,
                margin: { top: 30, right: 40, bottom: 50, left: 80 },
                xScale: { type: 'point' },
                axisTop: null,
                axisRight: null,
                xScale: {
                    type: 'time',
                    format: '%m-%d',
                    precision: 'day',
                    useUTC: false
                },
                xFormat: "time:%m-%d",
                axisBottom: {
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    legend: 'Date',
                    legendOffset: 33,
                    legendPosition: 'middle',
                    format: '%b %d',
                    tickValues: 'every 8 days',
                },
                
                pointSize: 9,
                pointLabel: "y",
                pointLabelYOffset: -12,
                useMesh: true,
                theme: graphTheme,
                tooltip: ({point}) => <Tooltip point={point}/>
        }