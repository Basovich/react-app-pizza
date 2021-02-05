import React from 'react';
import {Categories, SortPopUp} from "../components";
import PizzaCard from "../components/PizzaCard";
import {useSelector} from "react-redux";


const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sort = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
];

const SelectPizza = () => {
    const {pizzas} = useSelector(({pizzas}) => {
        return {
            pizzas: pizzas.items
        }
    });

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categories} />
                <SortPopUp items={sort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map(pizza => {
                    return <PizzaCard key={pizza.id} {...pizza} />
                })}

            </div>
        </div>
    );
};

export default SelectPizza;
