import React from 'react';
import './Buttons.css';

const Buttons = () => {
    const makeDigits = () => {
        const digitsArr = [];

        for (let i = 9; i > 0; i--) {
            digitsArr.push(<button key={i}>{i}</button>);
        }

        return digitsArr;
    };

    return (
        <div className='buttonPanel'>
            <div className='mainPanel'>
                <div className='special'>
                    <button>AC</button>
                    <button className='specialButton'>C</button>
                </div>
                <div className='digits'>
                    {makeDigits()}
                    <div className='special'>
                        <button className>0</button>
                        <button className='specialButton'>.</button>
                    </div>
                </div>
            </div>
            <div className='rightPanel'>
                <div className='operators'>
                    <button>/</button>
                    <button>*</button>
                    <button>-</button>
                    <button>+</button>
                    <button>=</button>
                </div>
            </div>
        </div>
    );
};

export default Buttons;
