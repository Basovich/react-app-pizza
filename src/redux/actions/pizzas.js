import axios from "axios";

export const fetchPizzas = () => dispatch => {
    dispatch(setPizzasLoaded(false));
    const url = 'https://raw.githubusercontent.com/Basovich/react-app-pizza/gh-pages/db.json';

    setTimeout( () => {
        axios.get(url)
            .then(respond => {
                if (respond.status === 200) {
                    dispatch(setPizzas(respond.data.pizzas));
                    dispatch(setPizzasLoaded(true));
                }
                else {
                    return 'List empty';
                }
            })
    }, 2000);
}

export const setPizzas = items => ({
    type: 'SET_PIZZAS',
    payload: items
});

export const setPizzasLoaded = isLoaded => ({
    type: 'SET_PIZZAS_LOADED',
    payload: isLoaded
});