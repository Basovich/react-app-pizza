const initialState = {
    show: false,
    pizzaIndex: 0,
    pizza: []
}

const selectPizzaModal = (state = initialState, action) => {
    switch (action.type) {
        case('SHOW_SELECT_PIZZA_MODAL'):
            return {
                ...state,
                show: true,
                pizza: action.payload.item,
                pizzaIndex: action.payload.id
            }

        case('HIDE_SELECT_PIZZA_MODAL'):
            return {
                ...state,
                show: false
            }

        default:
            return state;
    }
}

export {selectPizzaModal};