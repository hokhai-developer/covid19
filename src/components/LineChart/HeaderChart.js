import React from 'react';
import classNames from 'classnames/bind';
import styles from './LineChart.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const HeaderChart = (props) => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('actions')}>
                <button>Tất cả</button>
                <button>30 ngày</button>
                <button>7 ngày</button>
            </div>
            <p className={cx('description')}> Tổng ca nhiễm</p>
        </header>
    );
};

HeaderChart.propTypes = {};

export default HeaderChart;
