import React from 'react';
import className from 'classnames/bind';
import styles from './CountriesList.module.scss';
import PropTypes from 'prop-types';
import CountryItem from './CountryItem';

const cx = className.bind(styles);
const CountriesList = (props) => {
    return (
        <div>
            <CountryItem />
            <CountryItem />
            <CountryItem />
            <CountryItem />
            <CountryItem />
            <CountryItem />
            <CountryItem />
            <CountryItem />
        </div>
    );
};

CountriesList.propTypes = {};

export default CountriesList;
