
export const getCartPizzasLocalstorage = () => dispatch => {
    let initialState = {
        items: {},
        price: 0,
        count: 0
    }

    const data = localStorage.getItem("cart");
    if (data !== undefined) {
        initialState = JSON.parse(localStorage.getItem("cart"))
    }

    dispatch(addCartPizzas(initialState));
}

export const addCartPizzas = (state) => ({
    type: 'ADD_CART_PIZZAS',
    payload: state
});

export const addCartPizza = (item, price, count) => ({
    type: 'ADD_CART_PIZZA',
    payload: {
        item,
        price,
        count
    }
});

export const deleteCartPizza = (key, price, count) => ({
    type: 'DELETE_CART_PIZZA',
    payload: {
        key,
        price,
        count
    }
});

export const deleteCartAllPizzas = () => ({
    type: 'DELETE_CART_ALL_PIZZAS'
});