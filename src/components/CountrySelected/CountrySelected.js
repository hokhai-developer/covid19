import React from 'react';
import className from 'classnames/bind';
import styles from './CountrySelected.module.scss';
import PropTypes from 'prop-types';
import CountriesList from '../CountriesList';
import { useRef, useEffect, useState } from 'react';

const cx = className.bind(styles);
const CountrySelected = (props) => {
    const [showList, setShowList] = useState(false);
    const inSideRef = useRef();
    useEffect(() => {
        document.addEventListener('click', handleClickOutSide);
        return () => {
            document.removeEventListener('click', handleClickOutSide);
        };
    }, []);

    const handleClickOutSide = (e) => {
        const { target } = e;
        if (!inSideRef.current.contains(target)) {
            setShowList(false);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div ref={inSideRef} onClick={() => setShowList(!showList)}>
                CountrySelected
            </div>
            <div className={cx('country-list')}>{showList && <CountriesList />}</div>
        </div>
    );
};

CountrySelected.propTypes = {};

export default CountrySelected;
