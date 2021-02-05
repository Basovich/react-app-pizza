import React from 'react';
import ClassNames from 'classnames';

const Button = ({cart, children, onClickHandler}) => {

    return (
        <button
            className={ClassNames('button',
            {'button--cart': cart})}
            onClick={onClickHandler}
        >
            {children}
        </button>
    )
}

export default Button