import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import className from 'classnames/bind';
import { sortBy } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCountries } from '~/httpRequest/apis';
import { countrySelector } from '~/redux/selectors';
import CountriesList from '../CountriesList';
import IconCenter from '../IconCenter';
import styles from './CountrySelected.module.scss';

const cx = className.bind(styles);
const CountrySelected = (props) => {
    const [showList, setShowList] = useState(false);
    const [countries, setCountries] = useState([]);
    const { Country: country } = useSelector(countrySelector);
    const inSideRef = useRef();

    useEffect(() => {
        getCountries()
            .then((res) => {
                if (res && res.data) {
                    const newCountries = sortBy(res.data, 'Country');
                    setCountries(newCountries);
                }
            })
            .catch((error) => console.log(error));
    }, []);

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
            <div
                ref={inSideRef}
                onClick={() => setShowList(!showList)}
                className={cx('country-selected', {
                    showList: showList,
                })}
            >
                <p className={cx('country')}>{country}</p>
                <IconCenter className={cx('icon')} onClick={() => setShowList(!showList)}>
                    {!showList ? (
                        <KeyboardArrowDownOutlinedIcon fontSize="large" />
                    ) : (
                        <KeyboardArrowUpOutlinedIcon fontSize="large" />
                    )}
                </IconCenter>
            </div>
            <div className={cx('country-list')}>{showList && <CountriesList countries={countries} />}</div>
        </div>
    );
};

CountrySelected.propTypes = {};

export default CountrySelected;
