import React from 'react';
import {Categories, SortPopUp} from "../components";
import PizzaCard from "../components/PizzasCard/PizzaCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../redux/actions/pizzas";
import PizzasLoader from "../components/PizzasCard/PizzasLoader";


const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sort = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'}
];


const SelectPizza = () => {
    const dispatch = useDispatch();
    const {pizzas, isLoaded, category, sortBy} = useSelector(({pizzas, filters}) => {
        return {
            pizzas: pizzas.items,
            isLoaded: pizzas.isLoaded,
            category: filters.category,
            sortBy: filters.sortBy,
        }
    });

    let newPizzas = category === 0
        ? pizzas
        : pizzas.filter(pizza => pizza.category === category);

    console.log(sortBy)

    newPizzas = newPizzas.sort((a, b) => {
        console.log(a);
        console.log(b);

        if (a.popular > b.popular) {
            return 1;
        }
        if (a.popular < b.popular) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });

    console.log()

    React.useEffect(() => {
        dispatch(fetchPizzas());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categories} />
                <SortPopUp items={sort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                    ? newPizzas.map(pizza => {
                        return <PizzaCard key={pizza.id} isLoaded={isLoaded} {...pizza} />
                    })
                    : Array(8).fill('').map(( loader, index) => {
                            return <PizzasLoader key={index} />
                    })
                }
            </div>
        </div>
    );
};

export default SelectPizza;
