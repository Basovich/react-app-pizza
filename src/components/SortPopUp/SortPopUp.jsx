import React from 'react';
import './SortPopUp.scss';
import {useDispatch} from "react-redux";
import ClassNames from 'classnames';
import {CSSTransition} from "react-transition-group";

import {setSortBy} from "../../redux/actions/filters";
import PropTypes from "prop-types";


const SortPopUp = React.memo(({items, active}) => {
    const activeIndex = items.findIndex(elem => elem.type === active);
    const dispatch = useDispatch();
    const [visiblePopUp, setVisiblePopUp] = React.useState(false);
    const [activeSort, setActiveSort] = React.useState(activeIndex);
    const refSort= React.useRef();
    const activeSortLabel = items[activeSort].name;

    const handlerOutsideClick = React.useCallback( e => {
        // e.path none in Safari
        let path = e.path || (e.composedPath && e.composedPath());

        if (!path.includes(refSort.current)) {
            setVisiblePopUp(false);
        }
    }, []);


    React.useEffect(() => {
        document.body.addEventListener('click', handlerOutsideClick);

        return () => {
            document.body.removeEventListener('click', handlerOutsideClick);
        };
    }, [handlerOutsideClick]);

    function togglePopUp() {
        setVisiblePopUp(!visiblePopUp);
    }

    function setActiveIndex(index, type) {
        setActiveSort(index);
        setVisiblePopUp(false);
        dispatch(setSortBy(type));
    }

    return (
        <div ref={refSort} className="sort">
            <div className="sort__label" >
                <svg className={ClassNames('',
                    {'is-open': visiblePopUp})}
                     width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/></svg>
                <b>Сортировка по:</b>
                <span className="sort__toggle" onClick={togglePopUp}>{activeSortLabel}</span>
            </div>

            <CSSTransition in={visiblePopUp} timeout={200} mountOnEnter unmountOnExit>
                <div className="sort__popup slide">
                    <ul>
                        {items.map( (item, index) => (
                            <li key={item.type}
                                onClick={setActiveIndex.bind(null, index, item.type)}
                                className={ClassNames('',
                                    {'active': index === activeSort})}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </CSSTransition>
        </div>
    );
});

SortPopUp.propTypes = {
    items: PropTypes.array.isRequired,
    active: PropTypes.string.isRequired
}

export default SortPopUp;
