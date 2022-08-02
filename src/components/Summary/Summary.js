import React from 'react';
import classNames from 'classnames/bind';
import styles from './Summary.module.scss';
import PropTypes from 'prop-types';
import LineChart from '../LineChart';
import HighMaps from '../HighMaps';
import { getMapDataByCountryId } from '~/httpRequest/apis';
import { useSelector } from 'react-redux';
import { countrySelector } from '~/redux/selectors';
import { useEffect } from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);
const Summary = ({ data }) => {
    const [mapData, setMapData] = useState({});
    const { ISO2: countryId } = useSelector(countrySelector);

    useEffect(() => {
        if (countryId) {
            const newCountryId = countryId.toLowerCase();
            getMapDataByCountryId(newCountryId)
                .then((res) => setMapData(res))
                .catch((error) => console.log(error));
        }
    }, [countryId]);

    return (
        <div className={cx('wrapper')}>
            <LineChart className={cx('line')} data={data} />
            <HighMaps className={cx('map')} mapData={mapData} />
        </div>
    );
};

Summary.propTypes = {};

export default Summary;
