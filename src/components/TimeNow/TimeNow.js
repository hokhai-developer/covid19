import React from 'react';
import classNames from 'classnames/bind';
import styles from './TimeNow.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const TimeNow = (props) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('time-now')}>31 tháng 7 năm 2022 15:30</p>
        </div>
    );
};

TimeNow.propTypes = {};

export default TimeNow;
