import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import countrySlice from '~/redux/slices/countrySlice';
import styles from './CountriesList.module.scss';

const cx = classNames.bind(styles);
const CountryItem = ({ country, className }) => {
    const dispatch = useDispatch();
    const handleCountry = (country) => {
        dispatch(countrySlice.actions.update(country));
    };
    return (
        <div className={cx('wrapper-item', className)} onClick={() => handleCountry(country)}>
            {country.Country}
        </div>
    );
};

CountryItem.propTypes = {
    country: PropTypes.object,
    className: PropTypes.string,
};

export default CountryItem;
