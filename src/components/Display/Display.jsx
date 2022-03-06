import React from 'react';
import './Display.css';

const Display = ({ digits }) => {
    return <div className='display'>{digits || 0}</div>;
};

export default Display;
