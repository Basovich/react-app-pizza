import axios from "axios";

export const fetchPizzas = () => dispatch => {
    dispatch(setPizzas(false));

    const url = 'https://raw.githubusercontent.com/Basovich/react-app-pizza/master/public/db.json';
    // Imitation of a long diaper
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
    }, 600);
}

export const setPizzas = items => ({
    type: 'SET_PIZZAS',
    payload: items
});

export const setPizzasLoaded = isLoaded => ({
    type: 'SET_PIZZAS_LOADED',
    payload: isLoaded
});