import classNames from 'classnames/bind';
import TimeNow from '../TimeNow';
import styles from './Header.module.scss';

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
