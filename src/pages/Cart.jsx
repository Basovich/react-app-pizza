import React from 'react';
import {EmptyCart} from "../components/Cart/EmptyCart";
import {useDispatch, useSelector} from "react-redux";
import ContainerPizzas from "../components/Cart/ContainerPizzas";
import {getCartPizzasLocalstorage} from "../redux/actions/cart";

const Cart = () => {
    const dispatch = useDispatch();
    const {cart, count} = useSelector(({cart}) => {
        return {
            count: cart.count,
            cart
        }

    });

    React.useEffect(() => {
        dispatch(getCartPizzasLocalstorage());
    }, [dispatch]);

    React.useEffect(() => {
        try {
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch (error) {
            alert(error);
        }

    }, [cart]);

    return (
        <div className="container container--cart">
            {count === 0
            ? <EmptyCart />
            : <ContainerPizzas />}
        </div>
    );
};




export default Cart;
