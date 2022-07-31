import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Country from '~/components/Country/Country';
import HighLight from '~/components/HighLight';
import Summary from '~/components/Summary';
import { useSelector } from 'react-redux';
import { countrySelector } from '~/redux/selectors';
import { useEffect } from 'react';
import { getReportByCountry } from '~/httpRequest/apis';
import { useState } from 'react';

const cx = classNames.bind(styles);
const Home = (props) => {
    const [report, setReport] = useState([]);
    const { Slug: slug } = useSelector(countrySelector);

    useEffect(() => {
        if (slug) {
            getReportByCountry(slug)
                .then((res) => {
                    if (res && res.data && res.data.length > 3) {
                        //khong lay ngay hien tai vi chua thong ke
                        const { Active: active, Confirmed: confirmed, Deaths: deaths } = res.data[res.data.length - 2];
                        const newReport = [
                            {
                                title: 'Số ca nhiễm bệnh',
                                count: confirmed,
                                type: 'confirmed',
                            },
                            {
                                title: 'Số ca khỏi bệnh',
                                count: active,
                                type: 'active',
                            },
                            {
                                title: 'Số ca tử vong',
                                count: deaths,
                                type: 'deaths',
                            },
                        ];
                        setReport(newReport);
                    } else {
                        const newReport = [
                            {
                                title: 'Số ca nhiễm bệnh',
                                count: 0,
                                type: 'confirmed',
                            },
                            {
                                title: 'Số ca khỏi bệnh',
                                count: 0,
                                type: 'active',
                            },
                            {
                                title: 'Số ca tử vong',
                                count: 0,
                                type: 'deaths',
                            },
                        ];
                        setReport(newReport);
                    }
                })
                .catch((error) => console.log(error));
        }
    }, [slug]);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Country />
            {report.length > 0 && <HighLight report={report} />}
            <Summary />
        </div>
    );
};

Home.propTypes = {};

export default Home;
