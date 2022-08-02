import classNames from 'classnames/bind';
import CountrySelected from '../CountrySelected/CountrySelected';
import styles from './Country.module.scss';

const cx = classNames.bind(styles);
const Country = (props) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('text')}>Quốc Gia</p>
            <CountrySelected />
            <p className={cx('text')}>Lựa chọn quốc gia</p>
        </div>
    );
};

Country.propTypes = {};

export default Country;
