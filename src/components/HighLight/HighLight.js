import React from 'react';
import classNames from 'classnames/bind';
import styles from './HighLight.module.scss';
import PropTypes from 'prop-types';
import Card from '../Card';

const cx = classNames.bind(styles);
const HighLight = ({ report }) => {
    return (
        <div className={cx('wrapper')}>
            {report &&
                report.length > 0 &&
                report.map((item, index) => {
                    return <Card key={index + Math.random()} type={item.type} title={item.title} count={item.count} />;
                })}
        </div>
    );
};

HighLight.propTypes = {};

export default HighLight;
