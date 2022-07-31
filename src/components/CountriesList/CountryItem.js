import React from 'react';
import classNames from 'classnames/bind';
import styles from './CountriesList.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import countrySlice from '~/redux/slices/countrySlice';

const cx = classNames.bind(styles);
const CountryItem = ({ country }) => {
    const dispatch = useDispatch();
    const handleCountry = (country) => {
        dispatch(countrySlice.actions.update(country));
    };
    return (
        <div className={cx('wrapper-item')} onClick={() => handleCountry(country)}>
            {country.Country}
        </div>
    );
};

CountryItem.propTypes = {};

export default CountryItem;
