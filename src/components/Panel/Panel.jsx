import React from 'react';
import Buttons from '../Buttons/Buttons';
import Display from '../Display/Display';
import './Panel.css';

const Panel = () => {
    return (
        <div className='panel'>
            <Display />
            <Buttons />
        </div>
    );
};

export default Panel;
