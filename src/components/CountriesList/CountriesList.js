import className from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './CountriesList.module.scss';
import CountryItem from './CountryItem';

const cx = className.bind(styles);
const CountriesList = ({ countries, className }) => {
    return (
        <div className={cx('wrapper-list', className)}>
            {countries &&
                countries.length > 0 &&
                countries.map((country, index) => {
                    return <CountryItem country={country} key={index} />;
                })}
        </div>
    );
};

CountriesList.propTypes = {
    countries: PropTypes.array,
    className: PropTypes.string,
};

export default CountriesList;
