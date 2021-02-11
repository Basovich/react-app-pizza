export const addCartPizzas = (item, price, count) => ({
    type: 'ADD_CART_PIZZAS',
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