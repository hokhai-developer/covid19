import classNames from 'classnames/bind';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import { cloneDeep } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styles from './HighMaps.module.scss';

// Load Highcharts modules
highchartsMap(Highcharts);

const initOptions = {
    chart: {
        height: '500',
    },
    title: {
        text: null,
    },
    mapNavigation: {
        enabled: true,
    },
    colorAxis: {
        min: 0,
        stops: [
            [0.2, '#FFC4AA'],
            [0.4, '#FF8A66'],
            [0.6, '#FF392B'],
            [0.8, '#B71525'],
            [1, '	#7A0826'],
        ],
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
    },
    series: [
        {
            name: 'Dân số',
            joinBy: ['hc-key', 'key'],
        },
    ],
    accessibility: {
        enabled: false,
    },
};

const cx = classNames.bind(styles);
const HighMaps = ({ mapData, className }) => {
    const [options, setOptions] = useState({});
    const [mapLoaded, setMapLoaded] = useState(false);
    const chartRef = useRef(null);

    useEffect(() => {
        if (mapData && Object.keys(mapData).length) {
            const fakeData = mapData.features.map((feature, index) => ({
                key: feature.properties['hc-key'],
                value: index,
            }));

            setOptions(() => ({
                ...initOptions,
                title: {
                    text: mapData.title,
                },
                series: [{ ...initOptions.series[0], mapData: mapData, data: fakeData }],
            }));

            if (!mapLoaded) setMapLoaded(true);
        }
    }, [mapData, mapLoaded]);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            chartRef.current.chart.series[0].update({
                mapData,
            });
        }
    }, [options, mapData]);

    if (!mapLoaded) return null;

    return (
        <div className={cx('wrapper', className)}>
            <HighchartsReact
                highcharts={Highcharts}
                options={cloneDeep(options)}
                constructorType={'mapChart'}
                ref={chartRef}
            />
        </div>
    );
};

HighMaps.prototype = {
    mapData: PropTypes.object,
    className: PropTypes.string,
};

export default HighMaps;
