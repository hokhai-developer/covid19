import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind();
const IconCenter = ({ children, onClick, className }) => {
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
    };
    const styled = {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
    };
    return (
        <div onClick={(e) => handleClick(e)} className={cx(className)} style={styled}>
            {children}
        </div>
    );
};

IconCenter.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default IconCenter;
