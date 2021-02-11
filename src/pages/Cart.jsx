import React from 'react';
import {EmptyCart} from "../components/Cart/EmptyCart";
import {useSelector} from "react-redux";
import ContainerPizzas from "../components/Cart/ContainerPizzas";

const Cart = () => {
    const count = useSelector(({cart}) => cart.count);

    return (
        <div className="container container--cart">
            {count === 0
            ? <EmptyCart />
            : <ContainerPizzas />}
        </div>
    );
};




export default Cart;
