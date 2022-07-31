import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';
import TimeNow from '../TimeNow';

const cx = classNames.bind(styles);
const Header = (props) => {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h1 className={cx('header-title')}>Số liệu COVID-19</h1>
                <TimeNow />
            </header>
        </div>
    );
};

Header.propTypes = {};

export default Header;
