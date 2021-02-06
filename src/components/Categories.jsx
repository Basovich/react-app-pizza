import React from 'react';
import ClassNames from 'classnames';

import {useDispatch} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const Categories = React.memo(({items}) => {
    const [activeItem, setActiveItem] = React.useState(0);
    const dispatch = useDispatch();

    const setActiveCategory = React.useCallback( index => {
        setActiveItem(index);
        dispatch(setCategory(index));
    }, [activeItem, dispatch]);

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

export default Categories;

