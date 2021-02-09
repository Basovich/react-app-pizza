import axios from "axios";
import {disableScroll} from "../../js/scroll-locker";

export const fetchAllPizzas = (id) => dispatch => {
    const url = 'https://raw.githubusercontent.com/Basovich/react-app-pizza/master/public/db.json';
    axios.get(url)
        .then(respond => {
            if (respond.status === 200) {
                dispatch(showSelectedPizza(id, respond.data.pizzas[id]));
                disableScroll();
            }
            else {
                return 'List empty';
            }
        })
}

export const showSelectedPizza = (id, item) => ({
    type: 'SHOW_SELECT_PIZZA_MODAL',
    payload: {
        item: item,
        id: id
    }
});

export const hideSelectedPizza = () => ({
    type: 'HIDE_SELECT_PIZZA_MODAL'
});