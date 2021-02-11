import React from 'react';
import './Button.scss';
import ClassNames from 'classnames';

const Button = ({cart, outline, add, circle, children, onClickHandler}) => {

    return (
        <button
            className={ClassNames('button',
            {'button--cart': cart,
            'button--outline': outline,
            'button--add': add,
            'button--circle': circle})}
            onClick={onClickHandler}
        >
            {children}
        </button>
    )
}

export default Button