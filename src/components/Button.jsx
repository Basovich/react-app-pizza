import React from 'react';
import ClassNames from 'classnames';

const Button = ({cart, outline, add, children, onClickHandler}) => {

    return (
        <button
            className={ClassNames('button',
            {'button--cart': cart,
            'button--outline': outline,
            'button--add': add})}
            onClick={onClickHandler}
        >
            {children}
        </button>
    )
}

export default Button