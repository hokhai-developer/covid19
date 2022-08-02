import React from 'react';
import classNames from 'classnames/bind';
import styles from './TimeNow.module.scss';
import moment from 'moment';
import 'moment/locale/vi'
import PropTypes from 'prop-types';

moment.locale('vi')
const cx = classNames.bind(styles);
const TimeNow = (props) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('time-now')}>{moment().format('LLL')}</p>
        </div>
    );
};

TimeNow.propTypes = {};

export default TimeNow;
