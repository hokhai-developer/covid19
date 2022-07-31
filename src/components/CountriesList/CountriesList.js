import React from 'react';
import className from 'classnames/bind';
import styles from './CountriesList.module.scss';
import PropTypes from 'prop-types';
import CountryItem from './CountryItem';

const cx = className.bind(styles);
const CountriesList = ({ countries }) => {
    return (
        <div className={cx('wrapper-list')}>
            {countries &&
                countries.length > 0 &&
                countries.map((country, index) => {
                    return <CountryItem country={country} key={index} />;
                })}
        </div>
    );
};

CountriesList.propTypes = {};

export default CountriesList;
