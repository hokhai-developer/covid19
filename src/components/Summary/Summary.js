import React from 'react';
import PropTypes from 'prop-types';
import LineChart from '../LineChart';
import HighMaps from '../HighMaps';

const Summary = (props) => {
    return (
        <div>
            <LineChart />
            <HighMaps />
        </div>
    );
};

Summary.propTypes = {};

export default Summary;
