import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Country from '~/components/Country/Country';

const cx = classNames.bind(styles);
const Home = (props) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Country />
        </div>
    );
};

Home.propTypes = {};

export default Home;
