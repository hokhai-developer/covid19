import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Card from '../Card';
import styles from './HighLight.module.scss';

const cx = classNames.bind(styles);
const HighLight = ({ report, className }) => {
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

HighLight.propTypes = {
    className: PropTypes.string,
    report: PropTypes.array,
};

export default HighLight;
