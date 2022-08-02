import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getMapDataByCountryId } from '~/httpRequest/apis';
import { countrySelector } from '~/redux/selectors';
import HighMaps from '../HighMaps';
import LineChart from '../LineChart';
import styles from './Summary.module.scss';

const cx = classNames.bind(styles);
const Summary = ({ data, className }) => {
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
        <div className={cx('wrapper', className)}>
            <LineChart className={cx('line')} data={data} />
            <HighMaps className={cx('map')} mapData={mapData} />
        </div>
    );
};

Summary.propTypes = {
    data: PropTypes.array,
    classNames: PropTypes.string,
};

export default Summary;
