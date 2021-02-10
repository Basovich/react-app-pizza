import React from 'react';
import ClassNames from 'classnames';

import {useDispatch} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import PropTypes from "prop-types";


const Categories = React.memo(({items, active}) => {
    const [activeItem, setActiveItem] = React.useState(active);
    const dispatch = useDispatch();

    const setActiveCategory = React.useCallback( index => {
        setActiveItem(index);
        dispatch(setCategory(index));
        dispatch(fetchPizzas());
    }, [dispatch]);

    return (
        <div className="categories">
            <ul>
                {items.map( (name, index) => (
                    <li key={name}
                        onClick={setActiveCategory.bind(null, index)}
                        className={ClassNames('',
                            {'active': index === activeItem})}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
})

Categories.propTypes = {
    items: PropTypes.array.isRequired,
    active: PropTypes.number.isRequired
}



export default Categories;

