import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const Card = ({ className, title, count, type }) => {
    return (
        <div className={cx('wrapper-card', className)}>
            <div
                className={cx('before-card', {
                    [type]: type,
                })}
            ></div>
            <div className={cx('content')}>
                <p className={cx('title')}>{title}</p>
                <p className={cx('count')}>
                    {count === 0 ? 'Hiện tại chưa có số liệu' : String(count).replace(/(.)(?=(\d{3})+$)/g, '$1,')}
                </p>
            </div>
        </div>
    );
};

Card.propTypes = {};

export default Card;
