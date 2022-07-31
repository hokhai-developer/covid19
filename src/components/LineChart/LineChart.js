import React from 'react';
import classNames from 'classnames/bind';
import styles from './LineChart.module.scss';
import PropTypes from 'prop-types';
import HeaderChart from './HeaderChart';

const cx = classNames.bind(styles);
const LineChart = (props) => {
    return (
        <div className={cx('wrapper')}>
            <HeaderChart />
        </div>
    );
};

LineChart.propTypes = {};

export default LineChart;
