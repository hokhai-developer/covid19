import classNames from 'classnames/bind';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import HeaderChart from './HeaderChart';
import styles from './LineChart.module.scss';

const generateOptions = (data) => {
    const categories = data.map((item) => moment(item.Date).format('DD/MM/YYYY'));
    return {
        chart: {
            height: 500,
        },
        title: {
            text: 'Tổng ca nhiễm',
        },
        xAxis: {
            categories: categories,
            crosshair: true,
        },
        colors: ['#F3585B'],
        yAxis: {
            min: 0,
            title: {
                text: null,
            },
            labels: {
                align: 'right',
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            {
                name: 'Tổng Ca nhiễm',
                data: data.map((item) => item.Confirmed),
            },
        ],
        accessibility: {
            enabled: false,
        },
    };
};

const cx = classNames.bind(styles);
const LineChart = ({ data, className }) => {
    const [options, setOptions] = useState({});
    const [reportType, setReportType] = useState('all');

    useEffect(() => {
        let customData = [];
        switch (reportType) {
            case 'all':
                customData = data;
                break;
            case '30':
                customData = data.slice(Math.max(data.length - 30, 1));
                break;
            case '7':
                customData = data.slice(Math.max(data.length - 7, 1));
                break;

            default:
                customData = data;
                break;
        }

        setOptions(generateOptions(customData));
    }, [data, reportType]);

    return (
        <div className={cx('wrapper', className)}>
            <HeaderChart setReportType={setReportType} reportType={reportType} />
            <div className={cx('body')}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </div>
    );
};

LineChart.propTypes = { data: PropTypes.array, className: PropTypes.string };

export default LineChart;
