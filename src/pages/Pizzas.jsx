import React from 'react';
import {Categories, SortPopUp} from "../components";
import {useDispatch, useSelector} from "react-redux";

import {fetchPizzas} from "../redux/actions/pizzas";

import PizzaCard from "../components/PizzasCard/PizzaCard";
import PizzasLoader from "../components/PizzasCard/PizzasLoader";
import SelectPizza from "../components/PizzasCard/SelectPizza";
import {CSSTransition} from "react-transition-group";
import PropTypes from "prop-types";

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sort = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'}
];


const Pizzas = ({path}) => {
    const dispatch = useDispatch();
    const {pizzas, isLoaded, category, sortBy, showSelectPizzaModal} = useSelector(({pizzas, filters, selectPizzaModal}) => {
        return {
            pizzas: pizzas.items,
            isLoaded: pizzas.isLoaded,
            category: filters.category,
            sortBy: filters.sortBy,
            showSelectPizzaModal: selectPizzaModal.show
        }
    });

    console.log(path)

    let newPizzas;
    if (pizzas.length) {
        // filtering
        newPizzas = category === 0
            ? pizzas
            : pizzas.filter(pizza => pizza.category === category);

        // Sorting
        switch (sortBy) {
            case ('popular'):
                newPizzas = newPizzas.sort((a, b) => (a.popular > b.popular) ? 1 : ((b.popular > a.popular) ? -1 : 0))
                break

            case('price'):
                newPizzas = newPizzas.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
                break

            default:
                newPizzas = newPizzas.sort((a, b) => (a.popular > b.popular) ? 1 : ((b.popular > a.popular) ? -1 : 0))
        }
    }


    React.useEffect(() => {
        dispatch(fetchPizzas());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categories}/>
                <SortPopUp items={sort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded && pizzas.length
                        ? newPizzas.map(pizza => {
                            return <PizzaCard key={pizza.id} isLoaded={isLoaded} {...pizza} />
                        })
                        : Array(8).fill('').map((loader, index) => {
                            return <PizzasLoader key={index}/>
                        })
                }
            </div>
            <CSSTransition
                in={showSelectPizzaModal}
                timeout={400}
                mountOnEnter
                unmountOnExit
            >
                <SelectPizza />
            </CSSTransition>
        </div>
    );
};

Pizzas.propTypes = {
    path: PropTypes.string.isRequired
}

Pizzas.defaultProps = {
    path: '/'
};

export default Pizzas;
