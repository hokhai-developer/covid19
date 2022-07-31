import React from 'react';
import classNames from 'classnames/bind';
import styles from './Country.module.scss';
import PropTypes from 'prop-types';
import CountrySelected from '../CountrySelected/CountrySelected';
import CountriesList from '../CountriesList';

const cx = classNames.bind(styles);
const Country = (props) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('text')}>Quốc Gia</p>
            <CountrySelected />
            <p className={cx('text')}>Lựa chọn quốc gia</p>
        </div>
    );
};

Country.propTypes = {};

export default Country;
