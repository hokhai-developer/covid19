import React from 'react';
import classNames from 'classnames/bind';
import styles from './LineChart.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const HeaderChart = ({ className, reportType, setReportType }) => {
    return (
        <header className={cx('header', className)}>
            <button className={cx('btn', { active: reportType === 'all' })} onClick={() => setReportType('all')}>
                Tất cả
            </button>
            <button className={cx('btn', { active: reportType === '30' })} onClick={() => setReportType('30')}>
                30 ngày
            </button>
            <button className={cx('btn', { active: reportType === '7' })} onClick={() => setReportType('7')}>
                7 ngày
            </button>
        </header>
    );
};

HeaderChart.propTypes = {};

export default HeaderChart;
