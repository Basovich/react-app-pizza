const initialState = {
    items: {},
    price: 0,
    count: 0
}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case('ADD_CART_PIZZAS'):
            const localStorageState = action.payload;
            return {
                items: localStorageState.items,
                price: localStorageState.price,
                count: localStorageState.count,
            }

        case('ADD_CART_PIZZA'):
            const newItems = state.items;
            const propertyName = Object.keys(action.payload.item)[0];

            if ( newItems.hasOwnProperty(propertyName) ) {
                newItems[`${propertyName}`].push(action.payload.item[`${propertyName}`][0]);
            } else {
                newItems[`${propertyName}`] = action.payload.item[`${propertyName}`];
            }

            return {
                ...state,
                items: newItems,
                price: state.price + action.payload.price,
                count: state.count + action.payload.count
            }

        case('DELETE_CART_PIZZA'):
            const afterDelState = state.items;
            afterDelState[`${action.payload.key}`].splice(0, action.payload.count);

            return {
                ...state,
                items: afterDelState,
                price: state.price - action.payload.price,
                count: state.count - action.payload.count
            }

        case('DELETE_CART_ALL_PIZZAS'):
            return {
                ...state,
                items: {},
                price: 0,
                count: 0
            }

        default:
            return state;
    }
}

export {cart};