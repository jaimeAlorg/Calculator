import React, { useState, useEffect } from 'react';
import Display from '../Display/Display';
import './Buttons.css';

const Buttons = () => {
    const [operation, setOperation] = useState({
        digit: '',
        operator: '',
        acumulative: 0,
        isOperation: false,
    });

    const onClickDigit = (e) => {
        if (operation.isOperation === true) {
            setOperation({
                ...operation,
                digit: e.target.value,
                isOperation: false,
            });
        } else {
            setOperation({
                ...operation,
                digit: operation.digit + e.target.value,
            });
        }
    };

    const onClickOperation = (e) => {
        if (operation.operator === '') {
            setOperation({
                ...operation,
                acumulative: operation.digit,
                operator: e.target.value,
                isOperation: true,
                savedOperator: true,
            });

            calculate(e.target.value);
        } else {
            calculate(e.target.value);
        }
    };

    const calculate = (operator) => {
        let digitA = parseFloat(operation.digit, 10);
        let digitB = parseFloat(operation.acumulative, 10);

        switch (operation.operator) {
            case '+':
                setOperation({
                    ...operation,
                    digit: digitA + digitB,
                    operator: operator,
                    acumulative: digitA + digitB,
                    isOperation: true,
                });

                break;

            case '-':
                setOperation({
                    ...operation,
                    digit: digitB - digitA,
                    operator: operator,
                    acumulative: digitB - digitA,
                    isOperation: true,
                });

                break;

            case '*':
                setOperation({
                    ...operation,
                    digit: digitB * digitA,
                    operator: operator,
                    acumulative: digitB * digitA,
                    isOperation: true,
                });

                break;

            case '/':
                setOperation({
                    ...operation,
                    digit: digitB / digitA,
                    operator: '/',
                    acumulative: operator,
                    isOperation: true,
                });

                break;
        }
    };

    const onClickReset = () => {
        setOperation({
            digit: '',
            operator: '',
            acumulative: 0,
            isOperation: false,
        });
    };

    const onClickDelete = () => {
        if (operation.digit !== '') {
            setOperation({
                ...operation,
                digit: operation.digit.slice(0, -1),
            });
        }
    };

    const onClickResult = (e) => {
        e.stopPropagation();
        calculate('');
    };

    const makeDigits = () => {
        const digitsArr = [];

        for (let i = 9; i > 0; i--) {
            digitsArr.push(
                <button key={i} onClick={onClickDigit} value={i}>
                    {i}
                </button>
            );
        }

        return digitsArr;
    };

    return (
        <div>
            <Display digits={operation.digit} />
            <div className='buttonPanel'>
                <div className='mainPanel'>
                    <div className='special'>
                        <button onClick={onClickReset}>AC</button>
                        <button
                            className='specialButton'
                            onClick={onClickDelete}
                        >
                            C
                        </button>
                    </div>
                    <div className='digits'>
                        {makeDigits()}
                        <div className='special'>
                            <button onClick={onClickDigit} value={0}>
                                0
                            </button>
                            <button
                                className='specialButton'
                                onClick={onClickDigit}
                                value={'.'}
                            >
                                .
                            </button>
                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <div className='operators'>
                        <button onClick={onClickOperation} value={'/'}>
                            /
                        </button>
                        <button onClick={onClickOperation} value={'*'}>
                            *
                        </button>
                        <button onClick={onClickOperation} value={'-'}>
                            -
                        </button>
                        <button onClick={onClickOperation} value={'+'}>
                            +
                        </button>
                        <button onClick={onClickResult}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buttons;
