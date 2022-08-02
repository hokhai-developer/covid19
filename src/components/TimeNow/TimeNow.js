import classNames from 'classnames/bind';
import moment from 'moment';
import 'moment/locale/vi';
import PropTypes from 'prop-types';
import styles from './TimeNow.module.scss';

moment.locale('vi');
const cx = classNames.bind(styles);
const TimeNow = ({ className }) => {
    return (
        <div className={cx('wrapper', className)}>
            <p className={cx('time-now')}>{moment().format('LLL')}</p>
        </div>
    );
};

TimeNow.propTypes = {
    className: PropTypes.string,
};

export default TimeNow;
